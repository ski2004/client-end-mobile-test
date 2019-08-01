import { getToken } from '@/helpers/cookie'

export default {
  validate(to, from, next) {

    let token = getToken()
    if (to.matched.some(o => o.meta.requiresAuth)) {
      if (token === undefined) {
        // swal.fire('', '請先登入', 'warning')
        next({ path: '/login', query: { redirect: to.fullPath } })
      }
    } else if (to.matched.some(o => o.meta.notAuth)) {
      if (token !== undefined) {
        next({ path: '/' })
      }
    }
    next()
  }
} 