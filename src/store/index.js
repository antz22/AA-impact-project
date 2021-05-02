import { createStore } from 'vuex'

export default createStore({
  state: {
    isNavOpen: false
  },
  mutations: {
    toggleNav(state) {
      state.isNavOpen = !state.isNavOpen
    }
  },
  actions: {
  },
  modules: {
  }
})
