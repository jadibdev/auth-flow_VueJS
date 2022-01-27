import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

import GuestLayout from "../layouts/GuestLayout.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Reports from "../views/Reports.vue";
import Settings from "../views/Settings.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";

const routes = [
  {
    path: "/",
    component: GuestLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardLayout,
    beforeEnter(to, from, next) {
      console.log(to, from);
      if (store.state.isAuthenticated) {
        next();
      } else {
        next("/login");
      }
      // check if user is authenticated if not route to /login
    },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard,
        meta: {
          roles: ["Admin", "standard"],
        },
      },
      {
        path: "/reports",
        name: "Reports",
        component: Reports,
        meta: {
          roles: ["Admin"],
        },
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings,
        meta: {
          roles: ["Admin", "standard"],
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//router.beforeEach((to, from, next) => {})

/* router.beforeEach((to, from, next) => {
  console.log(to, from, next)
}); */

export default router;
