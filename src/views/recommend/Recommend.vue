<template>
  <div class="recommend">
    <scroll class="recommend_content" :data="listArr" ref="scrollRef">
      <div>
        <r-slider :banners="slider"  @imgLoadEvent="imgLoadEvent"/>
        <hot-sing-lists :listArr="listArr" />
      </div>
      <div v-show="!listArr.length" class="loading_container">
          <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script>
import { getRecommend, getDiscList } from 'api/recommend'
import { ERR_OK } from 'api/config'

import RSlider from './components/RSlider'
import HotSingLists from './components/HotSingLists'
import Scroll from 'components/common/scroll/Scroll'
import Loading from 'components/common/loading/Loading'
export default {
  name: 'recommend',
  components: {
    RSlider,
    HotSingLists,
    Scroll,
    Loading
  },
  data () {
    return {
      slider: [],
      listArr: []
    }
  },
  created () {
    this._getDiscList()
    this._getRecommend()
    // test
    setTimeout(() => {
      // this._getRecommend()
    }, 1000)
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
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.listArr = res.data.list
        }
      })
    },
    // test---当图片加载之后，对页面进行刷新，确保 better-scroll 的效果
    imgLoadEvent () {
      this.$refs.scrollRef.refresh()
    }
  }
}
</script>
<style scoped lang="stylus">
@import '~common/stylus/variable';

.recommend
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  .recommend_content
    height: 100%
    overflow: hidden
    position relative
    .loading_container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)

</style>
