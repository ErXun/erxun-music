<template>
  <div class="listItem">
    <div class="img">
      <img v-lazy="itemData.imgurl" alt />
    </div>
    <div class="desc">
      <p class="title">{{itemData.creator.name}}</p>
      <p class="descInfo">{{itemData.dissname}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listItem',
  props: {
    itemData: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style scoped lang="stylus">
@import '~common/stylus/variable';
.listItem
  display: flex;
  align-items center
  margin-bottom 20px
  .img
    img
      width: 60px;
      height: 60px;
  .desc
    margin-left: 20px;
    .title
      color: $color-text
      margin-bottom 15px
    .descInfo
      color: $color-text-d
      font-size $font-size-medium
</style>
