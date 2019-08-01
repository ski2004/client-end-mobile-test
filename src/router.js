// import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/layout/Home.vue'
import Login from './views/layout/Login.vue'

import Sports from './modula/Sports/router'
import cloneDeep from 'lodash/cloneDeep'
// Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // { name: '籃球', path: '/Sports/', component: (resovle) => import(`./modula/Sports/Index`).then(resovle) , loadChildren: (resovle) => import(`./modula/Sports/router`).then(resovle)  },
    // {
    //   name: 'test', path: '/test',
    //   component: (resovle) => import(`./views/layout/Test`).then(resovle),
    // },
    {
      name: '體彩', path: '/game/sports/',
      component: (resovle) => import(`./modula/Sports/Index`).then(resovle),
      redirect:'/game/sports/love',
      children: cloneDeep(Sports),
      meta: { requiresAuth: true }
    },
    {
      name: '會員資料', path: '/member/profile/',
      component: (resovle) => import(`./views/layout/Member`).then(resovle),
      children: cloneDeep(Sports),
      meta: { requiresAuth: true }
    },
    {
      name: '密碼修改', path: '/member/resetPwd/',
      component: (resovle) => import(`./views/layout/Example`).then(resovle),
      children: cloneDeep(Sports),
      meta: { requiresAuth: true }
    },
    {
      name: '明細', path: '/history/',
      component: (resovle) => import(`./modula/Sports/NotFinish`).then(resovle),
      children: cloneDeep(Sports),
      meta: { requiresAuth: true }
    },
    {
      name: '公告', path: '/member/notification/',
      component: (resovle) => import(`./modula/Sports/NotFinish`).then(resovle),
      children: cloneDeep(Sports),
      meta: { requiresAuth: true }
    },
    {
      name: '比賽結果', path: '/other/result/',
      component: (resovle) => import(`./modula/Sports/NotFinish`).then(resovle),
      children: cloneDeep(Sports),
      meta: { requiresAuth: true }
    },
    {
      name: '條款與規則', path: '/other/rule/',
      component: (resovle) => import(`./modula/Sports/NotFinish`).then(resovle),
      children: cloneDeep(Sports),
      meta: { requiresAuth: true }
    },

    {
      name: '盤口對照表', path: '/other/oddsComp/',
      component: (resovle) => import(`./modula/Sports/NotFinish`).then(resovle),
      children: cloneDeep(Sports),
      meta: { requiresAuth: true }
    },
    {
      name: '過關計算器', path: '/other/clearanceCalc/',
      component: (resovle) => import(`./modula/Sports/NotFinish`).then(resovle),
      children: cloneDeep(Sports),
      meta: { requiresAuth: true }
    },
    {
      name: '賠率格式', path: '/other/oddsFormat/',
      component: (resovle) => import(`./modula/Sports/NotFinish`).then(resovle),
      children: cloneDeep(Sports), 
      meta: { requiresAuth: true }
    },
    {
      name: '404', path: '/404',
      component: (resovle) => import(`./views/layout/Page404`).then(resovle),
    },
    { name: '大廳', path: '/', component: Home },
    { name: '登入', path: '/login', component: Login },
    { path: '*', redirect: '/404' },
  ],
})

