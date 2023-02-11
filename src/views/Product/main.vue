<template>
  <div class="product-page">
    <Header />
    <div class="product-display">
      <div class="gallery rounded">
        <div class="image">
          <img
            src="https://www.pngitem.com/pimgs/m/580-5805143_google-pixel-4xl-google-pixel-4-hd-png.png"
            alt="Google Pixel 6a"
          />
        </div>
      </div>
      <div class="product-info">
        <h2>Google Pixel 6a</h2>
        <h3 class="price"><b>Ksh 1000</b></h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam minus
          excepturi, delectus molestiae dolorum quidem deleniti sit architecto,
          ratione harum, similique placeat suscipit doloribus. Et quae dolorem
          dolore soluta? Tenetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, numquam
          ipsa adipisci ab rem ratione praesentium possimus ea sunt cum autem
          exercitationem soluta. Deserunt vel cumque voluptates mollitia
          doloribus omnis.
        </p>
        <div class="attrs rounded-sm">
          <b>Color</b>
          <div class="options">
            <div class="opt"></div>
            <div class="opt"></div>
            <div class="opt"></div>
            <div class="opt selected"></div>
            <div class="opt"></div>
          </div>
        </div>
        <button class="add-to-cart"><CartSvg /> Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Home/Header.vue";
import CartSvg from "@/assets/icons/cart.svg";
</script>

<style lang="scss">
.product-page {
  .product-display {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 30rem;
    gap: 2rem;
  }

  .gallery {
    border: solid 1px $gray;

    img {
      height: 30rem;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .product-info {
    .attrs {
      // border: solid 1px $gray;
      padding: $small;
      display: grid;
      gap: $small;

      .options {
        display: flex;
        gap: 1rem;

        .opt {
          width: 3rem;
          border: solid 3px transparent;
          aspect-ratio: 1;
          border-radius: 50%;
          background-color: $black;
        }

        .opt:last-child {
          background-color: $darkblue;
        }

        .opt:nth-child(3) {
          background-color: $green;
        }

        .opt:nth-child(4) {
          background-color: $orange;
        }

        .opt:nth-child(2) {
          background-color: $purple;
        }

        .opt.selected {
          border-color: $black;
        }
      }
    }

    .add-to-cart {
      width: 100%;
      margin-top: 2rem;
      height: 3rem;
    }
  }
}
</style>
