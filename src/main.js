import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/reset.css";
import "./assets/font/font.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
