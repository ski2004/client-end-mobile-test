<template>
  <div id="app" :lang="this.$store.state.lang">
    <Common-Mask
      :active.sync="this.$store.state.mask.active"
      :default_style="this.$store.state.mask.default_style"
      :type="this.$store.state.mask.type"
      :view="this.$store.state.mask.view"
      :width="this.$store.state.mask.width"
    ></Common-Mask>
    <Common-Error></Common-Error>
    <Common-Loading :active.sync="this.$store.state.isLoading.enable"></Common-Loading>
    <router-view />
  </div>
</template>


<style lang="scss">
// @import '@/assets/css/all.css';
// @import '@/assets/css/jstech.css';
// @import '@/assets/css/vendor.css';
</style>
