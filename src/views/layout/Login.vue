
<template src="@/view_style/Login" ></template>
<style src="@/view_style/Login" lang="scss" scoped ></style>

<script>

export default {
  name: "",
  data: () => {
    return {
      active:false
    };
  },
  methods:{
  },
  created: function() {
    console.log(process.env.VUE_APP_STYLE)
  },
  mounted: () => {}
};
</script>
