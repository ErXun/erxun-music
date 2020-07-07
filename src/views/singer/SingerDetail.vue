<template>
  <div id="detailPage">
    <music-list :title="title" :imgSrc="imgSrc" :songs="songs"></music-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ERR_OK } from 'api/config'
import { getSingerInfo } from 'api/singer'
// import { createSong, processSongsUrl, isValidMusic } from 'common/js/song.js'
import { createSong, processSongsUrl } from 'common/js/song.js'

import MusicList from 'components/content/musicList/MusicList'
export default {
  name: 'singerDetail',
  data () {
    return {
      songs: [],
      title: '',
      imgSrc: ''
    }
  },
  components: {
    MusicList
  },
  computed: {
    ...mapGetters(['singer'])
  },
  created () {
    this.title = this.singer.name
    this.imgSrc = this.singer.imgSrc
    this._getSingerInfo()
  },
  methods: {
    _getSingerInfo () {
      if (!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerInfo(this.singer.id).then(res => {
        if (res.code === ERR_OK) {
          processSongsUrl(this._normalizeSong(res.data.list)).then(songs => {
            this.songs = songs
            console.log(this.songs)
          })
        }
      })
    },
    _normalizeSong (list) {
      let ret = []
      list.forEach(item => {
        let { musicData } = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  }
}
</script>
<style scoped lang="stylus">
@import '~common/stylus/variable';

// #detailPage {
//   position: fixed;
//   background-color: $color-background;
//   z-index: 99;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
// }
</style>
