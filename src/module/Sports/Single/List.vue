<template>
  <div>
    <!-- <Sport-SportControl></Sport-SportControl> -->
    <Sport-SportList></Sport-SportList>
    <div class="league-view-block">
      <button class="league-title btn btn-light" type="button" data-toggle="collapse" href="#a1">
        <div>MLB 美棒 - 國聯 (10)</div>
        <div class="text-right">
          <i class="fas fa-chevron-down"></i>
        </div>
      </button>
      <div class="collapse show" id="a1">
        <div class="league-start-time text-light">
          <div>2019 / 07 / 02 週二</div>
          <div>獨贏</div>
        </div>
        <ul class="league-list list-unstyled">
          <li v-for="(item,i) in list" class="league-matchup-item row no-gutters">
            <div class="join-favorite col-1">
              <button type="button" class="btn btn-link btn-sm text-dark">
                <i class="far fa-star"></i>
              </button>
            </div>
            <div class="league-team col-6">
              <div class="t-home">{{item.host}} (H)</div>
              <div class="t-away">{{item.guest}}</div>
              <router-link
                tag="a"
                class="t-more"
                :to="`/game/sports/${info.game}/${info.play}/${info.type}/${item.id}`"
              >
                <div>18:00</div>
                <div class="text-info">+142></div>
              </router-link>
              <a class="t-more"></a>
            </div>
            <div class="gameplay-item col-5">
              <button class="t-home btn" type="button" @click="addBet()">
                <span>{{item.multi.duy.host}}</span>
                <span class="text-success">
                  <i class="fas fa-caret-up"></i>
                  {{item.multi.duy.guest}}
                </span>
              </button>
              <button class="t-away btn" type="button">
                <span>{{item.multi.duy.host}}</span>
                <span class="text-basic">{{item.multi.duy.guest}}</span>
              </button>
              <button class="t-draw btn" type="button">
                <span>{{item.multi.duy.host}}</span>
                <span class="text-basic">{{item.multi.duy.guest}}</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AddBet from "./AddBet";
require('@/lib/dev/Mock');

export default {
  name: "",
  // props: {},
  components: {},
  data: function() {
    // 資料
    return {
      info: this.$store.state.game.info,
      list: [
        {
            gameSn: 0,
            host: "",
            guest: "",
            endTime: "",
            startTime: "",
            multi:{
                rfz:{
                    host: 0,
                    guest: 0,
                    let: 'host',
                },
                dax:{
                    over: 0,
                    under: 0,
                },
                duy:{
                    host: 0,
                    guest: 0,
                },
                dyh:{
                    host: 0,
                    odds: 0,
                    guest: 0,
                }
            }
        }
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
    ...mapActions(["set"]),
    async Oninit() {},
    addBet() {
      let data = {
        // view: "Sport-AddBet_Single",
        view: AddBet,
        type: "top",
        width: "95%",
        active: true
      };
      this.set({ act: "setMask", data: data, src: "ms11-0" });
    }
  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: function() {
    //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
    console.log("created");
    var _this = this;
    //載入賽事資料
    this.$http.get('/game/baseball')
        .then(res => {
            _this.list = res.data.list;
        });
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
    console.log("destroyed");
  }
  //END--生命週期
};
</script>

