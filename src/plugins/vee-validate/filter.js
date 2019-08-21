// i18n
import rules from './rules.json'; // 存放 規則:英文 
import { vsprintf } from 'sprintf-js'


export default {
  rules: rules,

  /**
   * 
   * @param {*} str 翻譯前
   * @param {*} rule 規則
   * @param {*} translate 翻譯後要輸出的
   */
  get: function (str, rule, translate = str) {
    if (this.rules[rule] === undefined) {
      return { value: `@rule="${rule}": "${str}"@`, diff: [] };
    }

    let arr = String(str).split(" ");
    let [...args] = (String(this.rules[rule]).replace(/\%s/g, "")).split(" ");
    let diff = arr.filter(function (v) { return args.indexOf(v) == -1 });
    let res = {
      value: vsprintf(translate, diff),
      diff: diff
    }
    return res;
  },

}