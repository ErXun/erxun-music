<template>
  <div id="player" v-if="playList.length > 0">
    <div class="normal" v-show="fullScreen">
      <div class="bg">
        <img :src="currentSong.image" alt="" width="100%" height="100%">
      </div>
      <div class="top">
          <img :src="back" alt  @click="backMini"/>
          <h3>{{currentSong.name}}</h3>
          <p class="singer">{{currentSong.singer}}</p>
      </div>
      <div class="middle">
        <div class="middle_left">
          <div class="wrapper">
            <div class="sing_bg">
              <img :src="currentSong.image" alt="">
            </div>
          </div>
          <div class="lyrics"></div>
        </div>
        <div class="middle_right">

        </div>
      </div>
      <div class="bottom">
        <div></div>
        <ul class="action">
          <li>
           <span class="iconfont icon-xunhuan"></span>
          </li>
          <li>
           <span class="iconfont icon-shangyishou"></span>
          </li>
          <li>
           <span class="iconfont icon-zanting"></span>
          </li>
          <li>
           <span class="iconfont icon-xiayishou"></span>
          </li>
          <li>
           <span class="iconfont icon-shoucang"></span>
          </li>
        </ul>
      </div>
     </div>
    <div class="mini" v-show="!fullScreen" @click="open">
      <div class="mini_desc">
        <img :src="currentSong.image" alt="">
        <div class="desc_info">
          <p>{{currentSong.name}}</p>
          <span>{{currentSong.singer}}</span>
        </div>
      </div>
      <div class="mini_action">
        <span class="iconfont icon-zanting"></span>
         <span class="iconfont icon-shoucang"></span>
      </div>
    </div>
  </div>
</template>

<script>
import back from 'common/image/back.png'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'player',
  computed: {
    ...mapGetters(['fullScreen', 'playList', 'currentSong'])
  },
  data () {
    return {
      back
    }
  },
  watch: {
    // currentSong () {
    //   console.log(this.currentSong)
    // }
  },
  methods: {
    ...mapMutations({
      setFullScreen: 'SET_FULL_SCREEN'
    }),
    backMini () {
      this.setFullScreen(false)
    },
    open () {
      this.setFullScreen(true)
    }
  }
}
</script>
<style scoped lang="stylus">
@import '~common/stylus/variable';

#player
  color: $color-text
  z-index: 105
  .normal
    position: fixed;
    top: 0
    left: 0
    right: 0;
    bottom: 0
    background-color: $color-background;
    .bg
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      z-index -1
      opacity  .6
      filter: blur(20px)
    .top
      margin-bottom 25px
      img
        position absolute
        top 7px
        left 15px
        width: 25px
        height: 25px
        transform: rotate(0.75turn)
      h3
        font-size: 18px
        text-align: center
        padding: 12px 0 18px 0
      .singer
        text-align center
        font-size 14px
    .middle
      position fixed
      top 87px
      bottom 170px
      width 100%
      white-space nowrap
      .middle_left
        position relative
        display inline-block
        width 100%
        height 0
        padding-top: 80%;
        .wrapper
          position absolute
          left 8%
          top 0
          box-sizing: border-box;
          height: 100%
          width 80%
          .sing_bg
            img
              margin 0 auto
              width 100%
              height 100%
              border 10px solid #4a4c43
              border-radius 50%
      .middle_right
        display inline-block
        overflow hidden
    .bottom
      position: absolute;
      bottom: 50px;
      width: 100%;
      .action
        display flex
        justify-content space-around
        padding 0 35px

  .mini
    position: fixed
    left: 0
    right: 0
    bottom: 0
    height: 60px
    background-color #333
    .mini_desc
      position absolute
      left 10px
      top 10px
      img
        width 40px
        height 40px
        border-radius 50%
        vertical-align: top;
      .desc_info
        display inline-block
        margin-left 5px
        p
          font-size:14px
          margin-bottom 7px
        span
          font-size:12px;
          color: hsla(0,0%,100%,.3);

    .mini_action
      position absolute
      right 15px
      top 10px

</style>
