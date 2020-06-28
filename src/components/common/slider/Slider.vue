<template>
  <div class="slider" ref="sliderRef">
    <div class="slider_group" ref="sliderGroupRef">
      <slot></slot>
    </div>
    <div class="slider_dots">
      <span v-for="(item,index) in dotsArr" :key="index" :class="{'active': currentIndex === index}"></span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {addClass} from 'common/js/dom'
export default {
  name: 'slider',
  props: {
    loop: {
      // 是否轮播
      type: Boolean,
      default: true
    },
    autoPlay: {
      // 是否自动轮播
      type: Boolean,
      default: true
    },
    interval: {
      // 轮播间隔
      type: Number,
      children: null,
      default: 4000
    }
  },
  data () {
    return {
      slider: null,
      dotsArr: [],
      currentIndex: 0,
      timer: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._setSliderWidth()
      this._setDots()
      this._initSlider()
      if (this.autoPlay) {
        this._play()
      }
      window.addEventListener('resize', () => {
        if (!this.slider) return
        this._setSliderWidth(true)
        this.slider.refresh()
      })
    })
  },
  methods: {
    _setSliderWidth (resize) {
      this.children = this.$refs.sliderGroupRef.children
      let groupWidth = 0
      let sliderWidth = this.$refs.sliderRef.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        addClass(this.children[i], 'slider_item')
        this.children[i].style.width = sliderWidth + 'px'
        groupWidth += sliderWidth
      }
      if (this.loop && !resize) {
        groupWidth += 2 * sliderWidth
      }
      this.$refs.sliderGroupRef.style.width = groupWidth + 'px'
    },
    _setDots () {
      this.dotsArr = new Array(this.children.length)
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.sliderRef, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400
      })
      // 获取currentIndex
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        if (this.loop) {
          pageIndex -= 1
        }
        this.currentIndex = pageIndex
        if (this.autoPlay) {
          clearTimeout(this.timer)
          this._play()
        }
      })
    },
    _play () {
      let pageIndex = this.currentIndex + 1
      if (this.loop) {
        pageIndex += 1
      }
      this.timer = setTimeout(() => {
        this.slider.goToPage(pageIndex, 0, 400)
      }, this.interval)
    }
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>
<style scoped lang="stylus">
 @import "~common/stylus/variable"
.slider
  position relative
  min-height: 1px
  overflow: hidden
  .slider_group
    position: relative
    white-space: nowrap
    .slider_item
      float: left
      img
        width: 100%
  .slider_dots
    position absolute
    left 0
    right 0
    bottom 8%
    text-align center
    span
      display inline-block
      margin 0 4px
      width 8px
      height 8px
      border-radius 50%
      background hsla(0,0%,100%,.5)
      &.active
          width: 20px
          border-radius: 5px
          background: $color-theme
</style>
