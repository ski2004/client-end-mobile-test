<template>
  <div class="sports-control">
    <div class="row">
      <!-- 只有早餐盤有 -->
      <!-- <a href="#" class="col-2 fz-5 pt-1 pl-3 text-muted">
            <i class="far fa-calendar-alt"></i>
        </a> 
      <div class="col-8 sports-time">-->

      <!-- 有直播的時候會有的 -->
      <!-- <a href="#" class="col-2 fz-5 pt-1 pl-3 text-danger">
            <i class="fab fa-youtube"></i>
        </a>
      <div class="col-8 sports-time">-->
      <div class="col-8 offset-2 sports-time">
        <button
          v-for="(item,i) in tab_list"
          type="button"
          class="btn btn-link"
          :class="{'text-basic': info.type === item.key , 'btn-sm text-dark': info.type !== item.key }"
          v-if="item.key !== 'live' || info.play !== 'pass' "
          @click="change_type(item.key)"
        >{{item.name}}</button>
      </div>
      <router-link
        tag="a"
        class="col-2 fz-5 pt-1 pr-3 text-muted text-right"
        :to="`/game/sports/${info.game}/${play_option[info.play]}/${info.type}`"
        @click.native="change_play(play_option[info.play])"
      >
        <i class="far fa-window-restore num-poin">
          <span class="badge badge-danger badge-num">10</span>
        </i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import cloneDeep from "lodash/cloneDeep";

export default {
  name: "",
  props: {},
  components: {},
  data: function() {
    // 資料
    return {
      _: this.show,
      info: this.$store.state.game.info,
      play_option: {
        single: "pass",
        pass: "single"
      },
      tab_list: [
        { key: "today", name: "今日" },
        { key: "live", name: "滾球" },
        { key: "other", name: "早餐" }
      ]
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
    ...mapActions(["$act"]),
    change_type(key) {
      let data = { type: key };
      this.$act({ act: "game/setInfo", data: data, src: "c03-0" });
      this.$router.push(
        `/game/sports/${this.info.game}/${this.info.play}/${key}`
      );
    },
    change_play(play) {
      let data = { play: play };
      this.$act({ act: "game/setInfo", data: data, src: "c03-1" });
      this.$router.push(
        `/game/sports/${this.info.game}/${play}/${this.info.type}`
      );
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