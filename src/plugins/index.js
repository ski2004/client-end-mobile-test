
import Vue from 'vue'
// 驗證擴充
import VExtend from './vee-validate'
Object.keys(VExtend).forEach(name => VeeValidate.Validator.extend(name,VExtend[name],VExtend.conf[name])  );
Vue.use(VeeValidate);