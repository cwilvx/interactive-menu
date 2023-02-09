<template>
  <div class="item-list">
    <ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import ItemCard from "@/components/Cards/ItemCard.vue";

const items = [
  {
    name: "Google Pixel",
    image: "https://www.pngitem.com/pimgs/m/286-2869455_google-pixel-2-vs-apple-iphone-8-hd.png",
    description:
      "This Company's awesome tagline. Lorem ipsum dolor sit amet consectetur",
    price: 1000,
    id: 1,
  },
  {
    name: "Google Pixel",
    image: "https://www.pngitem.com/pimgs/m/580-5805143_google-pixel-4xl-google-pixel-4-hd-png.png",
    description:
      "This Company's awesome tagline. Lorem ipsum dolor sit amet consectetur",
    price: 1000,
    id: 2,
  },
  {
    name: "Google Pixel",
    image: "https://www.pngitem.com/pimgs/m/286-2869693_google-pixel-2-best-camera-smartphone-google-pixel.png",
    description:
      "This Company's awesome tagline. Lorem ipsum dolor sit amet consectetur",
    price: 1000,
    id: 3,
  },
  {
    name: "Google Pixel",
    image: "https://www.pngitem.com/pimgs/m/287-2870200_case-live-google-pixel-google-earth-live-case.png",
    description:
      "This Company's awesome tagline. Lorem ipsum dolor sit amet consectetur",
    price: 1000,
    id: 4,
  },
  {
    name: "Google Pixel",
    image: "https://www.pngitem.com/pimgs/m/460-4609684_google-pixel-4-xl-hd-png-download.png",
    description:
      "This Company's awesome tagline. Lorem ipsum dolor sit amet consectetur",
    price: 1000,
    id: 5,
  },
  {
    name: "Google Pixel",
    image: "https://www.pngitem.com/pimgs/m/287-2870001_pixel-hd-png-download.png",
    description:
      "This Company's awesome tagline. Lorem ipsum dolor sit amet consectetur",
    price: 1000,
    id: 6,
  },
  {
    name: "Google Pixel",
    image: "https://www.pngitem.com/pimgs/m/287-2870271_pixel-3a-back-hd-png-download.png",
    description:
      "This Company's awesome tagline. Lorem ipsum dolor sit amet consectetur",
    price: 1000,
    id: 7,
  },
  {
    name: "Google Pixel",
    image: "https://www.pngitem.com/pimgs/m/376-3760180_google-pixel-google-pixel-4-xl-hd-png.png",
    description:
      "This Company's awesome tagline. Lorem ipsum dolor sit amet consectetur",
    price: 1000,
    id: 8,
  },
  {
    name: "Google Pixel",
    image: "https://www.pngitem.com/pimgs/m/6-68335_google-pixel-3a-black-hd-png-download.png",
    description:
      "This Company's awesome tagline. Lorem ipsum dolor sit amet consectetur",
    price: 1000,
    id: 9,
  },
];
</script>

<style lang="scss">
.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 4rem 2rem;
}
</style>
