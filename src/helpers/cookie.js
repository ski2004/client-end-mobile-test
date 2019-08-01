import Cookies from 'js-cookie'
// import crypt from '@/helpers/crypt'

const tokenKey = 'accessToken'

export function setToken (token) {
  return Cookies.set(tokenKey, token, { expires: 1 })
}

export function getToken () {
    console.log( Cookies.get(tokenKey) )
  try {
    let token = Cookies.get(tokenKey)
    return token
  } catch (e) {
    return undefined
  }
}

export function removeToken () {
  return Cookies.remove(tokenKey)
}