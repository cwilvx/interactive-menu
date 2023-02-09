<template>
  <div class="item-card rounded">
    <div class="image">
      <CartSvg class="circular" />
      <img class="rounded-sm" :src="item.image" alt="" />
    </div>
    <div class="info">
      <h3>
        <b>{{ item.name }}</b>
      </h3>
      <div>
        KSh <b>{{ Math.round(Math.random() * 10000) }}.00</b>
      </div>
      <p class="ellip desc">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Item } from "@/interfaces";
import CartSvg from "@/assets/icons/cart.svg";

defineProps<{
  item: Item;
}>();
</script>

<style lang="scss">
.item-card {
  //   border: solid 1px;
  padding: 1rem;
  border: solid 1px $black;
  transition: all 0.2s ease-in-out;

  .image {
    position: relative;

    img {
      width: 100%;
      aspect-ratio: 1;
      object-position: center;
      object-fit: contain;
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
