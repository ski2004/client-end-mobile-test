import Api from '.Api'
import { sprintf } from 'sprintf-js'

const Test = 'test'
const PostTest = 'test/%s'

export default {
  async getTest(payload) {
    return Api.get({
      Test
    })
  },
  async postTest(Id, data) {
    return Api.post(
      sprintf(PostTest, Id),
      data
    )
  },
}