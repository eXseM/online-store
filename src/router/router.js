import Vue from "vue";
import Router from "vue-router";

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
      path: "/cart",
      name: "Cart",
      component: () => import("@/pages/Cart"),
      props: true,
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: () => import('@/pages/Contacts')
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import('@/pages/About')
    }
  ],
});
