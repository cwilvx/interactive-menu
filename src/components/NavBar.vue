<template>
  <nav>
    <div class="right"></div>
    <div class="left" v-if="admin.is_admin">
      Hi, Admin
      <RouterLink to="" class="cart">
        <button @click="logoutAdmin">Logout</button>
      </RouterLink>
    </div>
    <div class="left" v-else>
      <RouterLink
        :to="{
          name: Routes.ReviewOrders,
          params: {
            check: 'view',
          },
        }"
        class="cart"
      >
        <button>My orders</button>
      </RouterLink>
      <RouterLink to="/review/review" class="cart">
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
import { Routes } from "@/router";
import useOrderStore from "@/stores/orders";
import useAdminStore from "@/stores/admin";

import { logout } from "@/data/fetchers";
import { useRouter } from "vue-router";

const store = useOrderStore();
const admin = useAdminStore();
const router = useRouter();

function logoutAdmin() {
  logout().then(() => {
    // reload the page
    router.go(0);
  });
}
</script>

<style lang="scss">
nav {
  display: grid;
  grid-template-columns: 1fr max-content;
  margin-bottom: 1rem;

  .left {
    align-items: center;
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
