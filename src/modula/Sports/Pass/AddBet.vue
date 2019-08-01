<template>
  <!-- <div>
    addbet_single
  </div>-->

  <div class="betslip-modal modal-content d-flex justify-content-between">
    <div class="betslip-header bg-basic px-3">
      <div class="row py-1">
        <div class="col-2">
          <button type="button" class="redo">
            <i class="fas fa-sync-alt"></i>
          </button>
        </div>
        <div class="col-8 text-center">
          <h5 class="modal-title text-light">注單</h5>
        </div>
        <div class="col-2 pt-1">
          <button type="button" class="close" @click="close()">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <h4 class="fz-3 text-center">MLB 美棒-國聯 上半場</h4>
      <h3 class="h6 text-center mb-3">匹茲堡海盜 VS. 聖地牙哥教士</h3>
      <div class="bg-light p-3 rounded">
        <div class="py-2 text-center">聖地牙哥教士</div>
        <div class="row">
          <div class="col-4">讓分</div>
          <div class="col-8 text-right">
            <span class="px-1">0.5</span>
            <span class="px-1">0.980</span>
          </div>
        </div>
      </div>
      <Sport-BetMoneyInfo></Sport-BetMoneyInfo>
      <div class="pt-3">
        <Sport-BetKeyBorad></Sport-BetKeyBorad>
      </div>
    </div>
    <div class="betslip-footer border-top">
      <!-- <button type="button" class="btn btn-secondary btn-block" disabled>最低投注 100 元</button> -->
      <button type="button" class="btn btn-basic text-light btn-block" data-dismiss="modal">確定投注</button>
      <!-- <button type="button" class="btn btn-danger  btn-block" disabled>賠率變更</button> -->
    </div>
  </div>
</template>


<script>
export default {
  name: "",
  props: {
    close: {
      type: Function,
      default: function() {
        return false;
      }
    }
  },
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
    async Oninit() {}
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