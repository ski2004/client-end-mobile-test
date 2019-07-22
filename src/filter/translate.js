
import translates from '@/helpers/i18n'

//過濾器
var translate = (value) => {
  return translates.get(value);
};


export default { translate }