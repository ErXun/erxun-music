<template>
  <div id="singer">
    <list-view :dataList="singerList"/>
  </div>
</template>

<script>
import ListView from 'components/common/listView/ListView'
import Scroll from 'components/common/scroll/Scroll'

import { getSingerList } from 'api/singer'
import { ERR_OK } from 'api/config'
import Singer from 'common/js/singer'

const HOT_NAME = '热门'
const SINGER_LENGTH = 10
export default {
  name: 'singer',
  components: {
    ListView,
    Scroll
  },
  data () {
    return {
      singerList: []
    }
  },
  created () {
    this._getSingerList()
  },
  mounted () {},
  methods: {
    _getSingerList () {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singerList = this.normalizeData(res.data.list)
        }
      })
    },
    normalizeData (value) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      value.forEach((ele, index) => {
        if (index < SINGER_LENGTH) {
          map.hot.items.push(
            new Singer(ele.Fsinger_id, ele.Fsinger_name, ele.Fsinger_mid)
          )
        }
        const key = ele.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(
          new Singer(ele.Fsinger_id, ele.Fsinger_name, ele.Fsinger_mid)
        )
      })
      // 为了得到有序列表，我们需要处理 map
      let hot = []
      let ret = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    }
  }
}
</script>
<style scoped lang="stylus">
@import '~common/stylus/variable';
#singer
  position fixed
  top 88px
  width 100%
  bottom 0
</style>
