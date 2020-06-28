<template>
  <div class="hotSingLists">
    <p class="title" v-if="listArr.length">热门歌单推荐</p>
    <div class="list">
      <list-item v-for="(item,index) in listArr" :key="index" :itemData="item" />
    </div>
  </div>
</template>

<script>
import ListItem from 'components/content/list/ListItem'
export default {
  name: 'hotSingLists',
  components: {
    ListItem
  },
  props: {
    listArr: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped lang="stylus">
 @import "~common/stylus/variable"
.hotSingLists
  margin-top 10px
  padding 10px
  .title
    text-align center
    color $color-theme
    font-size $font-size-medium
  .list
    padding-left 10px
    margin-top 25px

</style>
