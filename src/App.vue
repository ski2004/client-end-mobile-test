<template>
  <div id="app" :lang="this.$store.state.lang">
    <Common-Mask
      :active.sync="this.$store.state.mask.active"
      :default_style="this.$store.state.mask.default_style"
      :type="this.$store.state.mask.type"
      :view="this.$store.state.mask.view"
      :width="this.$store.state.mask.width"
    ></Common-Mask>
    <Common-Error></Common-Error>
    <Common-Loading :active.sync="this.$store.state.isLoading.enable"></Common-Loading>
    <router-view />
    <router-view name="abc" />
  </div>
</template>

<script>
import { log } from "util";

export default {
  name: "",
  props: {},
  components: {},
  data: function() {
    // 資料
    return {};
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    // 初始
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

<style lang="scss">
// @import '@/assets/css/all.css';
// @import '@/assets/css/jstech.css';
// @import '@/assets/css/vendor.css';
</style>
