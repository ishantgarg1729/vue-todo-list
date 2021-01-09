import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routers";
import store from "./store";

createApp(App)
  .use(routes)
  .provide(store)
  .mount("#app");
