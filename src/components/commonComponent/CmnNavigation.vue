<template>
  <div class="navigation">
    <cmn-navigation-item path="/recommend">
      <div slot="barName">推荐</div>
    </cmn-navigation-item>
    <cmn-navigation-item path="/singer">
      <div slot="barName">歌手</div>
    </cmn-navigation-item>
    <cmn-navigation-item path="/rank">
      <div slot="barName">排行</div>
    </cmn-navigation-item>
    <cmn-navigation-item path="/search">
      <div slot="barName">搜索</div>
    </cmn-navigation-item>
  </div>
</template>

<script>
import CmnNavigationItem from './CmnNavigationItem'
export default {
  name: 'navigation',
  components: {
    CmnNavigationItem
  }
}
</script>
<style scoped lang="stylus">
@import '~common/stylus/variable';
.navigation {
  display: flex;
  justify-content: space-around;
  height: 44px;
  line-height: 44px;
  color: $color-text-d;
}
</style>
