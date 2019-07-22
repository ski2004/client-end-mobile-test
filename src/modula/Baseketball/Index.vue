

<template>
    <div class=" page">
        <Common-Header/>
        <Header/>
        <div class="container">
            <h2>{{title}}</h2>
        </div>
        <router-view></router-view>
    </div>
</template>


<script>
// import router from './router'
import Header from "../../components/common/Header";

export default {
  name: "",
  // 父組件來源
  props: {},
  components: {
    /** 
     * 引入的組件  
     * 共用的才需rename 方便維護
     * "資料夾-檔名" : 元件名
     * "common-Masks": Masks,
     * "report-Bet": Bet
     */
    Header
  },
  data: function() {
    // 資料
    return {
      title: this.$route.name
    };
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    // 初始
    async Oninit() {
    },
  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: function() {
    //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
  },
  beforeMount: function() {
    //執行元素掛載之前。
  },
  mounted: function() {
    //元素已掛載， $el 被建立。
  },
  beforeUpdate: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function() {
    //實體還可使用。
  },
  destroyed: function() {
    //實體銷毀。
  }
  //END--生命週期
};
</script>

<style scoped></style>
