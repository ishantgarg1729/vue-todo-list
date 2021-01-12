<template>
  <loader v-if="loading" />
  <div class="container">
    <div class="card">
      <h1>Login</h1>
      <input type="text" v-model="email" placeholder="Enter Email!" />
      <input type="password" v-model="password" placeholder="Enter Password!" />
      <p v-if="Boolean(error)">{{ error }}</p>
      <input type="submit" @click="onSubmit" />
      <router-link to="/signup">go to signup</router-link>
    </div>
  </div>
</template>

<script>
import { emailValidator } from "../utils/validators";
import APICaller from "../utils/APICaller";
import Loader from "../components/Loader";

export default {
  name: "Login",
  components: {
    loader: Loader,
  },
  data() {
    return { email: "", password: "", error: "", loading: false };
  },
  methods: {
    async onSubmit() {
      if (emailValidator(this.email)) {
        this.error = "";
        this.loading = true;
        const response = await APICaller({
          url: "/users/login",
          method: "POST",
          data: {
            email: this.email,
            password: this.password,
          },
        });
        if (response && response?.token) {
          localStorage.setItem("token", response.token);
        }
        this.loading = false;
        this.$router.push({ name: "dashboard" });
      } else {
        this.loading = false;
        this.error = "Invalid Error Format!";
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 500px;
  border-radius: 6px;
  box-shadow: 1px 2px 12px grey;
}
</style>
