<template>
  <RouterLink
    class="item-card"
    :to="{
      name: Routes.Product,
      params: { id: item._id },
    }"
  >
    <div class="image">
      <CartSvg
        class="circular"
        @click.sptop.prevent="
          store.addOrder({ ...item, count: 1, selected_ingredients: [] })
        "
      />
      <img class="rounded" :src="item.image" alt="" />
    </div>
    <div class="info">
      <h4 class="ellip">
        <b>{{ item.name }}</b>
      </h4>
      <h5>
        <b>{{ formatPrice(item.price) }}</b>
      </h5>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { Routes } from "@/router";
import { Item } from "@/interfaces";
import useOrderStore from "@/stores/orders";

import CartSvg from "@/assets/icons/cart.svg";
import formatPrice from "@/utils/formatPrice";

defineProps<{
  item: Item;
}>();

const store = useOrderStore();
</script>

<style lang="scss">
.item-card {
  text-decoration: none;
  color: $black;
  border: solid 1px transparent;

  h4,
  h5 {
    margin: $smaller 0;
  }

  h5 {
    opacity: 0.75;
  }

  .image {
    position: relative;

    img {
      width: 100%;
      aspect-ratio: 1;
      object-position: center;
      object-fit: cover;
    }
  }

  .desc {
    opacity: 0.8;
  }

  svg {
    position: absolute;
    bottom: 2rem;
    right: 2rem;

    padding: 1rem;
    background-color: black;
    color: $white;
    opacity: 0;
    transform: translateY(1rem);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  &:hover {
    svg {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.2s ease-in-out;
      transition-delay: 0.25s;
    }
  }

  @media screen and (max-width: 840px) {
    svg {
      transform: translateY(0);
      opacity: 1;
    }

    img {
      aspect-ratio: 2/1.25 !important;
    }
  }
}
</style>
