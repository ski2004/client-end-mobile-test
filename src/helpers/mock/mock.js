export default {
    /**
     * @showdoc 
     * @catalog mock/
     * @name getString
     * @description 
     * - 取隨機英文字串
     * @type methods 
     * @param length Number 長度
     */
    getString(length = 0) {
        let result = [];
        for (let i = 0; i <= length; i++) {
            let str = (Math.random() * 100) % 26
            retult.push(String.fromCharCode(str))
        }
        return result.join('');
    },
    /**
     * @showdoc 
     * @catalog mock/
     * @name getString
     * @description 
     * - 取隨機數字
     * @type methods 
     * @param min Number 最小
     * @param max Number 最大
     */
    getNumber(min = 0, max = 100) {
        if (max < 1) return 0;
        let str = Math.floor(Math.random() * 10000) % Number(max) + Number(min)
        return Number(str)
    }
}