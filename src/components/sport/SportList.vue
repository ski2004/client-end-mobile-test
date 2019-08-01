<template>
  <div>
    <div class="sports-list">
      <ul class="sports-wp nav">
        <li v-for="(item,i) in tab_list" class="sports-item nav-item">
          <router-link
            tag="a"
            :to="`/game/sports/${item.key}/${info.play}/${info.type}`"
            class="sports-link nav-link"
            :href="`#${item.key}`"
            data-toggle="tab"
            :class="{'active': info.game === item.key}"
            @click.native="change(item.key)"
          >
            <i class="sports-icon js fz-icon-3" :class="item.icon"></i>
            <div class="sports-title">{{item.name}}</div>
            <small class="sports-badge">{{item.play}}</small>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="sports-tab tab-content text-light fz-3">
      <div
        v-for="(item,i) in tab_list"
        :id="item.key"
        class="tab-pane fade show"
        :class="{'active': info.game === item.key}"
      >
        <div class="d-flex justify-content-between">
          <div>{{item.name}}</div>
          <div>{{item.play}}/{{item.counter}}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import game_menu from "@/helpers/data/game";
export default {
  name: "",
  // 父組件來源
  props: {},
  components: {},
  data: function() {
    // 資料
    return {
      info: this.$store.state.game.info,
      tab_list: []
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
    change(game) {
      let data = { game: game };
      this.$act({ act: "game/setInfo", data: data, src: "c04-0" });
    }
  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: function() {
    //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
    let { ...menu } = game_menu;
    this.tab_list = menu;
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