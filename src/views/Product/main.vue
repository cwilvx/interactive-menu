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
        </section>

        <button class="add-to-cart">
          <CartSvg /> Add to orders | Ksh 1000
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Home/Header.vue";
import CartSvg from "@/assets/icons/cart.svg";
import { useRoute } from "vue-router";
import foods from "@/data/foods";
import { computed } from "vue";
import Ingredients from "@/components/Product/Ingredients.vue";

const route = useRoute();

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
      border: solid 1px $gray2;
      padding: $small 1rem;
      border-radius: $small;
      background-color: $gray2;
    }

    .add-to-cart {
      width: 100%;
      margin-top: 2rem;
      height: 3rem;
      background-color: $black;
    }
  }
}
</style>
