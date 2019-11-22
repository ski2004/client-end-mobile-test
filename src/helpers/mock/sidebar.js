import Mock from './mock'


export default {
    // 取得各球類當前開放中&關閉中賽事數量
    // 模擬 http 回傳狀態碼
    getGameCount(httpStatus = 200) {

        let items = {}
        for (let i = 1; i <= 14; i++) {
            items[`count_${i}`] = Mock.getNumber(0, 999)
        }

        // 模擬回應資料
        let mockResponse = ''
        switch (httpStatus) {
            case 200:
                mockResponse = { result: items }
                break;
            default:
                mockResponse = { errors: { message: '回傳錯誤' } }
        }
        return items;
    }
}