<template>
  <form :class="mode">
    <slot></slot>
  </form>
</template>

<script>
export default {
  props: ["mode"]
};
</script>


<style scoped>

.product {
  max-width: 70rem;
  padding: 2rem;
  margin: 3rem auto;
  text-align: center;
  border: var(--border);
  box-shadow: var(--box-shadow);
  background-color: var(--white);
  border-radius: .5rem;
}

.auth {
  max-width: 40rem;
  padding: 3.5rem 0 1rem 0;
  margin: 2.5rem auto;
  background: var(--white);
  border-radius: .5rem;
  text-align: center;
  border: var(--border-auth);
  box-shadow: var(--box-shadow);
}

</style>