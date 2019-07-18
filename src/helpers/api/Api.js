import axios from 'axios'
const qs = require('qs')
const api = {
    async get (url, data) {
        try {
            let res = await axios.get(url, qs.stringify(data))
            res = res.data
            return new Promise((resolve) => {
                resolve(res)
            })
        } catch (err) {
            alert('伺服器錯誤')
            console.log(err)
        }
    },
    async post (url, data) {
        try {
            let res = await axios.post(url, qs.stringify(data), { responseType: 'json' })
            res = res.data
            return new Promise((resolve) => {
                resolve(res)
            })
        } catch (err) {
            alert('伺服器錯誤')
            console.log(err.message)
        }
    },
}
export const Api = api;
