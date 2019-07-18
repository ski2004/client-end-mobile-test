
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import './components'
// // Plugins 套件引入
import './plugins'



Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // console.log(to,from,next)
  next();

});
console.log(router)

new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
