<template>
  <div id="navigationItem" @click="clickEvent">
    <div :class="{'isActive': isTrue}">
      <slot name="barName"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigationItem',
  props: {
    path: String
  },
  data () {
    return {

    }
  },
  computed: {
    // this.$route.path，当前的活跃路由
    isTrue () {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    clickEvent () {
      // console.log(this.path)
      // console.log(this.$route.path)
      // console.log(this.$route.path.indexOf(this.path))
      this.$router.push(this.path)
    }

  }
}
</script>
<style scoped lang="stylus">
@import '~common/stylus/variable';
#navigationItem
  .isActive
    color $color-theme
    height 35px
    border-bottom 2px solid $color-theme
</style>
