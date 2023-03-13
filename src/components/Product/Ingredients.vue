<template>
  <div class="meal-ingredients rounded">
    <h3>Ingredients</h3>
    <ul>
      <li
        class="rounded-sm"
        v-for="ingredient in ingredients.slice(0, -3)"
        :key="ingredient"
      >
        {{ ingredient }}
      </li>
    </ul>
    <h4>Optional ingredients</h4>
    <ul>
      <li
        class="rounded-sm"
        v-for="ingredient in ingredients.slice(-3)"
        :key="ingredient"
      >
        {{ ingredient }}
      </li>
    </ul>
    <button class="modify-ings">Modify ingredients</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  ingredients: string[];
}>();
</script>

<style lang="scss">
.meal-ingredients {
  border: solid 1px $brown;
  padding: 1rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    &:nth-child(2) {
      li {
        border: none;
        border: solid 1px $green;
        color: $green;
      }
    }

    li {
      margin-bottom: 0.5rem;
      padding: $smaller 1rem;
      border: solid 1px $brown;
      color: $brown;
      border-radius: 6px;
    }
  }

  .modify-ings {
    background-color: $brown;
    height: 3rem;
    width: 100%;
    margin-top: 1rem;
  }
}
</style>
