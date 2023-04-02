<template>
  <div class="item-list">
    <ItemCard
      v-for="item in items.filter(
        (item) => item.name.toLowerCase().indexOf(query) !== -1
      )"
      :key="item.id"
      :item="item"
    />
  </div>
  <h3
    class="no-items"
    v-if="
      !items.filter((item) => item.name.toLowerCase().indexOf(query) !== -1)
        .length
    "
  >
  😿 No meals found for your search
  </h3>
</template>

<!-- implement fuzzy search -->

<script setup lang="ts">
import ItemCard from "@/components/Cards/ItemCard.vue";
import items from "@/data/foods";

defineProps<{
  query: string;
}>();

console.log(items)
</script>

<style lang="scss">
.item-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 4rem 2rem;

  .no-items {
    border: solid;
  }
}
</style>
