import { createRouter, createWebHistory } from "vue-router";

import FullMenu from "./components/FullMenu.vue";
import CreatePosition from "./components/CreatePosition.vue";
import EditPosition from "./components/EditPosition.vue";
import SignupForm from "./components/auth/SignupForm.vue";
import LoginForm from "./components/auth/LoginForm.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: FullMenu },
    { path: "/create", component: CreatePosition, meta: { requiresAuth: true } },
    { path: "/edit/:id", props: true, component: EditPosition, meta: { requiresAuth: true } },
    { path: "/signup", component: SignupForm, meta: { requiresUnauth: true } },
    { path: "/login", component: LoginForm, meta: { requiresUnauth: true } }
  ]
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !localStorage.getItem("isAuthenticated")) {
    return next("/login");
  } 
  else if (to.meta.requiresUnauth && localStorage.getItem("isAuthenticated")) {
    return next("/");
  } 
  else {
    return next();
  }
});

export default router;