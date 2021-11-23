<template>
  <div
    id="scene"
    :style="_style"
  >
    <slot></slot>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  props: {
    options: {
      typeof: Object,
      default: () => { 
        return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
        }
      }
    }
  },
  data() {
    return {
      scale: 1,
      client: {
        width: 0,
        height: 0,
      },
      proportion: {
        scene: null,
        client: null
      }
    };
  },
  computed: {
    _style() {
      return {
        width: `${this.options.width}px`,
        height: `${this.options.height}px`,
        'margin-left': `${-0.5 * this.options.width}px`,
        'margin-top': `${-0.5 * this.options.height}px`,
        transform: `scale3d(${this.scale}, ${this.scale}, 1)`,
      }
    }
  },
  mounted() {
    this.proportion.scene = this.options.width / this.options.height;
    window.addEventListener("resize", this.resizeHandle);
    this.$nextTick(() => {
      this.resizeHandle();
    });
  },
  methods: {
    resizeHandle: _.debounce(function () {
      this.client.width = document.documentElement.clientWidth;
      this.client.height = document.documentElement.clientHeight;
      this.proportion.client = this.client.width / this.client.height;

      if (this.proportion.client >= this.proportion.scene) {
        this.scale = this.client.width / this.options.width;
      } else {
        this.scale = this.client.height / this.options.height;
      }
    }, 30),
  },
};
</script>

<style lang="scss" scoped>
#scene {
  position: absolute;
  background-image: url("~@/assets/imgs/scene/bg.jpeg");
  background-position: center 30%;
  background-repeat: no-repeat;
  background-size: cover;
  transform-origin: center;
  top: 50%;
  left: 50%;
  // transition: all ease-out 1000ms;
}
</style>