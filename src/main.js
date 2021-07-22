import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store";
import router from "./router/router";
import VueSplide from "@splidejs/vue-splide";
import Vuelidate from "vuelidate";
import MaskedInput from "vue-masked-input";
import Notifications from "vue-notification";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(VueSplide);
Vue.use(Vuelidate);
Vue.component("MaskedInput", MaskedInput);
Vue.use(Notifications);

firebase.initializeApp({
  apiKey: "AIzaSyDN66-WO-JzTsdZahDqFVqTtrDf_obcWpE",
  authDomain: "online-store-meat.firebaseapp.com",
  databaseURL:
    "https://online-store-meat-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "online-store-meat",
  storageBucket: "online-store-meat.appspot.com",
  messagingSenderId: "569347661367",
  appId: "1:569347661367:web:a1f04e4eb5114e4e85a9b2",
  measurementId: "G-H7H2KEC7NS",
});

Vue.directive("click-outside", {
  bind: function(el, binding, vnode) {
    el.clickOutsideEvent = function(event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
