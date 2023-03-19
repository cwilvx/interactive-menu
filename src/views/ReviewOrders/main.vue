<template>
  <div id="review-orders">
    <main>
      <h2 class="review-order-heading">
        Your Orders ({{ store.orderCount }})
        <span>{{ formatPrice(store.totalPrice) }}</span>
      </h2>
      <hr />
      <div class="order-list">
        <OrderCard
          v-for="(order, index) in store.allOrders"
          :key="order.id"
          :item="order"
          :index="index"
        />
      </div>
      <div class="no-items" v-if="!store.allOrders.length">No Orders</div>
      <div class="total-price" :class="store.totalPrice ? 't-center' : ''">
        Total: <b>{{ formatPrice(store.totalPrice) }}</b>
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
import { Routes } from "@/router";
import useOrderStore from "@/stores/orders";
import formatPrice from "@/utils/formatPrice";

const store = useOrderStore();
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
    width: 100%;
    height: 3rem;
    cursor: pointer;
  }
}
</style>
