import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase/app";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Main",
      component: () => import("@/components/Catalog"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("@/pages/PersonalArea"),
    },
    {
      path: "/create",
      name: "Create",
      beforeEnter: (to, from, next) => {
        if (firebase.auth().currentUser?.email === "admin@admin.ru") {
          next();
        }
      },
      meta: { admin: true },
      component: () => import("@/pages/CreateProduct"),
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("@/pages/Cart"),
      props: true,
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: () => import("@/pages/Contacts"),
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import("@/pages/About"),
    },
  ],
});
