<template>
  <div class="page-band">
    <h2 class="page-title">What can we serve you today?</h2>
    <div class="search-input">
      <input type="text" placeholder="Search through our 10 meals" />
      <button>Search</button>
    </div>
  </div>
</template>

<style lang="scss">
.page-band {
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 1rem;
  align-items: center;
  //   outline: solid 1px;
  margin: 1rem 0;

  .search-input {
    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 1rem;
    align-items: center;
  }

  input {
    padding: $small 1rem;
    border: solid 1px;
    border-radius: 0.5rem;
    outline: none;
    font-size: 1.2rem;
  }

  button {
    height: 100%;
    padding: 0 2rem;
  }
}

.page-title {
  //   padding-left: 2rem;
  width: max-content;
}
</style>
