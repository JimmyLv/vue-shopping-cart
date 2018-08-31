const state = {
  count: 0,
}

export const getters = {
  countIsOdd(state) {
    return !(state.count % 2)
  },
  countHash(state) {
    return window.btoa(state.count)
  }
}

export const actions = {
  increment: function ({ commit }, number) {
    commit('increase', number)
  },
  decrease ({ commit }) {
    if(state.count > 0) {
      commit('decrease')
    }
  },
  incrementDelay ({ commit }) {
    setTimeout(() => {
      commit('increase')
    }, 500)
  },
  incrementDelayWrong ({ commit }) {
    commit('increaseDelay')
  }
}

export const mutations = {
  increase (state, number = 1) {
    state.count+=number
  },
  decrease () {
    state.count --
  },
  increaseDelay (state) {
    setTimeout(() => {
      state.count++
    }, 500)
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
