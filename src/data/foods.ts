import { Item } from "@/interfaces";
import calcPrice from "@/utils/calcPrice";
import ingredients from "./ingredients";

export default [
  {
    name: "Tuna poke with fresh vegetables",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2022/11/tuna-poke-with-fresh-vegetables-768x1024.jpg",
    description:
      "A delicious combination of fresh vegetables and raw tuna, served with a tangy sauce. This dish is a perfect choice for a light and healthy meal.",
  },
  {
    name: "Pizza with a lot of cheese",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2019/01/pizza-463x617.jpg",
    description:
      "Who doesn't love a cheesy pizza? This one is loaded with gooey mozzarella and other delicious toppings, making it the perfect comfort food.",
  },
  {
    name: "Fried salmon with sweet soy sauce in a Korean restaurant",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-salmon-with-sweet-soy-sauce-in-a-korean-restaurant-600x400.jpg",
    description:
      "This Korean-style fried salmon is crispy on the outside and juicy on the inside, and the sweet soy sauce adds a delicious touch of sweetness to the dish.",
  },
  {
    name: "Grilled salmon cubes with vegetables",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2018/06/salmon-600x400.jpg",
    description:
      "This healthy and flavorful dish features perfectly grilled salmon cubes paired with a colorful assortment of vegetables. It's a great choice for a light and nutritious meal.",
  },
  {
    name: "Healthy smoked salmon sandwich",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2019/02/healthy-smoked-salmon-sandwich-1024x683.jpg",
    description:
      "Packed with protein and healthy fats, this smoked salmon sandwich is the perfect choice for a quick and easy lunch or snack. The addition of fresh veggies and whole grain bread makes it a nutritious choice as well.",
  },
  {
    name: "Orange juice drink with mint",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2016/05/orange-juice-drink-with-mint-1-600x400.jpg",
    description:
      "This refreshing drink is the perfect thirst-quencher on a hot day. The combination of sweet orange juice and fresh mint leaves is a match made in heaven.",
  },
  {
    name: "Czech lager beer from the tap",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/czech-lager-beer-from-the-tap-1024x680.jpg",
    description:
      "This classic Czech lager beer is brewed to perfection and served fresh from the tap. It's the perfect choice for beer lovers looking for a traditional and authentic brew.",
  },
  {
    name: "Healthy vegetarian salad with egg",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2019/01/healthy-vegetarian-salad-with-egg-1024x683.jpg",
    description:
      "This colorful and nutritious salad is packed with fresh veggies and protein-rich eggs, making it a great choice for a healthy and filling meal. The combination of flavors and textures is sure to satisfy your taste buds.",
  },
  {
    name: "Dreamy flatwhite coffee with perfect latte art",
    image:
      "https://www.foodiesfeed.com/wp-content/uploads/2019/01/dreamy-flatwhite-coffee-with-perfect-latte-art-1-1024x683.jpg",
    description:
      "Dreamy flatwhite coffee with perfect latte art: This expertly crafted flatwhite coffee is a dreamy and indulgent treat, complete with perfect latte art on top. It's the perfect pick-me-up for coffee lovers looking for a luxurious and satisfying caffeine fix.",
  },
].map((f, index) => ({
  ...f,
  id: index,
  price: calcPrice(f.name),
  ingredients: ingredients[index].ingredients,
  optional_ingredients: ingredients[index].optional_ingredients,
})) as Item[];
