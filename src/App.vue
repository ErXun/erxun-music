<template>
  <div id="app">
    <header-content />
    <tab-bar-content />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import HeaderContent from 'components/content/HeaderContent'
import TabBarContent from 'components/content/TabBarContent'
export default {
  name: 'App',
  components: {
    HeaderContent,
    TabBarContent
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/variable';
  #app
    color: $color-theme
</style>
