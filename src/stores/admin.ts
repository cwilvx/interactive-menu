import { defineStore } from "pinia";

import { validateSession } from "@/data/fetchers";

export default defineStore("admin", {
  state: () => ({
    is_admin: undefined as boolean | undefined,
  }),
  actions: {
    makeAdmin() {
      this.is_admin = true;
    },
    removeAdmin() {
      this.is_admin = false;
    },
    checkIsAdmin() {
      validateSession().then((status: number) => {
        if (status === 200) {
          this.makeAdmin();
        } else {
          this.removeAdmin();
        }
      });
    },
  },
});
