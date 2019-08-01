/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */



export default {
  setInfo(state, o) {
    for (const key in o.data) {
      if ((state.info).hasOwnProperty(key)) {
        state.info[key] = o.data[key];
      }
    }
  },
}
