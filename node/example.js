
const express = require('express')

const app = express()
//設定server網址，因為在本機端測試，所以輸入127.0.0.1
// const hostname = '127.0.0.1'  //上傳至伺服器需拿掉

//port 號會由 Heroku 給予，因此不再自行指定
const port = process.env.PORT || 3005;
const host = process.env.HOST || '127.0.0.1'

app.set('port', port)
/**
 * 測試效能
 * loadtest -n 1000 -c 100 http://127.0.0.1:3005/
 */
app.get('/api/zh-Hant/miscellaneous/siteName', (req, res) => {
  res.json({aa:'123'})
})
// Start nuxt.js
async function start() {
  // Listen the server
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
