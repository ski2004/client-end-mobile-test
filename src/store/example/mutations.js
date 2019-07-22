/* ============
 * Mutations for the auth module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { SET_DATA, SAVE_ITEMS } from './mutation-types'

export default {
  [SET_DATA] (state, inputData) {
    state.inputData = inputData
  },
  [SAVE_ITEMS] (state, payload) {
    state.items = {
      ...payload.data,
      result: payload.data.result,
      status: payload.status
    }
  },
  saveUsers (state, payload) {
    state.users = {
      ...payload.data,
      result: payload.data.result,
      status: payload.status
    }
  }
}
