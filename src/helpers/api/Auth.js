import Api from '@/helpers/api/Api'
import { sprintf } from 'sprintf-js'

const LOGIN = 'auth/login'
const LOGOUT = 'auth/logout'


export default {
  async login (data) {
    return Api.POST({
      LOGIN,
      data
    })
  },
  async logout (data) {
    return Api.POST({
      LOGOUT,
      data
    })
  },
}
