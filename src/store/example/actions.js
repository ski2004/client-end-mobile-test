/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import * as types from './mutation-types'

export const setData = ({ commit }, inputData) => {
  return new Promise((resolve, reject) => {
    resolve(commit(types.SET_DATA, inputData))
  })
}

export const setItems = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    resolve(commit(types.SAVE_ITEMS, data))
  })
}

export default {
  setData: setData,
  setItems: setItems
}
