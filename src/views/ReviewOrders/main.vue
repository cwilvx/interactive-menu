<template>
  <div id="review-orders">
    <main
      v-for="order in order_data"
      :key="order._id"
      style="margin-bottom: 5rem"
    >
      <h2 class="review-order-heading">
        <span v-if="!($route.params.check == 'view')">
          Your Orders ({{ orderCount(order.meals) }})
        </span>
        <div
          class="status"
          v-if="$route.params.check == 'view' && order.meals.length"
        >
          {{ order.delivered ? "Cooking" : "In Queue" }}
        </div>
        <span>{{ formatPrice(totalPrice(order.meals)) }} </span>
      </h2>
      <hr />
      <div class="order-list">
        <OrderCard
          v-for="(o, index) in order.meals"
          :key="o._id"
          :item="o"
          :index="index"
          :is_readonly="$route.params.check == 'view'"
        />
      </div>
      <div class="no-items" v-if="!order.meals.length">No Orders</div>
      <div class="total-price" :class="store.totalPrice ? 't-center' : ''">
        Total:
        <b>{{ formatPrice(totalPrice(order.meals)) }}</b>
      </div>
    </main>
    <RouterLink
      v-if="store.orderCount"
      :to="{
        name: Routes.SelectTable,
      }"
      class="checkout button"
      >Proceed to select table</RouterLink
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

import { Routes } from "@/router";
import { Item } from "@/interfaces";
import useOrderStore from "@/stores/orders";
import formatPrice from "@/utils/formatPrice";

import OrderCard from "@/components/ReviewOrders/OrderCard.vue";

import { getOrderBySessionId } from "@/data/fetchers";
import getTotalPriceStr from "@/utils/getTotalPrice";

const store = useOrderStore();
const route = useRoute();

const order_data = ref([
  {
    delivered: false,
    meals: <Item[]>[],
    session_id: "",
    _id: "no_id",
  },
]);

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

function getOrderItems() {
  if (route.params.check === "view") {
    getOrderBySessionId(store.session_id).then((res) => {
      
      console.log(store.session_id, res)
      if (res) {
        order_data.value = res;
      }
    });

    return;
  }
  store.allOrders;

  order_data.value = [
    {
      session_id: store.session_id,
      delivered: false,
      meals: store.allOrders,
      _id: "default",
    },
  ];
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
