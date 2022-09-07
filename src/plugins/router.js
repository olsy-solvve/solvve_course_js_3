import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../features/ContentHome.vue";
import AuthPage from "../features/AuthenticationForm.vue";
import People from "../features/MyPeople.vue";
import Vehicles from "../features/MyVehicles.vue";
import Planets from "../features/MyPlanets.vue";
import Starships from "../features/MyStarships.vue";
import PageNotFound from "../features/error responces/Error_404.vue";
//import
export const routes = [
  {
    component: HomePage,
    path: "/",
    to: "/",
    icon: "pi pi-fw pi-box",
    label: "Home",
    meta: {
      showInNavBar: true,
    },
  },
  {
    component: People,
    path: "/people",
    to: "/people",
    icon: "pi pi-fw pi-box",
    label: "People",
    meta: {
      showInNavBar: true,
    },
  },
  {
    component: Vehicles,
    path: "/vehicles",
    to: "/vehicles",
    icon: "pi pi-fw pi-box",
    label: "Vehicles",
    meta: {
      showInNavBar: true,
    },
  },

  {
    component: Planets,
    path: "/planets",
    to: "/planets",
    icon: "pi pi-fw pi-box",
    label: "Planets",
    meta: {
      showInNavBar: true,
    },
  },
  {
    component: Starships,
    path: "/starships",
    to: "/starships",
    icon: "pi pi-fw pi-box",
    label: "Starships",
    meta: {
      showInNavBar: true,
    },
  },
  {
    component: AuthPage,
    path: "/login",
    to: "/login",
    icon: "pi pi-fw pi-box",
    label: "Login",
    meta: {
      showInNavBar: true,
    },
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  console.log("check token in the router.js");
});

export default router;
