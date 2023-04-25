const base_prod = "https://mckima-serveless-api.vercel.app/api/";
const base_dev = base_prod;

const url = "https://mckima-serveless-api.vercel.app/api/meals";
const orders_prod = base_prod + "orders";

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

export async function addOrder(order: any) {
  const response = await fetch(`${orders_prod}`, {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  return res;
}

export async function getOrders() {
  const response = await fetch(orders_prod);
  const res = await response.json();

  return res.orders;
}

export async function markOrderDelivered(id: string) {
  const response = await fetch(`${orders_prod}/deliver/${id}`, {
    method: "PUT",
  });
  const res = await response.json();
  return res;
}

export async function deleteOrder(id: string) {
  const response = await fetch(`${orders_prod}/${id}`, {
    method: "DELETE",
  });
  const res = await response.json();
  return res;
}

export async function getDeliveredOrders() {
  const response = await fetch(`${orders_prod}/delivered`);
  const res = await response.json();
  return res.orders;
}

export async function addMeal(meal: any) {
  const response = await fetch(`${base_dev}meals`, {
    method: "POST",
    body: JSON.stringify(meal),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  return res;
}

export async function editMeal(meal: any) {
  const response = await fetch(`${base_dev}meals/${meal._id}`, {
    method: "PUT",
    body: JSON.stringify(meal),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  return res;
}

export async function deleteMealById(id: string) {
  const response = await fetch(`${base_dev}meals/${id}`, {
    method: "DELETE",
  });
  const res = await response.json();
  return res;
}

export async function markMealAsAvailable(id: string) {
  const response = await fetch(`${base_dev}meals/available/${id}`, {
    method: "PUT",
  });
  const res = await response.json();
  return res;
}

export async function getOrderBySessionId(session_id: string) {
  const response = await fetch(`${orders_prod}/${session_id}`);
  const res = await response.json();
  return res.order;
}
