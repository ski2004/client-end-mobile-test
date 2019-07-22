// https://vuex.vuejs.org/en/actions.html

export default {
  //
  lang_change(context, o){
    console.log(o)
    context.commit('update_lang', o)
  }
}
