<template>
  <div id="computer-container">
    <Scene class="computer" :options="options">
      <div class="screen">
        <div id="computerTest"></div>
        <div id="reactTest"></div>
        <router-link to="/computer/test"><div class="testBtn"></div></router-link>
      </div>
    </Scene>
  </div>
</template>

<script>
import Scene from "@/components/scene/index";
export default {
  components: {
    Scene
  },
  data() {
    return {
      options: {
        width: 1622,
        height: 1059,
        bg: "/sceneImgs/computer.png",
        size: 'contain',
        offset: {
          w: 70,
          h: 30
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#computer-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("~@/assets/imgs/computer/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform-origin: center;
  .computer {
    position: absolute;
    bottom: 0;
    transform-origin: center bottom;
    left: 50%;
    margin-left: -811px;
    .screen {
      width: 1542px;
      height: 913px;
      position: absolute;
      background-image: url("~@/assets/imgs/computer/screen.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      top: 33px;
      left: 39px;
    }
    .testBtn {
      width: 200px;
      height: 50px;
      position: absolute;
      bottom: 10px;
      left: 20px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  #computerTest {
    width: 600px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 20%;
    left: 5%;
    overflow: scroll;
  }
  #reactTest {
    width: 600px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 20%;
    right: 5%;
    overflow: scroll;
  }
}
</style>