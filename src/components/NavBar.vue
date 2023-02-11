<template>
  <nav>
    <div class="right"></div>
    <div class="left">
      <div class="cart">
        <button>
          <CartSvg class="circular" />
          Review cart
        </button>
        <div class="counter rounded">9</div>
      </div>

      <button>Checkout</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import CartSvg from "@/assets/icons/cart.svg";
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

    button {
      background-color: transparent;
      border: solid 1px $green;
      color: $green;

      svg {
        scale: 0.75;
      }

      &:hover {
        background-color: $green;
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
