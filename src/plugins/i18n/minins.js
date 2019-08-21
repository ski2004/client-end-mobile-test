
// i18n
import en from './en.json'; // 存放英文翻譯
import cn from './zh-cn.json'; // 存放簡體中文翻譯
import tw from './zh-tw.json'; // 存放繁體中文翻譯

// http://www.lingoes.net/en/translator/langcode.htm
// 瀏覽器語系匹配
const locales = {
  "en": en,
  "zh-cn": cn,
  "zh-tw": tw,
};

//中文語系檔  key <=> value互換
var chart = {};
Object.keys(tw).forEach((key) => {
  chart[tw[key]] = key;
});

import { mapActions } from 'vuex'
export default {
  data() {
    return {
      locales: locales,
      chart: chart,
    }
  },
  methods: {
    // 切換讀取中遮罩的啟用與否
    ...mapActions(['language']),
    $ln_change: function (params) {
      sessionStorage.setItem('i18n', params)
      this.language(params);//store
    },

    $ln: function (params) {
      // console.log(this.$store.state.lang)
      let browser = (navigator.language || navigator.browserLanguage).toLowerCase();
      let storage = sessionStorage.getItem('i18n');
      let store = this.$store.state.lang ;//必要為了觸發rander

      let i18n = (this.locales[browser]) ? browser : 'zh-tw';
      i18n = (this.locales[storage]) ? storage : i18n;
      i18n = (this.locales[store]) ? store : i18n;
      // get key
      let key = this.chart[params] ? this.chart[params] : params;
      console.log(params)
      return this.locales[i18n][key] ? this.locales[i18n][key] : '@語系:' + key + '@';
      // return this.locales[i18n][key] ? this.locales[i18n][key] : key;
    },

 
  }
}