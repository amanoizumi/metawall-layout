import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontLayout.vue"),
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("../views/front/HomeView.vue"),
        },
        {
          path: "createPost",
          name: "createPost",
          component: () => import("../views/front/CreatePostView.vue"),
        },
        {
          path: "editUser",
          name: "editUser",
          component: () => import("../views/front/EditUser.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

export default router;
