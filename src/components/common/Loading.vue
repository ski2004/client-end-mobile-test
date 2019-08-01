<template >
  <div class="background black z-index" v-if="active">
    <div class="width-100" :style="{ height: height }">
      <div class="loading" />
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    // 父組件來源
    active: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    height: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  components: {},
  data: function() {
    // 資料
    return {
      _: this.height
    };
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    //有無相依都會計算方法
  },
  //生命週期
  created: function() {
    //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
  }
};
</script>

<style lang="scss" scoped >
/* 遮罩 */
.background {
  // position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* height: 100px; */
}
.z-index {
  z-index: 4;
}

.black {
  background-color: #000000d6;
}
.loading {
  background-image: url("/assets/images/loading.gif");
  width: 128px;
  height: 128px;
}
</style>
