// import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/layout/Home.vue'
import Home2 from './views/layout/Home2.vue'
import Test2 from './views/layout/Test2.vue'
import Login from './views/layout/Login.vue'
// Vue.use(Router)

// import Sports from './module/Sports/router'
import cloneDeep from 'lodash/cloneDeep'


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   name: '體彩', path: '/game/sports/',
    //   component: (resovle) => import(`./module/Sports/Index`).then(resovle),
    //   redirect:'/game/sports/love',
    //   children: cloneDeep(Sports),
    //   meta: { requiresAuth: true }
    // },
    {
      name: '404', path: '/404',
      component: (resovle) => import(`./views/layout/Page404`).then(resovle),
    },
    { name: '大廳', path: '/', components: {
      // default: Home,
      abc: Home2,
    }},
    { name: 'Test2', path: '/test', components: {
      default: Test2,
    }},
    // { name: '大廳', path: '/', component: Home },
    { name: '登入', path: '/login', component: Login },
    { path: '*', redirect: '/404' },
  ],
})

