<template>
  <RouterLink
    class="item-card"
    :to="{
      name: Routes.Product,
      params: { id: item.id },
    }"
  >
    <div class="image">
      <CartSvg class="circular" @click.stop.prevent="() => {}" />
      <img class="rounded" :src="item.image" alt="" />
    </div>
    <div class="info">
      <h4 class="ellip">
        <b>{{ item.name }}</b>
      </h4>
      <h5>
        KSh <b>{{ Math.round(Math.random() * 10000) }}.00</b>
      </h5>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { Item } from "@/interfaces";
import CartSvg from "@/assets/icons/cart.svg";
import { Routes } from "@/router";

defineProps<{
  item: Item;
}>();
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

  &:hover {
    svg {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.2s ease-in-out;
      transition-delay: 0.25s;
    }
  }

  svg {
    position: absolute;
    bottom: -1rem;
    right: 1rem;

    padding: 1rem;
    background-color: $theme;
    color: $white;
    opacity: 0;
    transform: translateY(1rem);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
}
</style>
