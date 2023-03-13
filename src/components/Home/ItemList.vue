<template>
  <div class="item-list">
    <ItemCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import ItemCard from "@/components/Cards/ItemCard.vue";
import items from "@/data/foods";
</script>

<style lang="scss">
.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 4rem 2rem;
}
</style>
