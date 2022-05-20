const storageSetting = JSON.parse(localStorage.getItem('layout-setting')) || ''
const state = {
  theme: storageSetting.theme || '#409EFF',
  rootTheme: storageSetting.rootTheme || 'light'
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  // 修改布局设置
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
