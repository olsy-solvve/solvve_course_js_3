import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../features/ContentHome.vue";
import AuthPage from "../features/AuthenticationForm.vue";
import PageNotFound from "../features/error responces/Error_404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
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