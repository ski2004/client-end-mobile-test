// https://vuex.vuejs.org/en/mutations.html


export default {
  //
  setError(state, o) {
    state.error = o.data;
  },
  setMask(state, o) {
    for (const key in o.data) {
      if ((state.mask).hasOwnProperty(key)) {
        state.mask[key] = o.data[key];
      }
    }
  },
  setLang(state, o) {
    state.lang = o.data
  },
  onLoading(state, o) {
    if (o.data === false) {
      state.isLoading.counter = (state.isLoading.counter >= 1) ? state.isLoading.counter - 1 : 0;
      state.isLoading.enable = (state.isLoading.counter === 0) ? false : true;
    } else {
      state.isLoading.enable = true;
      state.isLoading.counter++;
    }
  }
}
