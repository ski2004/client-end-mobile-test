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
        'default_style':type==='default',
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
/**
* @showdoc
* @catalog components/common
* @title 遮罩
* @description 畫面遮罩
* @path src/components/common/Mask.vue
* @type props
* @param data Object 要給${view}元件的資料
* @param height String 遮罩高,預設90%
* @param width String 遮罩寬
* @param type String 遮罩類型,用於特殊呈現判斷,預設:default
* @param active Boolean 顯示/隱藏,
* @param view String,Object 用户昵称,元件名稱或是元件物件
* @remark 这里是备注信息
*/
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
    /**
    * @showdoc (偵測備註使用每個都要有)
    * @catalog test/(資料夾層級,選填)
    * @title 標題(一隻檔案有一個打過就可以,選填)
    * @name name(func才有用必填 ,props用不到選填)
    * @description 簡單描述(必填)
    * - 簡單描述123(必填)
    * @path src/views/example.vue(一隻檔案有一個打過就可以多打也沒影響,選填)
    * @type props|methods 
    * @param active Boolean 顯示/隱藏,(內容請勿有空格如:顯示 隱藏 ,選填 )
    * @example
    * > (* > 必有)
    * > let params = { l_lv:this.level }
    * > let res = await _account.getAccount(params);
    */
    close() {
      let data = { active: false };
      this.set({ act: "setMask", data: data, src: "cc01-0" });
      data = {
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

