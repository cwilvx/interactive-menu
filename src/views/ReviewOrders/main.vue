<template>
  <div id="review-orders">
    <AppHeader />
    <main>
      <h2 class="review-order-heading">
        Your Orders <span>Ksh {{ store.totalPrice }}</span>
      </h2>
      <hr />
      <div class="order-list">
        <OrderCard
          v-for="order in items.splice(0, 3)"
          :key="order.id"
          :order="order"
        />
      </div>
      <div class="total-price t-center">
        Total: Ksh <b>{{ store.totalPrice }}</b>
      </div>
    </main>
    <!-- <hr /> -->
    <button class="checkout" @click="takeTableNo">Make order</button>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/Home/Header.vue";
import useOrderStore from "@/stores/orders";
import OrderCard from "@/components/ReviewOrders/OrderCard.vue";
import items from "@/data/foods";

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
    cursor: pointer;
  }
}
</style>
