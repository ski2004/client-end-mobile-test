<template>
  <div>
    <p>npm run start</p>
    <p>測試nodejs 取db API & fake API</p>name:
    <input type="text" v-model="form.name" />
    age:
    <input type="text" v-model="form.age" />
    <button @click="add()">add</button>

    list:{{list}}
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
      form: {
        name: "",
        age: 10,
      },
      list: [],
    };
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    async set_add() {
      let res = await this.$http
        .post("http://localhost:3005/api/add", this.form)
        .then((response) => {
          console.log(response.data);
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return error;
        });
      return res;
    },
    async get_list() {
      let res = await this.$http
        .get("http://localhost:3005/api/list")
        .then((response) => {
          this.list = response.data.result;
          // console.log("XXXX",this.list);
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
          return error;
        });
      return res;
    },
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
    this.get_list()
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