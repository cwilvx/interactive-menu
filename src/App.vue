<template>
  <main>
    <RouterView />
  </main>
  <footer>
    <p class="t-center"><b>Powered by Fizma Africa</b></p>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss">
main {
  // border: solid 1px red;
  max-width: 1140px;
  margin: 0 auto;
}

footer {
  margin-top: 10rem;
  font-size: small;
}
</style>
