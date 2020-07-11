<template>
  <div class="musicList">
    <song-header class="songTitle">
      <div slot="left" @click="goBack">
        <img :src="back" alt style="vertical-align: middle;" />
      </div>
      <div slot="middle">
        <span>{{title}}</span>
      </div>
    </song-header>
    <div class="bg" :style="bgImage">
      <div class="filter"></div>
      <div class="play" @click="playSong">
        <img :src="playImg" alt />
        <span>随机播放全部</span>
      </div>
    </div>
    <div class="recommend">
      <scroll class="recommend_content" ref="scrollRef" v-if="songs.length !==0">
        <ul class="sonfList">
          <li v-for="(item,index) in songs" :key="index" @click="selectItem(item,index)">
            <h3>{{item.name}}</h3>
            <p class="desc">{{item.singer}}-{{item.album}}</p>
          </li>
        </ul>
      </scroll>
      <div v-show="!songs.length" class="loading_container">
        <loading></loading>
      </div>
    </div>
  </div>
</template>

<script>
import back from 'common/image/back.png'
import playImg from 'common/image/play.png'
import { mapActions } from 'vuex'

import SongHeader from 'components/common/header/Header'
import Scroll from 'components/common/scroll/Scroll'
import Loading from 'components/common/loading/Loading'
export default {
  name: 'musicList',
  props: {
    title: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    },
    songs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    SongHeader,
    Scroll,
    Loading
  },
  computed: {
    bgImage () {
      return `
        background-image:url(${this.imgSrc});
        background-size: cover;
        background-repeat: no-repeat;
      `
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.$refs.scrollRef) {
        this.$refs.scrollRef.refresh()
      }
    })
    // this.test()
  },
  data () {
    return {
      back,
      playImg
    }
  },
  methods: {
    ...mapActions([
      'selectPlay'
    ]),
    goBack () {
      // this.$router.go(-1)
      this.$router.back()
    },
    playSong () {},
    selectItem (item, index) {
      // console.log(item, index)
      this.selectPlay({
        list: this.songs,
        index
      })
    }
    // test () {
    //   if (this.$refs.scrollRef) {
    //     setTimeout(() => {
    //       this.$refs.scrollRef.refresh()
    //       console.log('refresh')
    //     }, 1000)
    //   }
    // }
  }
}
</script>
<style scoped lang="stylus">
@import '~common/stylus/variable';

.musicList {
  position: fixed;
  background-color: $color-background;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: $color-text;

  .songTitle {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: $font-size-large;

    img {
      width: 25px;
      height: 25px;
    }
  }

  .bg {
    position: relative;
    width: 100%;
    height: 290px;

    .filter {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(7, 17, 27, 0.4);
    }

    .play {
      position: absolute;
      bottom: 5%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      color: #ffcd32;
      height: 30px;
      height: 30px;
      border: 1px solid #ffcd32;
      line-height: 30px;
      border-radius: 40px;
      padding: 2px 15px;
      font-size: 12px;

      img {
        width: 25px;
        height: 25px;
        vertical-align: middle;
      }
    }
  }

  .recommend {
    position: fixed;
    width: 100%;
    top: 290px;
    bottom: 0;

    .recommend_content {
      height: 100%;
      overflow: hidden;

      .sonfList {
        padding: 30px 25px;

        li {
          padding: 15px 0;
          font-size: $font-size-medium;

          .desc {
            color: hsla(0, 0%, 100%, 0.3);
            margin-top: 10px;
          }
        }
      }
    }

    .loading_container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
