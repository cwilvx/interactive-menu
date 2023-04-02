<template>
  <div class="product-page">
    <div class="product-display">
      <div class="gallery rounded">
        <div class="image">
          <img class="rounded" :src="item.image" />
        </div>
      </div>
      <div class="product-info">
        <section>
          <div class="info">
            <h1>{{ item.name }}</h1>
            <h4 class="price">
              <b>{{ formatPrice(item.price) }}</b>
            </h4>
            <p>
              {{ item.description }}
            </p>
          </div>
          <Ingredients
            :ingredients="item.ingredients"
            :optional="item.optional_ingredients"
            :selected_optional="selected_optional"
            @addOptionalIngredient="addOptionalIngredient"
            @removeOptionalIngredient="removeOptionalIngredient"
          />
          <label for="order_count"><b>How many meals?</b></label>
          <input
            type="number"
            max="10"
            min="1"
            name="order_count"
            class="order_count rounded-sm"
            v-model="order_count"
            placeholder="How many?"
          />
        </section>

        <button class="add-to-cart" @click="submitOrder(item)">
          <CartSvg /> Add to orders |
          {{
            formatPrice(
              item.price * order_count + getSelectedIngredientsTotalPrice()
            )
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, Ref, ref } from "vue";
import { useRoute } from "vue-router";

import foods from "@/data/foods";
import useOrderStore from "@/stores/orders";

import CartSvg from "@/assets/icons/cart.svg";
import Ingredients from "@/components/Product/Ingredients.vue";
import { Item } from "@/interfaces";
import calcIngredientPrice from "@/utils/calcPrice";
import formatPrice from "@/utils/formatPrice";

const route = useRoute();
const store = useOrderStore();

const order_count = ref(1);

const item = computed(
  () => foods.filter((f, index) => f.id.toString() == route.params.id)[0]
);

const selected_optional: Ref<string[]> = ref([]);

const addOptionalIngredient = (item: string) => {
  selected_optional.value.indexOf(item) === -1
    ? selected_optional.value.push(item)
    : null;
};

const removeOptionalIngredient = (item: string) => {
  const index = selected_optional.value.indexOf(item);
  selected_optional.value.splice(index, 1);
};

function getSelectedIngredientsTotalPrice() {
  return selected_optional.value.reduce(
    (prev, curr) => prev + calcIngredientPrice(curr),
    0
  );
}

function submitOrder(item: Item) {
  const order = {
    ...item,
    count: order_count.value,
    selected_ingredients: selected_optional.value,
  };
  store.addOrder(order);
}
</script>

<style lang="scss">
.product-page {
  padding-top: 3rem;

  .product-display {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 30rem;
    gap: 2rem;
  }

  .order_count {
    height: 2rem;
    padding: $small;
    outline: none;
    border: solid $theme;
    font-size: 1rem;
    font-weight: 700;
  }

  label {
    color: $black;
  }

  .gallery {
    img {
      width: 100%;
      max-height: 40rem;
      object-fit: cover;
      object-position: center;
    }
  }

  .product-info {
    section {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .price {
      margin: 0;
      color: white;
      padding: $small 1rem;
      border-radius: $small;
      color: $theme;
      border: solid 2px $theme;
      width: max-content;
      border-radius: 20rem;
    }

    .add-to-cart {
      width: 100%;
      margin-top: 2rem;
      height: 3rem;
    }
  }
}
</style>
