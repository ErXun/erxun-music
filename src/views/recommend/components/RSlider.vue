<template>
  <div class="rSlider">
    <slider v-if="banners.length">
      <div v-for="(item,index) in banners" :key="index">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt />
        </a>
      </div>
    </slider>
  </div>
</template>

<script>
import Slider from 'components/commonComponent/slider/Slider'
export default {
  name: 'rSlider',
  components: {
    Slider
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
  mounted () {
  },
  methods: {
  }
}
</script>
<style scoped lang="stylus">
</style>
