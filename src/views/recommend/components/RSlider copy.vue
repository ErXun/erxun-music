<template>
  <div>
    <swiper ref="swiper">
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt @load="imgLoadEvent" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/commonComponent/swiper/'
export default {
  name: 'rSlider',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      tag: false
    }
  },
  methods: {
    imgLoadEvent () {
      // 限制多次调用
      if (!this.tag) {
        this.$emit('imgLoadEvent')
      }
      this.tag = true
    }
  }
}
</script>
<style scoped>
</style>
