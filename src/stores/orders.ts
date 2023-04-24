import { defineStore } from "pinia";
import { Item } from "@/interfaces";
import getTotalPriceStr from "@/utils/getTotalPrice";

/**
 * Returns something you can use to compare contents
 * of a list of string.
 * @param list list of strings to compare
 */
function getListContents(list: string[]) {
  return list.sort().reduce((prev, curr) => prev + curr, "");
}

export default defineStore("restaurant-orders", {
  state: () => ({
    allOrders: <Item[]>[],
  }),
  actions: {
    addOrder(order: Item) {
      console.log(order.selected_ingredients);
      const index = this.allOrders.findIndex(
        (item) => item.name === order.name
      );

      if (index === -1) {
        this.allOrders.push(order);
        alert(`${order.count} ${order.name} added to orders`);

        return;
      }

      console.log(index);

      if (
        getListContents(order.selected_ingredients) ===
        getListContents(this.allOrders[index].selected_ingredients)
      ) {
        this.allOrders[index].count++;
        alert(`${order.count} ${order.name} added to orders`);

        return;
      }

      this.allOrders.push(order);
      alert(`${order.count} ${order.name} added to orders`);
    },
    incremementCount(index: number) {
      this.allOrders[index].count++;
    },
    decrementCount(index: number) {
      this.allOrders[index].count !== 1 ? this.allOrders[index].count-- : null;
    },
    removeOrder(index: number) {
      this.allOrders.splice(index, 1);
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
        (prev, curr) => prev + (getTotalPriceStr(curr, false) as number),
        0
      );
    },
  },
  persist: true,
});
