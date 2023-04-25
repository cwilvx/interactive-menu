<template>
  <div id="review-orders">
    <main>
      <h2 class="review-order-heading">
        Your Orders ({{ orderCount(meals) }})
        <div class="status" v-if="$route.params.check == 'view'">
          Status: {{ order_data.delivered ? "Processing" : "In Queue" }}
        </div>
        <span>{{ formatPrice(totalPrice(meals)) }} </span>
      </h2>
      <hr />
      <div class="order-list">
        <OrderCard
          v-for="(order, index) in meals"
          :key="order._id"
          :item="order"
          :index="index"
          :is_readonly="$route.params.check == 'view'"
        />
      </div>
      <div class="no-items" v-if="!meals.length">No Orders</div>
      <div class="total-price" :class="store.totalPrice ? 't-center' : ''">
        Total:
        <b>{{
          $route.params.check == "view"
            ? formatPrice(store.totalPendingPrice)
            : formatPrice(store.totalPrice)
        }}</b>
      </div>
    </main>
    <RouterLink
      :to="{
        name: Routes.SelectTable,
      }"
      v-if="store.orderCount"
      class="checkout button"
      >Proceed to select table</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import OrderCard from "@/components/ReviewOrders/OrderCard.vue";
import { Item } from "@/interfaces";
import { Routes } from "@/router";
import useOrderStore from "@/stores/orders";
import formatPrice from "@/utils/formatPrice";
import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

import { getOrderBySessionId } from "@/data/fetchers";
import getTotalPriceStr from "@/utils/getTotalPrice";

const store = useOrderStore();
const route = useRoute();

const order_data = ref({
  delivered: false,
  meals: [],
  session_id: "",
  table_id: "",
  total_price: 0,
  _id: "",
});

function orderCount(meals: Item[]): number {
  return meals.reduce(
    (acc: number, order: Item) => acc + (order?.count || 0),
    0
  );
}

function totalPrice(meals: Item[]): number {
  return meals.reduce(
    (prev, curr) => prev + (getTotalPriceStr(curr, false) as number),
    0
  );
}

const meals = ref<Item[]>([]);

function getOrderItems() {
  if (route.params.check === "view") {
    getOrderBySessionId(store.session_id).then((res) => {
      if (res) {
        order_data.value = res;
        meals.value = res.meals;
      }
    });

    return;
  }

  meals.value = store.allOrders;
}

onMounted(() => {
  getOrderItems();
});

onBeforeRouteUpdate(() => {
  console.log("route updated");
  getOrderItems();
});
</script>

<style lang="scss">
#review-orders {
  .review-order-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .total-price {
    margin: 2rem 0;
  }

  .checkout {
    height: 3rem;
    cursor: pointer;
  }
}
</style>
