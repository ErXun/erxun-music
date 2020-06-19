<template>
  <!-- <div id="cmnTabBar" ref="cmnTabBarRef" v-if="Object.keys(tabName).length !== 0"> -->
  <div id="cmnTabBar" ref="cmnTabBarRef" @click="clickEvent">
    <div
      v-for="(item,index) in tabName"
      :key="index"
      :class="{'active': currentIndex === index}"
      @click="clickTab(index,item.path)"
    >{{item.name}}</div>

    <!-- 原生JS -->
    <!-- <div class="active" path="/recommend">推荐</div>
    <div path="/singer">歌手</div>
    <div path="/rank">排行</div>
    <div path="/search">搜索</div> -->
  </div>
</template>

<script>
export default {
  name: 'cmnTabBar',
  props: {
    tabName: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  mounted () {
    // this.clickEvent()
  },
  methods: {
    clickTab (index, path) {
      this.currentIndex = index
      this.$router.push(path)
    },
    // 原生JS
    clickEvent () {
      // var parentEle = document.querySelector('#cmnTabBar')
      let parentEle = this.$refs.cmnTabBarRef
      let childArr = parentEle.children
      for (let i = 0; i < childArr.length; i++) {
        childArr[i].addEventListener('click', () => {
          // this.$router.push(childArr[i].getAttribute('path'))
          for (let item of childArr) {
            item.removeAttribute('class')
          }
          childArr[i].setAttribute('class', 'active')
        })
      }
    }
  }
}
</script>
<style scoped lang="stylus">
@import '~common/stylus/variable';

#cmnTabBar {
  display: flex;
  justify-content: space-around;
  height: 44px;
  line-height: 44px;
  color: $color-text-d;

  .active {
    color: $color-theme;
    border-bottom: 2px solid $color-theme;
  }
}
</style>
