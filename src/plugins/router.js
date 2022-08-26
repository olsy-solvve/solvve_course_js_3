import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../features/ContentHome.vue";
import AuthPage from "../features/AuthenticationForm.vue";
import People from "../features/People.vue";
import Vehicles from "../features/Vehicles.vue";
import Planets from "../features/Planets.vue";
import PageNotFound from "../features/error responces/Error_404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/people",
    name: "People",
    component: People,
  },
  {
    path: "/Vehicles",
    name: "Vehicles",
    component: Vehicles,
  },
  {
    path: "/Planets",
    name: "Planets",
    component: Planets,
  },
  {
    path: "/login",
    name: "Authentication",
    component: AuthPage,
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

export default router;
