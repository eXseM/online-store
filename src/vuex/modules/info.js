import firebase from 'firebase/app'

export default {
  state: {
    info: {}
  },
  mutations: {
    SET_INFO(state, info){
      state.info = info;
    },
    CLEAR_INFO(state){
      state.info = {}
    }
  },
  actions: {
    async FETCH_INFO({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid')
        const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
        commit('SET_INFO', info)
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {
    INFO(state) {
      return state.info;
    }
  }
}
