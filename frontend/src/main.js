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
<<<<<<< HEAD:src/main.js
import Dock from 'primevue/dock';
=======
import PrimeFlex from "primeflex/primeflex.css";
import Carousel from "primevue/carousel";
>>>>>>> master:frontend/src/main.js

const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.component(`Menubar`, Menubar);
app.component(`DataView`, DataView);
app.component("DataViewLayoutOptions", DataViewLayoutOptions);
app.component("PanelVue", Panel);
app.component("PaginatorVue", Paginator);
<<<<<<< HEAD:src/main.js
app.component(`Dock`, Dock);
=======
app.component("PrimeFlex", PrimeFlex);
app.component("CarouselVue", Carousel);
>>>>>>> master:frontend/src/main.js

import Router from "./plugins/router.js";
import "./assets/main.css";

app.use(Router);
app.mount("#app");


