<template>
  <div class="headers">
    <div class="leftBar">
      <slot name="left"></slot>
    </div>
    <div class="middleBar">
      <slot name="middle"></slot>
    </div>
    <div class="rightBar">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headers'
}
</script>

<style scoped lang="stylus">
.headers
  display flex
  height 100%
  width 100%
  .leftBar,.rightBar
    width 44px
    text-align center
  .middleBar
    flex 1
    text-align center
</style>
