// 遮罩
<template >
  <div
    class="background z-index"
    :class="{
      'bg-in':active===true,
      'bg-out':active===false
    }"
  >
    <div class="mask" @click="close()"></div>
    <div
      :class="{
        'default_style':default_style,
        'content-in':active===true,
        'content-out':active===false,
        'center':type==='center',
        'top':type==='top',

      }"
      :style="{ height: height , width: width }"
    >
      <component :is="view" :data.sync="data" :close="close"></component>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
        return "90%";
      }
    },
    type: {
      type: String,
      default: function() {
        return "";
      }
    },
    active: {
      type: Boolean,
      required: false,
      default: function() {
        return false;
      }
    },
    default_style: {
      //預設背景樣式
      type: Boolean,
      default: function() {
        return true;
      }
    },
    view: {
      type: [String,Object],
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
    ...mapActions(["set"]),
    close() {
      let data = { active: false };
      this.set({ act: "setMask", data: data, src: "cc01-0" });
      data = {
        default_style: false,
        width: "90%",
        type: "center"
      };
      setTimeout(() => {
        this.set({ act: "setMask", data: data, src: "cc01-1" });
      }, 500);
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
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  // align-items: center;
  justify-content: center;
  z-index: 99999;
  & > .mask {
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > .default_style {
    background-color: white;
    width: 500px;
    height: 300px;
    border-radius: 20px;
  }
  & > .content-in {
    &.center {
      position: fixed;
      animation: content-in 1s forwards;
    }
    &.top {
      position: fixed;
      animation: content-top 1s forwards;
    }
  }

  & > .content-out {
    &.center {
      position: fixed;
      top: 20vh;
      animation: content-out 1s forwards;
    }
    &.top {
      position: fixed;
      animation: content-out 1s forwards;
    }
  }
}
.bg-in {
  animation: b-in 0.5s forwards;
}
.bg-out {
  animation: b-out 0.5s forwards;
}

// 中間內容漸進出
@keyframes content-in {
  0% {
    top: 0vh;
  }
  100% {
    top: 20vh;
  }
}
@keyframes content-top {
  0% {
    top: 0vh;
  }
  100% {
    top: 1vh;
  }
}

@keyframes content-out {
  100% {
    top: -100vh;
  }
}

// 背景漸進出
@keyframes b-in {
  100% {
    background-color: rgba(55, 55, 55, 0.6);
  }
}
@keyframes b-out {
  100% {
    opacity: 0;
    bottom: 100vh;
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>

