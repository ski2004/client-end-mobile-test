// https://vuex.vuejs.org/en/actions.html

export default {
  // 語系
  language(context, o) {
    context.commit('setLang', { data: o.data , src: o.src })
  },
  // 讀取狀態
  onLoading(context, o) {
    context.commit('onLoading', { data: o.data || false, src: o.src })
  },
  // 通用
  set(context, o) {
    // 檢查包含以下參數
    switch (true) {
      case (!o.act)://動作
      case (o.data === undefined)://資料
      case (!o.src)://來源
        break;
      default:
        context.commit(o.act, { data: o.data, src: o.src })
    }
  },
  // errors
  errors(context, o) {
    context.commit('setError', { data: o.data, src: o.src })
  },
}
