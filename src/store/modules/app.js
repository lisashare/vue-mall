const state = {
  device: 'desktop',
  client: 'desktop',
  cachedViews: [],
  systemsMaintenance: false,
  systemTime: new Date().getTime(),
  differTime: 0 // 系统和服务器时间差
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
  },
  SYSTEMS_MAINTENANCE: (state, systemsMaintenance) => {
    state.systemsMaintenance = systemsMaintenance
  },
  SET_SYSTEMTIME (state, systemTime) {
    state.systemTime = systemTime
  },
  SET_DIFFERTIME (state, differTime) {
    state.differTime = differTime
  }
}

const actions = {
  setSystemTime ({ commit }, time) {
    let systemTime = new Date(systemTime).getTime()
    let differTime = systemTime - new Date().getTime()
    commit('SET_DIFFERTIME', differTime)
    commit('SET_SYSTEMTIME', systemTime)
  },
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
  },
  changeSystemsMaintenance({ commit }, bool) {
    commit('SYSTEMS_MAINTENANCE', bool)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

// getTime() {
//   axios({
//     method: 'GET',
//     url: baseUrl + "/common/v1/system/time"
//   }).then( response => { 
//     if(!response.data.code) {
//       this.systemTime = response.data.data.second
//       this.formatTime()
//     } else {
//       this.systemTime = new Date().getTime()
//       this.formatTime()
//     }
//   })
//   .catch( () => {
//     this.systemTime = new Date().getTime()
//     this.formatTime()
//   })
// }