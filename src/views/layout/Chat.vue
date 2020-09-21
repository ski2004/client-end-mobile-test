<template>
  <div>
    <p>
      測試 websocket 聊天室
    </p>
    name:<input type="text" v-model="form.name" >
    age:<input type="text" v-model="form.age" >
    <button @click="add()" >add</button>
  </div>
</template>


<script>
export default {
  name: "",
  props: {
    test: {
      type: Function,
      default: function () {
        return false;
      },
    },
  },
  data: function () {
    // 資料
    return {
      form : {
        name: '',
        age: 10,
      }
    };
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
   
  },
  methods: {
     add(){
      // this.$http
      // .post("http://localhost:3005/api/add",this.form)
      // .then((response) => {
      //   this.datas = response.data;
      //   console.log(response.data);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
    }
  },
  //BEGIN--生命週期
  beforeCreate: function () {
    //實體初始化
  },
  created: function () {
    //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
  },
  beforeMount: function () {
    //執行元素掛載之前。
  },
  mounted: function () {
    //元素已掛載， $el 被建立。
    this.$http
      .get("http://localhost:3005/api/list")
      .then((response) => {
        this.datas = response.data;
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  beforeUpdate: function () {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function () {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function () {
    //實體還可使用。
  },
  destroyed: function () {
    //實體銷毀。
  },
  //END--生命週期
};
</script>

<style lang="scss" scoped>
</style>