<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import _ from "lodash";
import { mapMutations } from 'vuex';
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
  mounted() {
    window.addEventListener("resize", this.resizeHandle);
    this.$nextTick(() => {
      this.resizeHandle();
    });
  },
  methods: {
    ...mapMutations([
      'UPDATE_CLIENTSIZE'
    ]),
    resizeHandle: _.debounce(function () {
      console.log('resize')
      this.UPDATE_CLIENTSIZE({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    }, 30),
  }
};
</script>

<style lang="scss">
@import "~@/assets/common/base.scss";
@import "~@/assets/common/routerAnime.scss";
</style>
