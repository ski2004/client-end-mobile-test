
import validate from '@/helpers/vee-validate/filter'
import translates from '@/helpers/i18n'
import { vsprintf } from 'sprintf-js'

//過濾器
var errors = (value, rule) => {
  let translate = translates.get(`rule_${rule}`);
  let res = validate.get(value, rule, translate);
  // 判斷欄位是否需要再翻譯
  let re = false;
  res.diff.forEach((e, i) => {
    if (isNaN(Number(e))) {
      re = true;
      res.diff[i] = translates.get(e)
    }
  });
  return (re) ? vsprintf(translate, res.diff) : res.value
};



export default { errors }