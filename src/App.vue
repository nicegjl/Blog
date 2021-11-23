<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: 'scale-in'
    }
  },
  watch: {
    $route(to, from) {
      const toDepth = to.meta.depth;
      const fromDepth = from.meta.depth;
      this.transitionName = toDepth < fromDepth ? "scale-out" : "scale-in";
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/common/base.scss";
@import "~@/assets/common/routerAnime.scss";
</style>
