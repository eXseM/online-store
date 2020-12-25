import Vue from 'vue'
import Router from 'vue-router'
import Catalog from "@/components/Catalog";
import Cart from "@/components/Cart";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Main',
            component: Catalog
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart,
            props: true
        }
    ]
})