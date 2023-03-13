<template>
  <div id="page-content">
    <NavBar />
    <RouterView />
  </div>
  <footer>
    <p class="t-center"><b>Powered by Fizma Africa</b></p>
  </footer>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
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
