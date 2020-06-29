<template>
  <div id="detailPage">

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'singerDetail',
  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  created () {
    // console.log(this.singer)
  }

}
</script>
<style scoped lang="stylus">
@import '~common/stylus/variable';
#detailPage
  position fixed
  background-color $color-background
  z-index 99
  top 0
  left 0
  right 0
  bottom 0
</style>
