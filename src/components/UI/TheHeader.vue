<template>
  <header>
    <router-link class="logo" to="/">Darall Menu</router-link>
    <base-button link mode="header-btn" to="/create">
      Добавить блюдо
    </base-button>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin: 0 auto;
  background-color: var(--white);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: var(--box-shadow);
}

header .logo {
  margin-left: 2rem;
  font-family: 'Libre Baskerville', serif;
  font-size: 3.5rem;
  font-style: italic;
}

</style>