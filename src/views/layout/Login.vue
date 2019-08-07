
<template src="@/view_style/Login" ></template>
<style src="@/view_style/Login" lang="scss" scoped ></style>

<script>
import { mapActions } from "vuex";
import { setToken } from "@/helpers/cookie";
import $validate from "@/helpers/validate";
import auth from "@/helpers/api/Auth";

export default {
  name: "",
  data: () => {
    return {
      active: false,
      form: {
        account: "",
        password: "",
        agree: false
      },
      warn: {
        account: false,
        password: false,
        agree: false
      }
    };
  },
  methods: {
    ...mapActions(["onLoading", "set"]),
    async login() {
      this.reset_warn();
      if (!this.validate()) {
        return;
      }
      this.onLoading({ data: true, src: "v01-1" });
      let data = {
        account: this.form.account,
        password: this.form.password
      };
      // let response = await auth.login(data);
      // if (response.status === 200) {

      // } else {

      // }
      this.onLoading({ data: false, src: "v01-2" });
      setToken("test");
      if (this.$route.query.redirect !== undefined) {
        this.$router.push(this.$route.query.redirect);
      } else {
        this.$router.push("/");
      }
    },
    validate() {
      switch (false) {
        case $validate.validRequired(this.form.account):
          this.warn.account = true;
          return false;
        case $validate.validRequired(this.form.password):
          this.warn.password = true;
          return false;
        case this.form.agree === true:
          this.warn.agree = true;
          return false;
      }
      return true;
    },
    reset_warn() {
      this.warn = {
        account: false,
        password: false,
        agree: false
      };
    },
    lang() {
      let data = {
        view: "Login-Language",
        default_style: false,
        active: !this.$store.state.mask.active
      };
      this.set({ act: "setMask", data: data, src: "v01-3" });
    }
  },
  created: function() {},
  mounted: () => {}
};
</script>
