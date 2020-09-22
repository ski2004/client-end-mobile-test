const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
  })
const SocketServer = require('ws').Server


//port 號會由 Heroku 給予，因此不再自行指定
const port = process.env.PORT || 3005;
const host = process.env.HOST || '127.0.0.1'
const server = app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)



//將 express 交給 SocketServer 開啟 WebSocket 的服務
const wss = new SocketServer({ server })

//當 WebSocket 從外部連結時執行
wss.on('connection', (ws,req) => {
  const ip = req.connection.remoteAddress;
  const port = req.connection.remotePort;
  const clientName = ip + port;
  
  //連結時執行此 console 提示
  console.log('Client connected')

  //當 WebSocket 的連線關閉時執行
  ws.on('close', () => {
    console.log('Close connected')
  })
  ws.on('message', (message) => {
    console.log('received: %s from %s', message , clientName);
    // 给所有客户端
    wss.clients.forEach(function each(client) {
      if (client.readyState === 1) {
        client.send(message);
      }
    });
  });
})