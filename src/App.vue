<template>
  <div id="app">
    <header-content />
    <tab-bar-content />
    <keep-alive>
      <router-view />
    </keep-alive>
    <player />
  </div>
</template>

<script>
import HeaderContent from 'components/content/HeaderContent'
import TabBarContent from 'components/content/TabBarContent'
import Player from 'components/content/player/Player'

export default {
  name: 'App',
  components: {
    HeaderContent,
    TabBarContent,
    Player
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

#app {
  color: $color-theme;
}

</style>
