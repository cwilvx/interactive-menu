<template>
  <div class="order-card rounded">
    <RouterLink
      :to="{
        name: Routes.Product,
        params: {
          id: item._id,
        },
      }"
      class="image"
    >
      <img :src="item.image" alt="order image" class="rounded-sm" />
    </RouterLink>
    <div class="desc">
      <h4>
        <RouterLink
          :to="{
            name: Routes.Product,
            params: {
              id: item._id,
            },
          }"
          class="image"
        >
          {{ item.name }}</RouterLink
        >
      </h4>
      <p v-if="item.selected_ingredients.length">
        with
        <span>{{ listToString(item.selected_ingredients) }}</span>
      </p>
      <div class="order-count">
        <button @click="store.decrementCount(index)">−</button>
        <div>
          <b>{{ item.count }}</b>
        </div>
        <button @click="store.incremementCount(index)">+</button>
      </div>
      <h5>
        <span class="price">{{ getTotalPriceStr(item) }}</span>
      </h5>
    </div>
    <div class="remove">
      <DeleteSvg @click="store.removeOrder(index)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DeleteSvg from "@/assets/icons/delete.svg";
import { Item } from "@/interfaces";
import { Routes } from "@/router";
import useOrderStore from "@/stores/orders";
import listToString from "@/utils/listToString";
import getTotalPriceStr from "@/utils/getTotalPrice";

const store = useOrderStore();

defineProps<{
  item: Item;
  index: number;
}>();
</script>

<style lang="scss">
.order-card {
  display: grid;
  grid-template-columns: 1fr 2fr 2rem;
  align-items: center;
  border: solid transparent;
  gap: 1rem;

  p {
    margin-top: -1rem;
    font-size: 14px;
    font-weight: bold;
    color: $theme2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

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
    place-content: flex-end;

    svg {
      scale: 1.5;
      color: $theme;
      cursor: pointer;

      &:hover {
        color: $theme2;
      }
    }
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    background-color: rgb(247, 223, 191);
    padding: 1rem;
    margin: 2rem 0;
    border: solid 1px rgb(255, 196, 161);

    img {
      width: 100%;
    }

    .desc {
      width: 100%;

      .order-count {
        width: 100%;
        grid-template-columns: 3rem 1fr 3rem;
      }
    }

    .remove {
      margin-top: -5rem;
    }
  }
}
</style>
