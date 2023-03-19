<template>
  <div class="meal-ingredients rounded">
    <h3>Ingredients</h3>
    <p>
      These ingredients are necessary for this meal. They have to be in the
      meal.
    </p>
    <ul>
      <li
        class="rounded-sm"
        v-for="ingredient in ingredients
          .map((item) => ({ ingredient: item, type: 'required' }))
          .concat(
            selected_optional.map((item) => ({
              ingredient: item,
              type: 'optional',
            }))
          )"
        :key="ingredient.ingredient"
        :class="`${ingredient.type}`"
      >
        {{ ingredient.ingredient }}
        <span
          v-if="ingredient.type === 'optional'"
          class="add"
          @click="removeOptionalIngredient(ingredient.ingredient)"
          >-</span
        >
      </li>
    </ul>
    <h3>Optional ingredients</h3>
    <p>These ingredients can be included at your cost.</p>
    <ul>
      <li
        class="rounded-sm optional-ing"
        v-for="ingredient in optional.filter(
          (item) => selected_optional.indexOf(item) == -1
        )"
        :key="ingredient"
      >
        <b>{{ ingredient }}</b> • {{ formatPrice(price(ingredient)) }}
        <span class="add" @click="addOptionalIngredient(ingredient)">+</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import price from "@/utils/calcPrice";
import formatPrice from "@/utils/formatPrice";

defineProps<{
  ingredients: string[];
  optional: string[];
  selected_optional: string[];
}>();

const emit = defineEmits<{
  (event: "addOptionalIngredient", item: string): void;
  (event: "removeOptionalIngredient", item: string): void;
}>();

const addOptionalIngredient = (item: string) => {
  emit("addOptionalIngredient", item);
};

const removeOptionalIngredient = (item: string) => {
  emit("removeOptionalIngredient", item);
};
</script>

<style lang="scss">
.meal-ingredients {
  border: solid $theme2;
  padding: 1rem;

  .add {
    background-color: $gray5;
    position: absolute;
    right: -3px;
    height: 115%;
    aspect-ratio: 1;
    top: -3px;
    display: grid;
    place-content: center;
    border-radius: 0 6px 6px 0;

    font-size: 2rem;
    cursor: pointer;
  }

  .required {
    padding-right: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: medium;
    color: $gray3;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    &:nth-child(2) {
      margin-bottom: 3rem;

      li {
        border: none;
        background-color: $green;
        color: white;
      }
    }

    li {
      margin-bottom: 0.5rem;
      padding: $small 1rem;
      padding-right: 3rem;
      border: solid $theme2;
      color: white;
      position: relative;
      border-radius: 6px;
      text-transform: capitalize;
      background-color: $theme2;
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
