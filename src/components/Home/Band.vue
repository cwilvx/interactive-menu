<template>
  <div class="page-band">
    <h2 class="page-title">What can we serve you today?</h2>
    <div class="search-input">
      <input
        type="text"
        placeholder="bon appétit?"
        @change="submitQuery"
        v-model="query"
      />
      <button @click="submitQuery">Search</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const query = ref("");
const emit = defineEmits<{
  (event: "updateQuery", query: string): void;
}>();

function submitQuery() {
  emit("updateQuery", query.value);
}
</script>

<style lang="scss">
.page-band {
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 1rem;
  align-items: center;
  margin: 1rem 0;

  @media screen and (max-width: 840px) {
    grid-template-columns: 1fr;

  }

  @media screen and (max-width: 455px) {
    h2 {
      width: 100%;
      text-align: center;
    }
  }
  

  .search-input {
    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 1rem;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 840px) {
      grid-template-columns: minmax(10rem, 1fr) max-content !important;
    }
  }

  input {
    padding: $small 1rem;
    border: solid 2px $theme;
    border-radius: 0.5rem;
    outline: none;
    font-size: 1.2rem;
    min-width: 8rem !important;
  }

  button {
    height: 100%;
    padding: 0 2rem;
  }
}

.page-title {
  width: max-content;
}
</style>
