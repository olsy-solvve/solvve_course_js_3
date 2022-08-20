import { createApp } from "vue";
import App from "./App.vue";
import Router from "./plugins/router.js"

import "./assets/main.css";

const app = createApp(App);

app.use(Router);

app.mount("#app");
