<template>
  <footer class="footer shadow border-top">
    <div class="d-flex fz-5 text-center">
      <div class="footer-item">
        <a href="javascript:;" class="footer-item text-dark menu-toggle" @click="toggle()">
          <i class="fas fa-futbol"></i>
        </a>
      </div>
      <div class="footer-item">
        <a href="/" class="footer-item text-dark" data-toggle="modal" data-target="#search">
          <i class="fas fa-search"></i>
        </a>
      </div>
      <div class="footer-item">
        <a href="/" class="footer-item text-dark">
          <i class="far fa-list-alt new-point">
            <span class="badge badge-danger badge-point"></span>
          </i>
        </a>
      </div>
      <div class="footer-item">
        <a href="#" class="footer-item text-dark">
          <i class="fas fa-redo"></i>
        </a>
      </div>
      <div class="footer-item">
        <a href="/" class="footer-item text-dark" data-toggle="modal" data-target="#more">
          <i class="fas fa-ellipsis-h"></i>
        </a>
      </div>
    </div>
  </footer>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "",
  // 父組件來源
  props: {},
  components: {},
  data: function() {
    // 資料
    return {
      info: this.$store.state.game.info
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
    ...mapActions(["set"]),
    change(game) {
      let data = { game: game };
      this.set({ act: "game/setInfo", data: data, src: "cc02-0" });
    },
    toggle(){
      this.$parent.toggle()
    }
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

<style lang="scss" scoped>
</style>
