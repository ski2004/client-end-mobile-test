// i18n
import en from './en.json'; // 存放英文翻譯
import cn from './zh-cn.json'; // 存放簡體中文翻譯
import tw from './zh-tw.json'; // 存放繁體中文翻譯


const locales = {
  en: en,
  cn: cn,
  tw: tw,
};

//中文語系檔  key <=> value互換
var chart = {};
Object.keys(tw).forEach((key) => {
  chart[tw[key]] = key;
});


export default {
  locales: locales,
  chart: chart,

  change: function (params) {
    sessionStorage.setItem('i18n', params)
  },
  get: function (params) {
    let i18n = sessionStorage.getItem('i18n') ? sessionStorage.getItem('i18n') : 'en';
    let key = this.getkey(params);
    return this.locales[i18n][key] ? this.locales[i18n][key] : '@語系:' + key + '@';
    // return this.locales[i18n][key] ? this.locales[i18n][key] : key;
  },
  getkey: function (params) {
    return this.chart[params] ? this.chart[params] : params;
  }

}