import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import "./assets/vue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import PrimeVue from "primevue/config";

import Menubar from "primevue/menubar";
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Panel from "primevue/panel";
import Paginator from "primevue/paginator";
import PrimeFlex from "primeflex/primeflex.css";
import Carousel from "primevue/carousel";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.component(`Menubar`, Menubar);
app.component(`DataView`, DataView);
app.component("DataViewLayoutOptions", DataViewLayoutOptions);
app.component("PanelVue", Panel);
app.component("PaginatorVue", Paginator);
app.component("PrimeFlex", PrimeFlex);
app.component("CarouselVue", Carousel);
app.component("InputText", InputText);
app.component("ButtonVue", Button);

import Router from "./plugins/router.js";
import "./assets/main.css";
import store from "./plugins/store.js";
app.use(store);
app.use(Router);
app.mount("#app");
