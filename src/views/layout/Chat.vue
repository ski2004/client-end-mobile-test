<template>
  <div class="test">
    <table class="table table-bordered">
      <tr>
        <td>A</td><td>0</td>
      </tr>
    </table>
    <div class="message">
      <ul v-for="(item,i) in list" >
        <li>{{item}}</li>
      </ul>
    </div>
    <button type="button" @click="test()" class>send</button>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      websock: null,
      list:[]
    };
  },
  created() {
    this.initWebSocket();
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
  },
  methods: {
    test() {
      let a = { test: new Date().getTime() };
      this.websocketsend(a);
    },
    initWebSocket() {
      //初始化weosocket
      const wsuri = "ws://127.0.0.1:3005";
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      let actions = { test: "12345" };
      this.websocketsend(actions);
    },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //数据接收
      const redata = JSON.parse(e.data);
      console.log("redata:", redata);
      this.list.push(redata);
    },
    websocketsend(Data) {
      //数据发送

      this.websock.send(JSON.stringify(Data));
    },
    websocketclose(e) {
      //关闭
      console.log("断开连接", e);
    },
  },
};
</script>
<style lang='less'>
</style>
