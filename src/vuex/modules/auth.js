import firebase from "firebase/app";
import createPersistedState from "vuex-persistedstate";
export default {
  plugins: [createPersistedState()],
  actions: {
    // eslint-disable-next-line no-unused-vars
    async login({ commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        commit("SET_ERROR", e);
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async register({ dispatch, commit }, { email, password, name, phone }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({
            email,
            password,
            name,
            phone,
          });
      } catch (e) {
        commit("SET_ERROR", e);
        throw e;
      }
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit("CLEAR_INFO");
    },
  },
};
