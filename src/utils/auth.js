import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  const dateNow = new Date()
  const dateSet = new Date(dateNow)
  dateSet.setDate(dateNow.getDate() + 14)
  const expiresTime = new Date(
    dateSet.getFullYear() +
      '-' +
      (dateSet.getMonth() + 1) +
      '-' +
      dateSet.getDate() +
      ' ' +
      '02:00:00'
  )
  return Cookies.set(TokenKey, token, { expires: expiresTime })
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
