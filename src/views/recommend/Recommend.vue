<template>
  <div id="recommend">
    <r-slider :banners="slider"/>
    热门歌单推荐
  </div>
</template>

<script>
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'

import RSlider from './components/RSlider'
export default {
  name: 'recommend',
  components: {
    RSlider
  },
  data () {
    return {
      slider: []
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    /**
     * 网路请求
     */
    _getRecommend () {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.slider = res.data.slider
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
