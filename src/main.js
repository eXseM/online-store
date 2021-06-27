import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router'
import VueSplide from '@splidejs/vue-splide';

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use( VueSplide );

firebase.initializeApp({
  apiKey: "AIzaSyDN66-WO-JzTsdZahDqFVqTtrDf_obcWpE",
  authDomain: "online-store-meat.firebaseapp.com",
  projectId: "online-store-meat",
  storageBucket: "online-store-meat.appspot.com",
  messagingSenderId: "569347661367",
  appId: "1:569347661367:web:a1f04e4eb5114e4e85a9b2",
  measurementId: "G-H7H2KEC7NS"
});

new Vue({
  render: h => h(App),
    store,
    router
}).$mount('#app')
