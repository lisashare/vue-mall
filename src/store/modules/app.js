const state = {
  device: 'desktop',
  client: 'desktop',
  cachedViews: []
}

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SET_CLIENT: (state, client) => {
    state.client = client
  },
  ADD_CACHED_VIEW: (state, view) => {
    if (state.cachedViews.includes(view.name)) return
    if (view.meta.cache) {
      state.cachedViews.push(view.name)
    }
  }
}

const actions = {
  toggleDevice ({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setClient ({ commit }, client) {
    commit('SET_CLIENT', client)
  },
  addView ({ dispatch }, view) {
    dispatch('addCachedView', view)
  },
  addCachedView ({ commit }, view) {
    commit('ADD_CACHED_VIEW', view)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}