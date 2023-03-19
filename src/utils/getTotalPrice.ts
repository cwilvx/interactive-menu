import { Item } from "@/interfaces";
import calcIngredientPrice from "./calcPrice";
import formatPrice from "./formatPrice";

export default function getTotalPriceStr(item: Item, str = true) {
  const totalIngredientPrice = item.selected_ingredients.reduce(
    (prev, curr) => prev + calcIngredientPrice(curr),
    0
  );

  const total = (totalIngredientPrice + item.price) * item.count;

  if (str) {
    return formatPrice(total);
  }

  return total;
}
