import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const Rank = () => import('views/rank/Rank')
const Singer = () => import('views/singer/Singer')
const Recommend = () => import('views/recommend/Recommend')
const Search = () => import('views/search/Search')
const SingerDetail = () => import('views/singer/SingerDetail')

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/search',
    component: Search
  }
]

export default new Router({
  routes,
  mode: 'history'
})
