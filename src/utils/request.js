import axios from 'axios'
import store from '@/store'
import { getToken } from './auth'
import errorCode from '@/utils/errorCode'

axios.defaults.headers['Content-Type'] = 'application/json;charset=urf-8'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // axios 中请求配置有 baseURL 选项，表示请求URL公共部分
  timeout: 10000
})

// request 拦截器
service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    if (config.url.indexOf('login') !== -1) {
      return config
    }

    const isToken = (config.headers || {}).isToken === false

    if (getToken() && !isToken) {
      config.headers.Authorization = 'Bearer ' + getToken()
    }

    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

// request 响应拦截器
service.interceptors.response.use(
  (res) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200
    // 获取错误信息
    const message =
      errorCode[code] ||
      res.data.msg ||
      res.data.message ||
      errorCode.default

    if (code === 401) {
      if (window.confirm('登录状态已过期，请重新登录')) {
        store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }
    } else if (code === 500) {
      alert('message')
      return Promise.reject(new Error(message))
    } else if (code !== 200) {
      alert('message')
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  (error) => {
    let { message } = error
    if (message === 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    alert(message)
  }
)

export default service
