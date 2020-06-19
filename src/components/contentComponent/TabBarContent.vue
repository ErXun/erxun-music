<template>
  <div id="tabBarContent" ref="tabBarRef">
    <!-- <cmn-tab-bar :tabName="tabName"/> -->
    <cmn-navigation />
  </div>
</template>

<script>
import CmnTabBar from 'components/commonComponent/CmnTabBar'
import CmnNavigation from 'components/commonComponent/CmnNavigation'
export default {
  name: 'tabBarContent',
  components: {
    CmnTabBar,
    CmnNavigation
  },
  data () {
    return {
      tabName: [
        {
          name: '推荐',
          path: '/recommend'
        },
        {
          name: '歌手',
          path: '/singer'
        },
        {
          name: '排行',
          path: '/rank'
        },
        {
          name: '搜索',
          path: '/search'
        }
      ]
    }
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="stylus"></style>
