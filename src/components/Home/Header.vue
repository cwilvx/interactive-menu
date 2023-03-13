<template>
  <header id="home-header">
    <div class="image">
      <RouterLink to="/">
        <img
          class="circular"
          src="https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-hand-drawn-cute-cartoon-burger-with-food-elements-elementlovely-foodcartoon-foodhand-png-image_613521.jpg"
          alt=""
        />
      </RouterLink>
    </div>
    <div class="info">
      <h1>McKimatas<VerifiedSVG /></h1>
      <p><i>🍎 Nous vendons de la nourriture de merde, amusez-vous 🌟🥂</i></p>
    </div>
  </header>
</template>

<script setup lang="ts">
import VerifiedSVG from "@/assets/icons/verified.svg";
</script>

<style lang="scss">
#home-header {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 1rem;
  height: 20rem;
  align-items: center;
  padding: 2rem;

  h1 {
    margin: 0;

    svg {
      margin-bottom: -$smaller;
    }
  }

  p {
    margin: 0;
  }

  img {
    width: 15rem;
    //   height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    border: solid 1px rgb(219, 219, 219);
  }
}
</style>
