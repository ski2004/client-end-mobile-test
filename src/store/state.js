// https://vuex.vuejs.org/en/state.html

export default {
  //
  // isLoading:true,
  isLoading: {
    enable: false,
    counter: 0
  },
  error: {
    message: '',
    code: '',
    src: ''
  },
  mask: {
    view: '',
    default_style: false,
    width: '90%',
    active: false,
    type: 'center',
  },
  version: 0,
  lang: '',
}
