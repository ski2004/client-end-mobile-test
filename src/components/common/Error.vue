<template >
  <div class="background z-index" v-if="this.$store.state.error.message !=='' ">
    <div class="background z-index-1" @click="reset()"></div>
    <div class="card error">
      <div class="card-header" style="color:red">Error!!</div>
      <div class="card-body">
        <div>
          <p>
            <span v-if="this.$store.state.error.code">[{{ this.$store.state.error.code }}]</span>
            {{ this.$store.state.error.message }}
          </p>
          <p v-if="this.$store.state.error.src" class="c-error">- {{ this.$store.state.error.src }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "",
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
    ...mapActions(["errors"]),
    reset() {
      let data = { message: "", code: "", src: "" };
      this.errors({ data: data, src: "c02-1" });
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
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  /* height: 100px; */
}
.z-index {
  z-index: 4;
}

.z-index-1 {
  z-index: -1;
}

.error {
  background-color: white;
  width: 90%;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #888888;
}

/*  */

// .card {
//   position: relative;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   min-width: 0;
//   height: 100%;
//   word-wrap: break-word;
//   /* background-color: #fff; */
//   background-clip: border-box;
//   border: 1px solid rgba(0, 0, 0, 0.125);
//   border-radius: 0.25rem;
// }
// .card-header {
//   padding: 0.02rem 2.25rem;
//   margin-bottom: 0;
//   background-color: rgba(0, 0, 0, 0.03);
//   border-bottom: 1px solid rgba(0, 0, 0, 0.125);
// }
// .card-header:first-child {
//   border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
// }
// .card-body {
//   -ms-flex: 1 1 auto;
//   flex: 1 1 auto;
//   padding: 1.25rem;
// }
.c-error {
  display: flex;
  justify-content: flex-end;
  font-size: small;
  color: #8c8c8c;
}
</style>