import Api from './api'
if (process.env.VUE_APP_DEMO_MODE === 'true') {
    var Mock = require('../mock/sidebar.js').default
}
export default {
    // 取得各球類當前開放中&關閉中賽事數量
    async getGameCount() {
        if (process.env.VUE_APP_DEMO_MODE === 'true')
            return Mock.getGameCount()

        // Api url
        let url = `/game/count`

        const response = await axios.get(url)
            // console.log('取得各球類當前開放中&關閉中賽事數量：', response)
        return Api.getResponse(response)
    }
}