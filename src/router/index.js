import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/register",
      component: () => import("../views/RegView.vue"),
    },
    {
      path: "/sign-in",
      component: () => import("../views/SignIn.vue"),
    },
    {
      path: "/feed",
      component: () => import("../views/FeedView.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/AboutView.vue"),
    },
    
  ],
});

export default router;

