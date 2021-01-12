import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routers";
import store from "./store";

createApp(App)
  .use(store)
  .use(routes)
  .mount("#app");
