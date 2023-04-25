import { defineStore } from "pinia";
import { Item } from "@/interfaces";

import getTotalPriceStr from "@/utils/getTotalPrice";
import { addOrder } from "@/data/fetchers";

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
    session_id: "",
    allOrders: <Item[]>[],
    pendingOrders: <Item[]>[],
  }),
  actions: {
    generateNewSessionId() {
      const hour = new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
      });

      console.log(hour);

      if (this.session_id && this.session_id.endsWith(hour)) {
        return;
      }

      this.session_id = Math.random().toString(36).substr(2, 9) + "-";
      this.session_id += hour;
    },
    addOrder(order: Item) {
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
    submitOrders(table_number: number) {
      const order = {
        session_id: this.session_id,
        meals: this.allOrders,
        time: new Date().toString(),
        table_number,
      };

      addOrder(order).then((res) => {
        this.pendingOrders.push(...this.allOrders);
        this.allOrders = [];
      });
    },
  },
  getters: {
    orderCount(): number {
      return this.allOrders.reduce(
        (acc: number, order: Item) => acc + (order?.count || 0),
        0
      );
    },
    pendingOrderCount(): number {
      return this.pendingOrders.reduce(
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
    totalPendingPrice(): number {
      return this.pendingOrders.reduce(
        (prev, curr) => prev + (getTotalPriceStr(curr, false) as number),
        0
      );
    },
  },
  persist: true,
});
