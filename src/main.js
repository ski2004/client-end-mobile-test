
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 驗證擴充
import VExtend from '@/helpers/vee-validate'
Object.keys(VExtend).forEach(name => VeeValidate.Validator.extend(name,VExtend[name],VExtend.conf[name])  );
Vue.use(VeeValidate);

const isDebug_mode = process.env.NODE_ENV !== 'production';

Vue.config.debug = isDebug_mode;
Vue.config.devtools = isDebug_mode;

// middleware
import middleware from '@/helpers/middleware'
// Components
import './components'
// filter
import './filter'
// // Plugins 套件引入
import './plugins'
// 語系
import translate from './helpers/i18n/index.js'
Vue.prototype.$translate = translate


Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  middleware.validate(to, from, next);
});

// import { mapActions } from 'vuex'
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
