<template>
  <div class="admin-container">
    <h1 class="heading">
      {{ text }}

      <div class="tab-buttons">
        <button @click="filterDeliveredOrders">View delivered</button>
        <button @click="showAllOrders">Show all</button>
        <button
          @click="
            () => {
              text = 'Add new meal';
              switchTab(tabs.ADD_MEAL);
            }
          "
        >
          Add new meal
        </button>
        <button
          @click="
            () => {
              text = 'Manage meals';
              switchTab(tabs.EDIT_MEAL);
              fetchAllMeals();
            }
          "
        >
          Manage meals
        </button>
      </div>
    </h1>

    <div class="orders" v-if="currentTab == tabs.ORDERS && orders.length">
      <div
        class="order-item rounded-sm"
        v-for="o in orders"
        :key="o.session_id"
      >
        <h1 class="title">
          TABLE {{ o.table_number + 1 }}
          <span>
            {{ formatPrice(getTotalPrice(o.meals)) }}
          </span>
        </h1>
        <div v-for="(item, index) in o.meals" :key="item._id">
          <OrderCard :item="item" :index="index" :is_readonly="true" />
        </div>
        <hr />
        <div class="actions">
          <button
            @click="markAsDelivered(o)"
            :style="{
              opacity: o.delivered ? 0.5 : 1,
            }"
          >
            Mark as {{ o.delivered ? "un" : "" }}seen
          </button>
          <button @click="deleteThisOrder(o._id)">Close order</button>
        </div>
      </div>
    </div>
    <div v-else-if="currentTab == tabs.ORDERS && currentTab == tabs.ORDERS">
      No orders to show!
    </div>

    <div class="new-meal" v-else-if="currentTab == tabs.ADD_MEAL">
      <form @submit.prevent="(e) => submitNewMeal(e, false)">
        <label for="meal_title">Meal name</label>
        <input
          required
          type="text"
          id="meal_title"
          placeholder="eg. Black Coffee"
        />

        <label for="description">Description</label>
        <textarea
          required
          id="description"
          placeholder="eg. Sweet as honey!"
          rows="5"
        ></textarea>

        <label for="price">Price in Ksh</label>
        <input required type="number" id="price" placeholder="eg. 300" />

        <label for="image">Direct image link</label>
        <input
          required
          type="text"
          name="image"
          id="imagelink"
          placeholder="https://..."
        />

        <label for="ingredients">Core ingredients</label>
        <input
          required
          type="text"
          name="ingredients"
          id="ingredients"
          placeholder="eg. Milk, Sugar"
        />

        <label for="optional_ingredients">Optional ingredients</label>
        <input
          type="text"
          name="optional_ingredients"
          id="optional_ingredients"
          placeholder="eg. Cinnamon, Chocolate"
        />

        <button>Add meal</button>
      </form>
    </div>
    <div class="edit-meal-container" v-else-if="currentTab == tabs.EDIT_MEAL">
      <div
        class="meal-item"
        v-for="i in editMealsList"
        :key="i._id"
        :class="{
          'is-editing': currentEditingMealId == i._id,
        }"
      >
        <div class="meal-info">
          <img :src="i.image" alt="" />
          <div class="info">
            <div>
              {{ i.name }}
            </div>
            <div class="actions">
              <button @click="setCurrentEditingMealId(i._id)">Edit meal</button>
              <button
                @click="() => markAs(i)"
                :style="{
                  opacity: i.available ? 0.5 : 1,
                }"
              >
                Mark as {{ i.available ? "un" : "" }}available
              </button>
              <button @click="deleteMeal(i._id)">Delete</button>
            </div>
          </div>
        </div>

        <div class="edit-form" v-if="currentEditingMealId == i._id">
          <hr />
          <form
            @submit.prevent="(e) => submitNewMeal(e, i._id)"
            id="edit-meal-form"
          >
            <label for="meal_title">Meal name</label>
            <input
              required
              type="text"
              id="meal_title"
              placeholder="eg. Black Coffee"
              v-model="i.name"
            />

            <label for="description">Description</label>
            <textarea
              required
              id="description"
              placeholder="eg. Sweet as honey!"
              rows="5"
              v-model="i.description"
            ></textarea>

            <label for="price">Price in Ksh</label>
            <input
              required
              type="number"
              id="price"
              placeholder="eg. 300"
              v-model="i.price"
            />

            <label for="image">Direct image link</label>
            <input
              required
              type="text"
              name="image"
              id="imagelink"
              placeholder="https://..."
              v-model="i.image"
            />

            <label for="ingredients">Core ingredients</label>
            <input
              required
              type="text"
              name="ingredients"
              id="ingredients"
              placeholder="eg. Milk, Sugar"
              v-model="i.ingredients"
            />

            <label for="optional_ingredients">Optional ingredients</label>
            <input
              type="text"
              name="optional_ingredients"
              id="optional_ingredients"
              placeholder="eg. Cinnamon, Chocolate"
              v-model="i.optional_ingredients"
            />

            <button>Save meal</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";

import { Item, Order } from "@/interfaces";
import {
  addMeal,
  deleteOrder,
  getOrders,
  markOrderDelivered,
  getMeals,
  editMeal,
  deleteMealById,
  markMealAsAvailable,
} from "@/data/fetchers";

import getTotalPriceStr from "@/utils/getTotalPrice";
import OrderCard from "@/components/ReviewOrders/OrderCard.vue";
import formatPrice from "@/utils/formatPrice";

const orders: Ref<Order[]> = ref([]);
const text = ref("All orders");

enum tabs {
  ORDERS,
  ADD_MEAL,
  EDIT_MEAL,
}

const currentTab = ref(tabs.ORDERS);

function switchTab(newTab: tabs) {
  currentTab.value = newTab;
}

function markAs(meal: Item) {
  markMealAsAvailable(meal._id).then((res) => {
    meal.available = !meal.available;
  });
}

const editMealsList: Ref<Item[]> = ref([]);
const currentEditingMealId = ref("");

function setCurrentEditingMealId(id: string) {
  currentEditingMealId.value = id;
}

function fetchAllMeals() {
  // fetch all meals and store them in editMealsList
  getMeals().then((res) => {
    editMealsList.value = res;
  });
}

function getTotalPrice(meals: Item[]) {
  // use reduce and getTotalPriceStr(number, false) to get the total price
  return meals.reduce((acc, curr) => {
    return acc + (getTotalPriceStr(curr, false) as number);
  }, 0);
}

function markAsDelivered(order: Order) {
  markOrderDelivered(order._id).then((res) => {
    order.delivered = !order.delivered;
  });
}

function deleteThisOrder(order_id: string) {
  deleteOrder(order_id).then(() => {
    orders.value = orders.value.filter((o) => o._id !== order_id);
  });
}

function deleteMeal(meal_id: string) {
  deleteMealById(meal_id).then(() => {
    editMealsList.value = editMealsList.value.filter((m) => m._id !== meal_id);
  });
}

function submitNewMeal(e: Event, meal_id: string | false) {
  const target = e.target as HTMLFormElement;

  const name = target.meal_title.value;
  const description = target.description.value;
  const image = target.imagelink.value;
  const ingredients = target.ingredients.value;
  const optional_ingredients = target.optional_ingredients.value;
  const price = Number(target.price.value);

  if (!image.startsWith("http")) {
    alert("Please enter a valid image link!");
    return;
  }

  const newMeal = {
    name,
    description,
    price,
    image,
    ingredients,
    optional_ingredients,
  };

  if (meal_id) {
    editMeal({ ...newMeal, _id: meal_id }).then((res) => {
      alert("Meal modified successfully!");
      currentEditingMealId.value = "";
    });
  }

  addMeal(newMeal).then((res) => {
    alert("Meal added successfully!");
    target.reset();
  });
}

const showingDelivered = ref(false);

function filterDeliveredOrders() {
  currentTab.value = tabs.ORDERS;
  orders.value = orders.value.filter((o) => o.delivered);

  showingDelivered.value = true;
  text.value = "Delivered";
}

function showAllOrders() {
  currentTab.value = tabs.ORDERS;
  getOrders().then((res) => {
    orders.value = res;
    text.value = "All orders";
  });
}

onMounted(() => {
  getOrders().then((res) => {
    orders.value = res;
    orders.value = orders.value.reverse();
  });
});
</script>

<style lang="scss">
.edit-meal-container {
  display: grid;
  gap: 2rem;

  button {
    &:hover {
      opacity: 1 !important;
    }
  }

  .edit-form {
    hr {
      margin: 2rem 0;
      opacity: 0.5;
    }
  }

  .is-editing {
    border: solid;
  }

  .meal-item {
    display: grid;
    padding: 1rem;
    border-radius: 1rem;

    .actions {
      display: flex;
      gap: 2rem;

      button:last-child {
        background-color: $theme2;
      }
    }

    .meal-info {
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: 1rem;
    }

    .info {
      button {
        margin-top: $small;
      }
    }

    img {
      width: 10rem;
      height: 5rem;
      object-fit: cover;
      border-radius: $medium;
    }
  }
}
form {
  display: grid;
  max-width: 40rem;
  margin: 0 auto;
  gap: 3rem;
  margin-top: 2rem;
  padding-top: 2rem;

  label {
    margin-bottom: -3rem;
  }

  input,
  textarea {
    border-radius: $medium;
    border: none;
    padding: $small 1rem;
    font-size: 1rem;
    font-family: inherit;
    background-color: rgba(172, 100, 40, 0.171);
  }

  input {
    height: 3rem;
  }

  textarea {
    padding-top: 1rem;
  }

  button {
    height: 3rem;
  }
}
.admin-container {
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid $gray1;

    .tab-buttons {
      display: flex;
      gap: 1rem;

      button {
        padding: $medium;
        height: 3rem;
      }

      button:nth-child(2) {
        margin-right: 2rem;
      }

      button:last-child {
        background-color: $theme2;
        margin-left: 2rem;
        // color: $white;
      }
    }
  }
}

.order-item {
  border: solid;
  margin-bottom: 3rem;
  padding: 2rem;
  border-width: 1px;
  border-color: $gray1;

  .title {
    display: flex;
    justify-content: space-between;
  }

  .order-card {
    margin-bottom: $small;
  }

  .actions {
    display: flex;
    justify-content: space-between;
  }

  hr {
    opacity: 0.34;
    margin: 1.75rem 0;
  }

  button {
    padding: $medium;
    height: 3rem;

    &:nth-child(2) {
      background-color: $theme2;
      color: $white;
    }

    &:hover {
      opacity: 1 !important;
    }
  }
}
</style>
