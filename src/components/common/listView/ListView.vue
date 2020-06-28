/* eslint-disable camelcase */
<template>
  <scroll
    id="listView"
    v-if="dataList.length"
    ref="scrollRef"
    :listenScroll="listenScroll"
    :probeType="probeType"
    @scroll="scroll"
  >
    <ul>
      <li v-for="(e,index) in dataList" :key="index" ref="listRef">
        <h4 class="title">{{e.title}}</h4>
        <ul>
          <li v-for="(item,index) in e.items" :key="index" class="descInfo">
            <div class="imgStyle">
              <img :src="item.imgSrc" alt />
            </div>
            <div>{{item.name}}</div>
          </li>
        </ul>
      </li>
    </ul>
    <div class="rightList" @touchstart="touchStartEvent" @touchmove.stop.prevent="touchMoveEvent">
      <ul>
        <li
          v-for="(item,index) in rightList"
          :key="index"
          :data-index="index"
          :class="{'active': currentIndex === index}"
        >{{item}}</li>
      </ul>
    </div>
    <div class="fixTitle" v-if="fixedTitle">
      <h4 class="title">{{fixedTitle}}</h4>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import { setElementProp } from 'common/js/dom'

const ANCHOR_HEIGHT = 18
export default {
  name: 'listView',
  components: {
    Scroll
  },
  props: {
    dataList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0,
      listenScroll: true,
      probeType: 3,
      scrollY: -1,
      listHeight: []
    }
  },
  computed: {
    rightList () {
      return this.dataList.map(ele => {
        return ele.title.substring(0, 1)
      })
    },
    fixedTitle () {
      if (this.scrollY > 0) {
        return 0
      }
      return this.dataList[this.currentIndex] ? this.dataList[this.currentIndex].title : ''
    }
  },
  created () {
    this.touch = {}
  },
  watch: {
    dataList () {
      setTimeout(() => {
        this.calculateHeight()
      }, 200)
    },
    scrollY (newY) {
      const listHeight = this.listHeight
      for (let i = 0; i < listHeight.length; i++) {
        let heightFirst = listHeight[i]
        let heightLast = listHeight[i + 1]
        // 如果处在顶部时，向上滑动
        if (newY > 0) {
          this.currentIndex = 0
          return
        }
        if (!heightLast || (-newY >= heightFirst && -newY < heightLast)) {
          this.currentIndex = i
          return
        }
      }
    }
  },
  methods: {
    touchStartEvent (e) {
      let listIndex = setElementProp(e.target, 'index')
      this.currentIndex = parseInt(listIndex)
      this.touch.y1 = e.touches[0].pageY
      this.touch.listIndex = listIndex
      this.scrollTo(listIndex)
    },
    touchMoveEvent (e) {
      this.touch.y2 = e.touches[0].pageY
      let diff = ((this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT) | 0
      let listIndex = parseInt(this.touch.listIndex) + diff
      this.currentIndex = parseInt(listIndex)
      this.scrollTo(listIndex)
    },
    scrollTo (index) {
      if (index < 0) {
        this.currentIndex = 0
      } else if (index > this.listHeight.length - 2) {
        this.currentIndex = this.listHeight.length - 2
      }
      this.$refs.scrollRef.scrollToElement(this.$refs.listRef[index], 0)
    },
    scroll (pos) {
      this.scrollY = pos.y
    },
    calculateHeight () {
      this.listHeight = []
      const list = this.$refs.listRef
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
  }
}
</script>
<style scoped lang="stylus">
@import '~common/stylus/variable';

#listView {
  position: relative;
  height: 100%;
  width: 100%;
  color: $color-text-l;
  font-size: $font-size-medium;
  overflow: hidden;

  .title {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #333;
    padding: 5px 20px;
  }

  .descInfo {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 10px 25px;

    .imgStyle {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 25px;
      }
    }
  }

  .rightList {
    position: absolute;
    z-index: 30;
    right: 2px;
    top: 50%;
    transform: translateY(-50%);
    background-color: $color-background-d;
    padding: 20px 0;
    border-radius: 8px;

    li {
      padding: 5px;
      font-size: $font-size-small;
      text-align: center;
      font-family: Helvetica;

      &.active {
        color: $color-theme;
      }
    }
  }
  .fixTitle {
    position absolute
    top 0%
    left 0
    right 0
  }
}
</style>
