<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: "/"
    }
  }
}
</script>

<style scoped>

button,
a {
  display: inline-block;
  margin-top: 1rem;
  border-radius: .5rem;
  color: var(--white);
  font-size: 2rem;
  padding: 1.3rem 3rem;
  cursor: pointer;
  text-align: center;
}

button:hover,
a:hover {
  background-color: var(--black);
}

.edit-btn {
  width: 100%;
  background-color: var(--green);
}

.delete-btn {
  width: 100%;
  background-color: var(--red);
}

.header-btn {
  width: 100%;
  background-color: var(--orange);
  /* margin-top: 0;
  margin-left: 2rem; */
}

.auth-btn {
  width: 100%;
  background-color: tomato;
  /* text-align: center; */
  /* max-width: 50%; */
  /* margin-bottom: 1.5rem; */
}

</style>