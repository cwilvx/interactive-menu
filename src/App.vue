<template>
  <div id="page-content">
    <NavBar />
    <Header />
    <RouterView />
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import NavBar from "./components/NavBar.vue";
import Header from "./components/Home/Header.vue";
import AppFooter from "./components/Footer.vue";

import useOrderStore from "./stores/orders";

import useAdminStore from "./stores/admin";

onMounted(() => {
  useOrderStore().generateNewSessionId();
  useAdminStore().checkIsAdmin();
});
</script>

<style lang="scss">
#page-content {
  max-width: 1000px;
  margin: 0 auto;
}

footer {
  margin-top: 10rem;
  font-size: small;
}
</style>
