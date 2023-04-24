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
    <button class="finish" @click="logFinish">Finish</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selected = ref(1);

function logFinish() {
  if (selected.value === 1) {
    alert("Please select a table");
    return;
  }

  alert("Your order has been placed!");
}
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
    max-width: 30rem;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 1rem;
    border: solid $theme2;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3rem;

    @media screen and (max-width: 500px) {
      gap: 2rem;

      .table {
        width: 2rem !important;
        height: 2rem !important;
      }
    }

    button {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    .table {
      width: 100%;
      aspect-ratio: 1;
      background-color: $theme;
      border-radius: 50%;
      display: grid;
      place-content: center;
      color: white;
      font-size: large;
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
