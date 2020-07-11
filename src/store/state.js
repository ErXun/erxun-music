import { playMode } from 'common/js/config'
const state = {
  singer: {},
  playing: false, // 播放状态
  fullScreen: false, // 播放页面最小化，只保留底部
  playList: [], // 播放歌单
  sequenceList: [], // 序列歌单(循环，随机，只读)
  mode: playMode.sequence, // 播放模式,
  currentIndex: -1 // 当前播放歌曲索引
}
export default state
