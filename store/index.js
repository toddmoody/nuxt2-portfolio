export default {
  state() {
    return {
      theme: true,
    }
  },
  getters: {
    theme(state) {
      return state.theme
    },
  },
  mutations: {
    SET_THEME(state, theme) {
      state.theme = theme
    },
  },
  actions: {
    toggleThemeAction({ commit }) {
      if (this.state.theme === true) {
        commit('SET_THEME', false)
      } else {
        commit('SET_THEME', true)
      }
    },
  },
}
