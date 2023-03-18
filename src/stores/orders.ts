import { defineStore } from "pinia";
import { Item } from "@/interfaces";

export default defineStore("restaurant-orders", {
  state: () => ({
    allOrders: <Item[]>[],
  }),
  actions: {
    addOrder(order: Item) {
      this.allOrders.push(order);
    },
  },
  getters: {
    orderCount(): number {
      return this.allOrders.reduce(
        (acc: number, order: Item) => acc + (order?.count || 0),
        0
      );
    },
    totalPrice(): number {
      return this.allOrders.reduce(
        (acc: number, order: Item) =>
          acc + (order?.count || 0) * (order?.price || 0),
        0
      );
    },
  },
});
