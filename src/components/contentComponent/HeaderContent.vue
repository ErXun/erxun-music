<template>
  <div id="headerContent">
    <cmn-header>
      <div slot="middle">
        <img :src="defaultIcon" alt="">
        <span>ErXun Music</span>
      </div>
    </cmn-header>
  </div>
</template>

<script>
import CmnHeader from 'components/commonComponent/CmnHeader'

import defaultIcon from 'common/image/default.png'
export default {
  name: 'headerContent',
  components: {
    CmnHeader
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
