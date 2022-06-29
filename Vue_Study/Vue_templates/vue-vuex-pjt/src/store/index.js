import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    childData: '',
  },
  getters: {
    childData: state => state.childData
  },
  mutations: {
    SET_DATA: (state, data) => state.childData = data
  },
  actions: {
  },
  modules: {
  }
})
