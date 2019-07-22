// 遮罩
<template >
  <div class="background black z-index" v-if="active">
    <div class="background z-index-1" @click="close()"></div>
    <div :class="{'background_style':background_style}" :style="{ height: height , width: width }">
      <component :is="view"  :data.sync="data" :close="close" ></component>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    // 父組件來源
    data: {
      type: Object,
      default: function() {
        return {};
      }
    },
    height: {
      type: String,
      default: function() {
        return "";
      }
    },
    width: {
      type: String,
      default: function() {
        return "";
      }
    },
    active: {
      type: Boolean,
      required: false,
      default: function() {
        return true;
      }
    },
    background_style: {
      //預設背景樣式
      type: Boolean,
      default: function() {
        return true;
      }
    },
    view: {
      type: String,
      default: function() {
        return "test";
      }
    }
  },
  components: {
    test: {
      // cdn版本會出錯
      template: "<p>test<p>"
    }
  },
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
    //有無相依都會計算方法
    close: function() {
      this.$emit("update:active", false);
    }
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
  z-index: 4;
  
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > .background_style {
    background-color: white;
    width: 500px;
    height: 300px;
    border-radius: 20px;
  }
}

.z-index-1 {
  z-index: -1;
}
.black {
  background-color: rgba(55, 55, 55, 0.6);
}


.ani_dot {
  -webkit-animation: dot 3s infinite step-start;
}

@keyframes dot {
  0% {
    width: 0;
    margin-right: 1.5em;
  }
  33% {
    width: 0.5em;
    margin-right: 1em;
  }
  66% {
    width: 1em;
    margin-right: 0.5em;
  }
  100% {
    width: 1.5em;
    margin-right: 0;
  }
}
</style>

