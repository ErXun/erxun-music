<template>
  <div id="tabBarContent" ref="tabBarRef">
    <!-- <cmn-navigation /> -->
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
// import Navigation from 'components/common/navigation/Navigation'
export default {
  name: 'tabBarContent',
  components: {
    // Navigation
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="stylus">
@import '~common/stylus/variable';

#tabBarContent
    display: flex
    justify-content space-around
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    color: $color-text-d;
    .tab-item
      .tab-link
        padding-bottom: 5px
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>
