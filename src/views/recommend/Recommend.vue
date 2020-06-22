<template>
  <div id="recommend">
    <r-slider :banners="slider"/>
    <hot-sing-lists :listArr="listArr"/>
  </div>
</template>

<script>
import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'

import RSlider from './components/RSlider'
import HotSingLists from './components/HotSingLists'
export default {
  name: 'recommend',
  components: {
    RSlider,
    HotSingLists
  },
  data () {
    return {
      slider: [],
      listArr: []
    }
  },
  created () {
    this._getRecommend()
    this._getDiscList()
  },
  methods: {
    /**
     * 网路请求
     */
    // 轮播图
    _getRecommend () {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.slider = res.data.slider
        }
      })
    },
    _getDiscList () {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.listArr = res.data.list
        }
      })
    }
  }
}
</script>
<style scoped>
</style>
