<template>
  <nav>
    <div class="right"></div>
    <div class="left">
      <RouterLink to="/review" class="cart">
        <button>
          <CartSvg class="circular" />
          Review order
          <div class="counter rounded">
            {{ store.orderCount }}
          </div>
        </button>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import CartSvg from "@/assets/icons/cart.svg";
import useOrderStore from "@/stores/orders";

const store = useOrderStore();
</script>

<style lang="scss">
nav {
  display: grid;
  grid-template-columns: 1fr max-content;
  margin-bottom: 1rem;

  .left {
    display: flex;
    gap: 1rem;
  }

  .cart {
    position: relative;
    text-decoration: none;

    button {
      background-color: transparent;
      border: solid 1px $black;
      color: $black;

      svg {
        scale: 0.75;
      }

      &:hover {
        background-color: $black;
        color: $white;
      }
    }

    .counter {
      position: absolute;
      top: -$small;
      right: -$small;
      padding: 2px;

      font-size: small;
      background-color: $black;
      color: $white;
      height: 1rem;
      width: 1rem;
      text-align: center;
    }
  }
}
</style>
