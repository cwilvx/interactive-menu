<template>
  <header id="home-header">
    <div class="image">
      <img
        class="circular"
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--ZUMyUgWZ--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/am6lv2x37bole6x4poz3.jpg"
        alt=""
      />
    </div>
    <div class="info">
      <h1>Google Pixel Kenya <VerifiedSVG /></h1>
      <p>
        The official Google Pixel store in Kenya. Find the latest Google Pixel
        phones and accessories.
      </p>
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
    svg {
      margin-bottom: -$smaller;
    }
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
