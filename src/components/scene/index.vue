<template>
  <div
    id="scene"
    :style="_style"
  >
    <slot></slot>
  </div>
</template>

<script>
const defaultOptions = {
    width: document.documentElement.clientWidth, // scene宽度
    height: document.documentElement.clientHeight, // scene高度
    bg: '', // scene的背景图
    size: 'cover', // scene的模式，类似于background-cover
    offset: { // 偏移量只在 size == contain 时，生效
      w: 0,
      h: 0
    }
}

import { mapState } from 'vuex';
export default {
  props: {
    options: {
      type: Object,
      default: () => (defaultOptions)
    }
  },
  data() {
    return {
      scale: 1,
      proportion: {
        scene: null,
        client: null
      },
      position: {}
    };
  },
  computed: {
    ...mapState([ 'clientSize' ]),
    _style() {
      return {
        width: `${this.filterProp('width')}px`,
        height: `${this.filterProp('height')}px`,
        transform: `scale3d(${this.scale}, ${this.scale}, 1)`,
        'background-image': `url(${this.filterProp('bg')})`,
        ...this.position
      }
    }
  },
  watch: {
    options: {
      handler: function(newVal) {
        if(newVal.size === 'cover') {
          this.position = {
            top: '50%',
            left: '50%',
            'margin-left': `${-0.5 * newVal.width}px`,
            'margin-top': `${-0.5 * newVal.height}px`,
          }
        }else {
          this.position = {}
        }
      },
      immediate: true,
      deep: true
    },
    clientSize: {
      handler: function(newVal) {
        this.proportion.scene = this.filterProp('width') / this.filterProp('height');
        this.proportion.client = newVal.width / newVal.height;

        if (this.proportion.client >= this.proportion.scene) {
          // 屏幕 扁长
          switch(this.filterProp('size')) {
            case 'cover':
              this.scale = newVal.width / this.filterProp('width');
              break;
            case 'contain':
              this.scale = newVal.height / (this.filterProp('height') + this.filterProp('offset', 'h'));
              break;
          }
        } else {
          // 屏幕 窄高
          switch(this.filterProp('size')) {
            case 'cover':
              this.scale = newVal.height / this.filterProp('height');
              break;
            case 'contain':
              this.scale = newVal.width / (this.filterProp('width') + this.filterProp('offset', 'w'));
              break;
          }
        }
      },
      immediate: true,
      deep: true
    },
  },
  methods: {
    filterProp(prop, subProp) {
      let propVal = ''
      if(subProp) {
        propVal = this.options[prop] ? this.options[prop][subProp] : defaultOptions[prop][subProp];
      }else {
        propVal = this.options[prop] || defaultOptions[prop];
      }
      return propVal;
    }
  }
};
</script>

<style lang="scss" scoped>
#scene {
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transform-origin: center;
  transition: all ease-out 300ms;
}
</style>