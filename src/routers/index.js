import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("token");
      if (token) next("/dashboard");
      else {
        next();
      }
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem("token");
      if (token) next("/dashboard");
      else {
        next();
      }
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    beforeEnter: async (to, from, next) => {
      const token = localStorage.getItem("token");
      if (!token) next("/login");
      else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
