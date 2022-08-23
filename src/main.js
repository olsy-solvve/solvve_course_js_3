import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";

const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.component(`Menubar`, Menubar);
import Router from "./plugins/router.js";
import "./assets/main.css";
const app = createApp(App);
app.use(Router);
app.mount("#app");
