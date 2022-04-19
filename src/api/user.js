import request from '@/utils/request'

// 登录方法
export function login (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/api/login.json',
    // method: 'post',
    // data: data

    method: 'get',
    params: data
  })
}

export function getInfo (token) {
  return request({
    url: '/api/user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout () {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}
