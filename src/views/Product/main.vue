<template>
  <div class="product-page">
    <Header />
    <div class="product-display">
      <div class="gallery rounded">
        <div class="image">
          <img class="rounded" :src="item.image" />
        </div>
      </div>
      <div class="product-info">
        <section>
          <div class="info">
            <h1>{{ item.name }}</h1>
            <h4 class="price"><b>Ksh 1000</b></h4>
            <p>
              {{ item.description }}
            </p>
          </div>
          <Ingredients
            :ingredients="[
              'Garlic',
              'Tuna',
              'Pepper',
              'Oil',
              'Colliander',
              'Lettuce',
              'Banana',
              'Fish',
              'More fish',
            ]"
          />
          <label for="order_count"><b>How many meals?</b></label>
          <input
            type="number"
            name="order_count"
            class="order_count rounded-sm"
            v-model="order_count"
            placeholder="How many?"
          />
        </section>

        <button
          class="add-to-cart"
          @click.prevent.stop="store.addOrder({ ...item, count: order_count })"
        >
          <CartSvg /> Add to orders | Ksh {{ 1000 * order_count }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

import foods from "@/data/foods";
import useOrderStore from "@/stores/orders";

import CartSvg from "@/assets/icons/cart.svg";
import Header from "@/components/Home/Header.vue";
import Ingredients from "@/components/Product/Ingredients.vue";

const route = useRoute();
const store = useOrderStore();

const order_count = ref(1);

const item = computed(
  () => foods.filter((f, index) => f.id.toString() == route.params.id)[0]
);
</script>

<style lang="scss">
.product-page {
  .product-display {
    display: grid;
    grid-template-columns: 1fr;
    min-height: 30rem;
    gap: 2rem;
  }

  .order_count {
    height: 2rem;
    padding: $small;
    outline: none;
    border: solid $theme;
    font-size: 1rem;
    font-weight: 700;
  }

  label {
    color: $black;
  }

  .gallery {
    img {
      width: 100%;
      max-height: 40rem;
      object-fit: cover;
      object-position: center;
    }
  }

  .product-info {
    section {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .price {
      margin: 0;
      color: white;
      padding: $small 1rem;
      border-radius: $small;
      // background-color: $theme;
      color: $theme;
      border: solid 2px $theme;
      width: max-content;
      border-radius: 20rem;
    }

    .add-to-cart {
      width: 100%;
      margin-top: 2rem;
      height: 3rem;
      background-color: $theme2;
    }
  }
}
</style>
