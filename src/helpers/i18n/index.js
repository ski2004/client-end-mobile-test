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


export default {
  locales: locales,
  chart: chart,
  getCurrentLang: function () {
    let browser = (navigator.language || navigator.browserLanguage).toLowerCase();
    let storage = sessionStorage.getItem('i18n');
    // http://www.lingoes.net/en/translator/langcode.htm
    let i18n = (this.locales[browser]) ? browser : 'zh-tw';
    i18n = (this.locales[storage]) ? storage : i18n;
    return i18n
  },
  
  change: function (params) {
    sessionStorage.setItem('i18n', params)
  },

  get: function (params) {
    let i18n = this.getCurrentLang()
    let key = this.getKey(params);
    return this.locales[i18n][key] ? this.locales[i18n][key] : '@語系:' + key + '@';
    // return this.locales[i18n][key] ? this.locales[i18n][key] : key;
  },

  getKey: function (params) {
    return this.chart[params] ? this.chart[params] : params;
  }

}