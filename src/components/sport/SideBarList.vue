<template>
  <div
    id="sidebar"
    class="d-flex flex-column justify-content-between"
    :class="{'toggled':show===true}"
  >
    <div class="sidebar-top text-light">
      <div class="row py-2 px-3 border-black-b-8">
        <div class="col-8">2019/05/17 PM 12:01:40</div>
        <div class="col-4 text-right">
          <a href="javascript:;" class="menu-toggle text-light h4" @click="close()">
            <i class="fas fa-times"></i>
          </a>
        </div>
      </div>
      <div class="row no-gutters border-white-b">
        <div class="col-4 border-white-x" v-for="(item, key, index) in list_type">
          <button
            @click="type=key"
            type="button"
            class="btn btn-link btn-sm btn-block text-light border-white-t rounded-0"
          >{{item.name}}({{item.count}})</button>
        </div>
      </div>
    </div>
    <div class="sidebar-main">
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(item, key, index)  in menu">
            <a class="nav-link" :class="{'dropdown-toggle':key==='baseball'}" @click="change(item)">
              <i class="js mr-1" :class="item.icon"></i>
              {{item.name}}-{{key}} (0)
              <span
                v-if="key!=='baseball'"
                class="badge badge-danger ml-auto"
              >Live</span>
            </a>
            <div v-if="key==='baseball'" class="dropdown-menu" :class="{'show':dropdown===key}">
              <a v-for="(o,i) in league_baseball" class="dropdown-item" @click="link(item.key)">
                {{o.name}}
                <span class="badge badge-danger ml-auto">Live</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>

    <div class="sidebar-footer pb-2">
      <div class="row no-gutters border-black-b-8 py-2">
        <div class="col-6 px-3">
          <button type="button" class="btn btn-link p-0" @click="active=!active">
            <svg class="lang-icon" aria-hidden="true">
              <use xlink:href="#js-China" />
            </svg>
          </button>
        </div>
        <div class="col-6 px-3 text-right fz-5">
          <router-link tag="a" to="/" class="text-light">
            <i class="fas fa-home"></i>
          </router-link>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-link btn-block text-light border-white-t rounded-0"
        @click="logout()"
      >登出</button>
    </div>
    <Common-Mask :active.sync="active" :background_style="false" width="90%" view="Login-Language"></Common-Mask>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import game_menu from "@/helpers/data/game";
export default {
  name: "",
  // 父組件來源
  props: {
    show: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  components: {},
  data: function() {
    // 資料
    return {
      info: this.$store.state.game.info,
      menu: {},
      active: false,
      league_baseball: [
        { name: "美棒" },
        { name: "日棒" },
        { name: "台棒" },
        { name: "韓棒" }
      ],
      dropdown: "",
      type: "today",
      list_type: {
        today: { name: "今日", count: 0 },
        live: { name: "滾球", count: 0 },
        other: { name: "早餐", count: 0 }
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
    // 初始
    ...mapActions(["$act"]),
    change(o) {
      let data = { game: o.key, play: "single", type: this.type };
      this.$act({ act: "game/setInfo", data: data, src: "c05-0" });

      if (o.key !== "baseball") {
        this.link(o.key);
      } else {
        this.dropdown = this.dropdown === "" ? o.key : "";
      }
    },
    link(game) {
      this.dropdown = "";
      this.$router.push(`/game/sports/${game}/single/${this.type}`);
      this.close();
    },
    close() {
      this.$emit("update:show", false);
    },
    logout(){
      this.$router.push(`/login`);
    }
  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: function() {
    //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
    // this.onLoading({ data: true, src: "v01-1" });
    let { ...menu } = game_menu;
    this.menu = menu;
  },
  beforeMount: function() {
    //執行元素掛載之前。
  },
  mounted: function() {
    //元素已掛載， $el 被建立。
    // this.onLoading({ data: false, src: "v02-0" });
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
<style scoped>
</style>
