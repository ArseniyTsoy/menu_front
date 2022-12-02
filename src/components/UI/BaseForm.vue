<template>
  <form>
    <slot></slot>
  </form>
</template>

<style scoped>

form {
  max-width: 70rem;
  padding: 2rem;
  margin: 3rem auto;
  text-align: center;
  border: var(--border);
  box-shadow: var(--box-shadow);
  background-color: var(--white);
  border-radius: .5rem;
}

</style>