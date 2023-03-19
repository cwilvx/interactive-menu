<template>
  <div id="review-orders">
    <AppHeader />
    <main>
      <h2 class="review-order-heading">
        Your Orders ({{ store.orderCount }}) <span>{{ formatPrice(store.totalPrice) }}</span>
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
      <div class="total-price" :class="store.totalPrice ? 't-center': ''">
        Total: <b>{{ formatPrice(store.totalPrice) }}</b>
      </div>
    </main>
    <button v-if="store.orderCount" class="checkout" @click="takeTableNo">Make order</button>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/Home/Header.vue";
import OrderCard from "@/components/ReviewOrders/OrderCard.vue";
import useOrderStore from "@/stores/orders";
import formatPrice from "@/utils/formatPrice";

const store = useOrderStore();

function takeTableNo() {
  const table_input = prompt("Enter your table number");
  const table_no = parseInt(table_input || "9990223444");

  console.log(table_no);
  if (isNaN(table_no) || table_no === 9990223444) {
    alert("Invalid table number");
    return;
  }
}
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
