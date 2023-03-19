<template>
  <div id="page-content">
    <NavBar />
    <Header />
    <RouterView />
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Header from "./components/Home/Header.vue";
import AppFooter from "./components/Footer.vue";
</script>

<style lang="scss">
#page-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem;
}

footer {
  margin-top: 10rem;
  font-size: small;
}
</style>
