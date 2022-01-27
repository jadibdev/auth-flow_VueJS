import { createRouter, createWebHistory } from "vue-router";

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
    beforeEnter(to, from) {
      console.log(to, from);
    },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/reports",
        name: "Reports",
        component: Reports,
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings,
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
