<template>
  <header>
    <router-link class="logo" to="/">Darall Menu</router-link>
    <div class="header-btns" v-if="!isAuthenticated">
      <base-button mode="edit-btn" link to="/signup">
        Регистрация
      </base-button>
      <base-button mode="delete-btn" link to="/login">
        Войти
      </base-button>
    </div>
    <span v-if="isAuthenticated" class="user-plate">{{ userName }}: <span class="user-id">{{ userId }}</span></span>
    <div class="header-btns" v-if="isAuthenticated">
      <base-button link mode="header-btn" to="/create">
      Добавить
      </base-button>
      <base-button mode="auth-btn" @click="logout">
        Выйти
      </base-button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      return this.$router.push("/");
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticatedGetter;
    },
    userId() {
      return this.$store.getters.userIdGetter;
    },
    userName() {
      return this.$store.getters.userNameGetter;
    }
  }
}
</script>

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

.header-btns {
  display: flex;
  gap: 1.5rem;
}

.user-plate {
  display: inline-block;
  margin-top: 1rem;
  border-radius: .5rem;
  border: var(--border);
  font-size: 2rem;
  color: var(--black);
  padding: 1.3rem 3rem;
  text-align: center;
  background-color: var(--white);
}

.user-id {
  color: tomato;
}

</style>