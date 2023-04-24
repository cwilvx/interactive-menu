export interface Item {
  _id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  count: number;
  ingredients: string[];
  optional_ingredients: string[];
  selected_ingredients: string[];
}
