<template>
  <div class="grid-item">
    <slot></slot>
  </div>
</template>

<style scoped>

.grid-item {
  height: 52rem;
  padding:2rem;
  text-align: center;
  border:var(--border);
  box-shadow: var(--box-shadow);
  background-color: var(--white);
  border-radius: .5rem;
  position: relative;
}

</style>