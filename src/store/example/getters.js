/* ============
 * Getters for the account module
 * ============
 *
 * The getters that are available on the
 * account module.
 */

export default {
  getInputData: state => {
    return state.inputData
  },
  getItemsState: state => {
    return state.items
  },
  getUsersState: state => {
    return state.users
  }
}
