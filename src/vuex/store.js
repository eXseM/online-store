import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/firestore";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import info from "./modules/info";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    error: null,
    test: {},
  },
  plugins: [createPersistedState()],
  mutations: {
    SET_ERROR(state, error) {
      state.error = error;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    },
    SET_TEST: (state, test) => {
      state.test = test;
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      let isProductExists = false;
      state.cart.map(function(item) {
        if (item.article === product.article) {
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
    GET_PRODUCTS_FROM_FB({ commit }) {
      try {
        const test = firebase
          .firestore()
          .collection("products")
          .get()
          .then((ctx) => {
            ctx.forEach((doc) => {
              doc.data()
              commit("SET_TEST", doc.data())
            });
          });
          console.log(test, 123);
      } catch (e) {
        return e;
      }
    },
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios(
        "https://my-json-server.typicode.com/exsem/online-store/products",
        {
          method: "GET",
        }
      )
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
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
    TEST(state) {
      return state.test;
    },
  },
  modules: {
    auth,
    info,
  },
});

export default store;
