<template>
  <div id="mainApp">
    <Scene :options="options">
      <router-link to="/computer/"><div class="computer"></div></router-link>
    </Scene>
  </div>
</template>

<script>
import Scene from "@/components/scene/index";
export default {
  components: {
    Scene,
  },
  data() {
    return {
      options: {
        width: 1920,
        height: 1080,
        bg: "sceneImgs/scene.jpeg",
        size: 'cover',
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#mainApp {
  position: relative;
  width: 100vw;
  height: 100vh;
  .computer {
    width: 157px;
    height: 120px;
    // background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 410px;
    left: 600px;
		cursor: pointer;
  }
}
</style>