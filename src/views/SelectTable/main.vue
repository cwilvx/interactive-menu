<template>
  <div class="select-tables">
    <h2>Which table are you at?</h2>
    <hr />
    <div class="table-list rounded">
      <div
        class="table"
        v-for="index in Array.from(Array(14).keys())"
        :class="index === selected ? 'selected' : ''"
        @click="selected = index"
      >
        {{ index + 1 }}
      </div>
      <div class="table">
        <button class="rounge obj btn-disabled">
          <span>ENTRANCE</span>
        </button>
      </div>
    </div>
    <button class="finish">Finish</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selected = ref(1);
</script>

<style lang="scss">
.select-tables {
  .finish {
    margin-top: 3rem;
    width: 100%;
    height: 3rem;
  }

  .selected {
    background-color: $theme2 !important;
  }

  .table-list {
    position: relative;
    width: 30rem;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 1rem;
    border: solid $theme2;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3rem;

    button {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    .table {
      width: 100%;
      background-color: $theme;
      border-radius: 50%;
      aspect-ratio: 1;
      display: grid;
      place-content: center;
      color: white;
      font-size: xx-large;
      cursor: pointer;
      position: relative;

      &:hover {
        background-color: $theme2;
      }
    }

    .table:nth-child(even) {
      opacity: 0;
      pointer-events: none;
    }

    .table:last-child {
      background-color: transparent;

      button {
        background-color: $theme2;
      }
    }
  }
}
</style>
