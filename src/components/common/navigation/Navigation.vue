<template>
  <div class="navigation">
    <navigation-item path="/recommend">
      <div slot="barName">推荐</div>
    </navigation-item>
    <navigation-item path="/singer">
      <div slot="barName">歌手</div>
    </navigation-item>
    <navigation-item path="/rank">
      <div slot="barName">排行</div>
    </navigation-item>
    <navigation-item path="/search">
      <div slot="barName">搜索</div>
    </navigation-item>
  </div>
</template>

<script>
import NavigationItem from './NavigationItem'
export default {
  name: 'navigation',
  components: {
    NavigationItem
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
