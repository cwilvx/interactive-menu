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
      <h1 class="company-name">McKimata's<VerifiedSVG /></h1>
      <br />
      <p><i>je savais que tu ferais ça 😹😸</i></p>
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
  // margin-bottom: 3rem;

  @media screen and (max-width: 628px) {
    grid-template-columns: 1fr;
    place-content: center;

    h1, p {
      text-align: center;
    }

    .image {
      display: grid;
      place-content: center;
    }
  }

  h1 {
    margin: 0;
    color: $theme;

    svg {
      margin-bottom: -$smaller;
    }
  }

  p {
    margin: 0;
    color: $theme;
  }

  img {
    width: 15rem;
    //   height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    border: solid 5px $theme2;
  }
}
</style>
