import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

createApp(App).use(store).mount("#app");
