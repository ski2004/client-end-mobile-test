
<template src="@/view_style/Login" ></template>
<style src="@/view_style/Login" lang="scss" scoped ></style>

<script>
import { mapActions } from "vuex";

export default {
  name: "",
  data: () => {
    return {
      lang:'cn'
    };
  },
  methods:{
    ...mapActions(["lang_change"]),
    ChangLanguage: function() {
      console.log(this.lang)
      this.$translate.change(this.lang);
      this.lang_change(this.lang)
    },
  },
  created: function() {
    // process.env.VUE_APP_SECRET
    console.log(process.env.VUE_APP_STYLE)
  },
  mounted: () => {}
};
</script>
