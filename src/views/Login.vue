<template>
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

export default {
  name: "Login",
  data() {
    return { email: "", password: "", error: "" };
  },
  methods: {
    onSubmit() {
      if (emailValidator(this.email)) {
        this.error = "";
      } else {
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
