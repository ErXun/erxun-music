<template>
  <div id="headerContent">
    <music-header>
      <div slot="middle">
        <img :src="defaultIcon" alt="">
        <span>ErXun Music</span>
      </div>
    </music-header>
  </div>
</template>

<script>
import MusicHeader from 'components/common/header/Header'

import defaultIcon from 'common/image/default.png'
export default {
  name: 'headerContent',
  components: {
    MusicHeader
  },
  data () {
    return {
      defaultIcon: defaultIcon
    }
  }
}
</script>
<style scoped lang="stylus">
 @import '~common/stylus/variable';
  #headerContent
    height 44px
    line-height 44px
    font-size $font-size-large;
    img
      width 30px
      height 32px
      vertical-align sub
</style>
