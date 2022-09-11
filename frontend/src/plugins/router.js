import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../features/ContentHome.vue";
import AuthPage from "../features/AuthenticationForm.vue";
import People from "../features/MyPeople.vue";
import Vehicles from "../features/MyVehicles.vue";
import Planets from "../features/MyPlanets.vue";
import Starships from "../features/MyStarships.vue";
import PageNotFound from "../features/error responces/Error_404.vue";
import SignUp from "../features/RegistrationForm.vue";
import axios from "axios";
import store from "./store.js";
export const routes = [
  {
    component: HomePage,
    name: "home",
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
    name: "auth",
    path: "/login",
    to: "/login",
    icon: "pi pi-user",
    label: "Login",
    meta: {
      showInNavBar: true,
    },
  },
  {
    component: SignUp,
    name: "signup",
    path: "/signup",
    to: "signup",
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
  const get = "http://localhost:3000/auth";
  axios
    .get(
      get,
      { headers: { Authorization: `Bearer ${localStorage.token}` } },
      {}
    )
    .then((res) => {
      if (res.data) {
        store.commit("STATUS_LOGIN");
      } else {
        store.commit("STATUS_LOGOUT");
      }
    });
});

export default router;
