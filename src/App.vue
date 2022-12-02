<template>
  <the-header></the-header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import TheHeader from "./components/UI/TheHeader.vue";

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap');

:root {
  --green: #27ae60;
  --orange: #f39c12;
  --red: #e74c3c;
  --black: #333;
  --light-color: #666;
  --white: #fff;
  --light-bg: #f6f6f6;
  --border: .2rem solid var(--black);
  --box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);
}

* {
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  color: var(--black);
  text-decoration: none;
}

*::selection {
  background-color: var(--green);
  color: var(--white);
}

body {
  background-color: var(--light-bg);
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-padding-top: 6.5rem;
}

section {
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.flex{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.box {
  width: 100%;
  height: 5.3rem;
  margin: 1rem 0;
  padding: 1.2rem 1.4rem;
  font-size: 1.8rem;
  color: var(--black);
  border-radius: .5rem;
  background-color: var(--light-bg);
  border: var(--border);
}

textarea.box {
   height: 20rem;
   resize: none;
}
</style>
