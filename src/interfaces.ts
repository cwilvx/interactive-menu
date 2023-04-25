export interface Item {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  count: number;
  ingredients: string[];
  optional_ingredients: string[];
  selected_ingredients: string[];
  available: boolean;
}

export interface Order {
  _id: string;
  session_id: string;
  meals: Item[];
  time: string;
  table_number: number;
  delivered: boolean;
}
