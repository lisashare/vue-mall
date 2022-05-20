import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  roles: [],
  userinfo: {
    avatar: require('@/assets/images/3.png'),
    username: '养土的肥',
    nickname: '',
    mobile: ''
  },
  blocked: false
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERINFO: (state, userInfo) => {
    // state.userinfo.avatar = userInfo.avatar
    state.userinfo.username = userInfo.username
    state.userinfo.nickname = userInfo.nickname
    state.userinfo.mobile = userInfo.mobile
  }
}

const actions = {
  // user login
  Login ({ commit }, params) {
    const { username, password } = params
    return new Promise((resolve, reject) => {
      login(username, password).then(res => {
        const userinfo = res.data.userinfo
        commit('SET_USERINFO', userinfo)
        setToken()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  GetInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then(() => {
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout ({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        // commit('SET_ROLES', [])
        // commit('SET_MENUS', [])
        removeToken()
        // resetRouter()

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_USERINFO', {})
      // commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
