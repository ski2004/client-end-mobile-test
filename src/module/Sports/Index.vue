

<template>
  <div id="wrapper" class="game-teams-list" v-cloak>
    <Sport-SideBarList :show.sync="show_sidebar"></Sport-SideBarList>
    <header
      class="header l-hide l-active"
      :class="{'sports-today': info.type !== 'live' , 'sports-now':info.type === 'live' }"
    >
      <Sport-MemberBar></Sport-MemberBar>
      <Sport-SportControl></Sport-SportControl>
      <router-view></router-view>
    </header>

    <!-- <div class="main-content-wrap" :class="{'hidden':hidden}" >
      <router-view></router-view>
    </div>-->
    <div class="down-menu">
      <Common-FooterBetInfo></Common-FooterBetInfo>
      <Common-Footer></Common-Footer>
    </div>
    <div class="gototop">
      <i class="fas fa-chevron-up"></i>
    </div>
  </div>
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
      info: this.$store.state.game.info,
      show: {
        control: true,
        sidebar: false
      },
      show_sidebar: false
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
    ...mapActions(["onLoading", "set"]),
    toggle() {
      this.show_sidebar = true;
    }
  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: function() {
    //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
    console.log("index.created");
    let data = {
      game: this.$route.params.game,
      play: this.$route.meta.play,
      type: this.$route.params.type
    };
    this.set({ act: "game/setInfo", data: data, src: "ms00-1" });
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
    console.log("index.updated");
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
.hidden {
  padding-top: 62px;
}
</style>
