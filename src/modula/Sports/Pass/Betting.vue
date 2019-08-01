<template>
  <div class="">
    <!-- 改變顏色  sports-now-->
    <header class="sports-today header">
      <div class="sports-tab">
        <div class="row text-light">
          <a class="col-1 text-light" href="javascript:;" onclick="history.back()">
            <i class="fas fa-chevron-left"></i>
          </a>
          <div class="col-9">棒球 > MLB 美棒 - 國聯</div>
          <div class="col-2 text-right">152/10</div>
        </div>
      </div>
      <div class="ember-view" style="background-image: url(/assets/images/bg/football.svg);">
        <div class="game-time-block">
          <div class="game-date">2019/07/02 星期一</div>
          <div class="game-time">23:45</div>
        </div>
        <div class="team-names-block pt-3">
          <div class="team-home">
            <div>
              聖地牙哥教士(H)
              <i class="fas fa-tshirt text-danger"></i>
            </div>
            <span class="badge badge-basic">D</span>
          </div>
          <div class="team-vs">VS.</div>
          <div class="team-away">
            <div>
              <i class="fas fa-tshirt text-primary"></i> 匹茲堡海盜
            </div>
            <span class="badge badge-basic">D</span>
          </div>
        </div>
      </div>
      <nav class="gameplay-tab-block nav nav-pills nav-justified">
        <a class="nav-link" href="#">全部</a>
        <a class="nav-link active" href="#">大小</a>
        <a class="nav-link" href="#">讓分</a>
        <a class="nav-link" href="#">獨贏</a>
        <a class="nav-link" href="#">波膽</a>
      </nav>
    </header>

    <div class="main-content-wrap">
      <div class="gameplay-view-block">
        <h2 class="gameplay-title h6" data-toggle="collapse" href="#a1">
          <div>獨贏</div>
          <div class="text-right">
            <i class="fas fa-chevron-down"></i>
          </div>
        </h2>
        <div class="gameplay-item collapse show" id="a1">
          <div class="row no-gutters">
            <button class="col-4 btn" type="button">
              <span>1</span>
              <span class="text-basic">0.830</span>
            </button>
            <button class="col-4 btn border-black-x" type="button">
              <span>X</span>
              <span class="text-basic">0.830</span>
            </button>
            <button class="col-4 btn" type="button">
              <span>2</span>
              <span class="text-basic">0.830</span>
            </button>
          </div>
        </div>
      </div>
      <div class="gameplay-view-block">
        <button
          class="gameplay-title btn btn-light"
          type="button"
          data-toggle="collapse"
          href="#a2"
        >
          <div>大小</div>
          <div class="text-right">
            <i class="fas fa-chevron-down"></i>
          </div>
        </button>
        <div class="gameplay-item collapse show" id="a2">
          <div class="row no-gutters">
            <button class="col-6 border-black-r btn" type="button">
              <span>大</span>
              <span class="text-danger">
                <i class="fas fa-caret-down"></i> 1.03000
              </span>
            </button>
            <button class="col-6 btn" type="button">
              <span>小</span>
              <span class="text-basic">0.830</span>
            </button>
          </div>
        </div>
      </div>
      <div class="gameplay-view-block">
        <button
          class="gameplay-title btn btn-light"
          type="button"
          data-toggle="collapse"
          href="#a3"
        >
          <div>單雙</div>
          <div class="text-right">
            <i class="fas fa-chevron-down"></i>
          </div>
        </button>
        <div class="gameplay-item collapse show" id="a3">
          <div class="row no-gutters">
            <button class="col-6 border-black-r btn btn-added" type="button">
              <span>單</span>
              <span class="text-success">
                <i class="fas fa-caret-up"></i> 1.03000
              </span>
            </button>
            <button class="col-6 btn" type="button">
              <span>雙</span>
              <span class="text-basic">0.830</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    // this.close();
    // console.log(this.$route.params);
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
<style scoped>
.game-teams-list .main-content-wrap {
    padding-top: 200px;
}
</style>


