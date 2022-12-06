<template>
  
  <base-form @submit.prevent="processInput" mode="auth">
    <input class="auth-box" type="text" name="name" placeholder="Ваше имя" required v-model="name" v-if="mode === 'signup'">

    <input class="auth-box" type="email" name="email" :placeholder="emailMessage" required v-model="email">

    <input class="auth-box" type="password" name="password" :placeholder="passwordMessage" required v-model="password">

    <input class="auth-box" type="password" name="confirmPassword" placeholder="Повторите пароль" required v-model="confirmPassword" v-if="mode === 'signup'">

    <base-button class="auth" mode="auth-btn">Отправить</base-button>
  </base-form>

</template>

<script>
import axios from "axios";

export default {
  props: {
    mode: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
      emailMessage: "E-Mail",
      passwordMessage: "Пароль",
    };
  },
  methods: {
    async processInput() {
        
      if (this.mode === "signup") {
      
        if (this.password !== this.confirmPassword) {
          this.password = null;
          this.confirmPassword = null;
          this.passwordMessage = "Пароли не совпадают!";
          return;
        }

        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("email", this.email);
        formData.append("password", this.password);

        const headers = {
          "Content-Type": "application/json"
        };

        try {
          const { data } = await axios.post(
            "http://localhost:3000/auth/signup",
            formData,
            headers
          );

          await this.$store.dispatch("authUser", data);
          return this.$router.push("/");
        } catch(err) {
          const data = err.response.data;

          if (data.message) {
            this.email = null;
            this.emailMessage = data.message;
          }

          return;
        }
      }
      else if (this.mode === "login") {

        const formData = new FormData();
        formData.append("email", this.email);
        formData.append("password", this.password);

        const headers = {
          "Content-Type": "application/json"
        };
        
        try {
          const { data } = await axios.post(
            "http://localhost:3000/auth/login",
            formData,
            headers
          );

          await this.$store.dispatch("authUser", data);
          return this.$router.push("/");
        } catch(err) {

          const data = err.response.data;

          if (data.emailError) {
            this.email = null;
            this.emailMessage = data.emailError;
            return;
          }

          if (data.passwordError) {
            this.password = null;
            this.passwordMessage = data.passwordError;
            return;
          }

          return;
        }
      }
    }
  }
}
</script>

<style scoped>
.auth-box {
  width: 85%;
  outline: none;
  border: none;
  background: #dfe9f5;
  padding: 1.5rem 1.7rem;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
}

.auth {
  max-width: 50%;
  margin: 2rem auto;
}
</style>