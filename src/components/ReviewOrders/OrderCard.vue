<template>
  <div class="order-card rounded">
    <div class="image">
      <img :src="order.image" alt="order image" class="rounded-sm" />
    </div>
    <div class="desc">
      <h4>{{ order.name }}</h4>
      <div class="order-count">
        <button>−</button>
        <div>
          <b>{{ order.count }}5</b>
        </div>
        <button>+</button>
      </div>
      <h5>Ksh <span class="price">4000</span></h5>
    </div>
    <div class="remove">
      <DeleteSvg />
    </div>
  </div>
</template>

<script setup lang="ts">
import DeleteSvg from "@/assets/icons/delete.svg";
import { Item } from "@/interfaces";

defineProps<{
  order: Item;
}>();
</script>

<style lang="scss">
.order-card {
  display: grid;
  grid-template-columns: 1fr 2fr 2rem;
  align-items: center;
  border: solid transparent;

  .order-count {
    display: grid;
    grid-template-columns: 1fr 5rem 1fr;
    width: 12rem;
    gap: 1rem;
    color: $theme;

    div {
      display: grid;
      place-content: center;
      border-radius: 0.25rem;
      cursor: pointer;
      height: 2rem;
      border: none;
      // font-size: 1.25rem;
    }

    button {
      border: solid 2px $theme2;
      background-color: transparent;
      color: $theme2;
    }
  }

  img {
    height: 10rem;
    width: 14rem;

    object-fit: cover;
    object-position: center;
  }

  .price {
    font-size: 1.15rem;
  }

  .remove {
    display: grid;
    place-content: center;

    svg {
      scale: 1.5;
      color: $theme;
      cursor: pointer;

      &:hover {
        color: $theme2;
      }
    }
  }
}
</style>
