<template>
  <div class="page">
    <div class="wrapper">
      <h1 class="font-large">404</h1>
      <h3>Page Not Found</h3>
      <h4>找不到網頁</h4>
    </div>
    <p class="countdown">
      <span class="seconds">{{second}}</span>秒後回到首頁
    </p>
  </div>
</template>

<script>
export default {
  name: "",
  data: function() {
    // 資料
    return {
      second: 5,
      interval: 0
    };
  },
  created: function() {
    //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
    this.interval = setInterval(() => {
      this.second--;
      if (this.second <= 0) {
        this.$router.push("/login");
        clearInterval(this.interval)
      }
    }, 1000);
  }
};
</script>

<style scoped>
.font-large {
  font-size: xx-large;
}
.page {
  width: 100vw;
  height: 100vh;
  color: darkgray;
}
.wrapper {
  text-align: center;
  position: relative;
  width: auto;
  height: auto;
  max-width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
.countdown {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #333333;
}
</style>
