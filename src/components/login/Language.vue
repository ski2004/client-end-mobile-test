<template>
  <div class="modal-content pt-3 px-3">
    <div class="row">
      <div
        v-for="(item,i) in list"
        @click="changLanguage(item.key)"
        class="col-6 mb-3"
        data-dismiss="modal"
      >
        <svg class="lang-icon" aria-hidden="true" data-toggle="modal" data-target="#language">
          <use :xlink:href="item.xlink" />
        </svg>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Language",
  props: {
    // 父組件來源
    close: {
      type: Function,
      default: function() {
        return;
      }
    }
  },
  data: () => {
    return {

      list: [
        { key: "cn", name: "简体", xlink: "#js-China" },
        { key: "tw", name: "繁體", xlink: "#js-HongKong" },
        { key: "en", name: "English", xlink: "#js-UnitedStates" },
        { key: "cn", name: "Vietnam", xlink: "#js-Vietnam" },
        { key: "cn", name: "ไทย", xlink: "#js-Thailand" },
        { key: "cn", name: "대한민국", xlink: "#js-SouthKorea" },
        { key: "cn", name: "日本", xlink: "#js-Japan" }
      ]
    };
  },
  methods: {
    ...mapActions(["language"]),
    changLanguage: function(value) {
      this.$translate.change(value);
      this.language({ data: value , src: 'c01-1' });
      this.close();
    }
  }
};
</script>

<style scoped>
</style>
