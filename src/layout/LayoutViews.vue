<template>
  <div :class="'safe-areas'+' '+ (UseRtl?'rtl':'')">
    <header></header>
    <div class="content-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    UseRtl: Boolean,
  },
  setup() {},
  data() {},
  created: function () {},
};
</script>

<style></style>
