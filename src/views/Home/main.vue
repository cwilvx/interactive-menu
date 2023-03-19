<template>
  <Band @updateQuery="handleChange" />
  <ItemList :query="query" />
</template>

<script setup lang="ts">
import { ref } from "vue";

import ItemList from "@/components/Home/ItemList.vue";
import Band from "@/components/Home/Band.vue";

const query = ref("");

function handleChange(newQuery: string) {
  query.value = newQuery;
  console.log(query.value);
}
</script>

<style lang="scss"></style>
