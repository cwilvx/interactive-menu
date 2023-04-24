const url = "https://mckima-serveless-api.vercel.app/api/meals";

export async function getMeals() {
  const response = await fetch(url);
  const res = await response.json();

  return res.meals;
}

export async function getMealById(id: string) {
  const response = await fetch(`${url}/${id}`);
  const res = await response.json();

  return res.meal;
}
