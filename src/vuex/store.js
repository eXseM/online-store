import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import firebase from "firebase/app";
import "firebase/firestore";

import createPersistedState from "vuex-persistedstate";
import { vuexfireMutations, firestoreAction } from "vuexfire";

import auth from "./modules/auth";
import info from "./modules/info";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    error: null,
  },
  plugins: [createPersistedState()],
  mutations: {
    ...vuexfireMutations,
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      let isProductExists = false;
      state.cart.map(function(item) {
        if (item.article === product.id) {
          isProductExists = true;
          item.quantity++;
        }
      });
      isProductExists || state.cart.push({ ...product, quantity: 1 });
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
  },
  actions: {
    GET_PRODUCTS_FROM_FB: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef('products', firebase.firestore().collection("products"))
    }),
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit("INCREMENT", index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit("DECREMENT", index);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    ERROR(state) {
      return state.error;
    },
  },
  modules: {
    auth,
    info,
  },
});

export default store;
