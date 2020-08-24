import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//路由懒加载
const Recommend = () => import("views/recommend/Recommend")
const Rank = () => import("views/rank/Rank")
const Search = () => import("views/search/Search")
const Singer = () => import("views/singer/Singer")


const routes = [
  {
    path:"",
    redirect:"/recommend"
  },
  {
    path: "/recommend",
    component:Recommend
  },
  {
    path: "/rank",
    component:Rank
  },
  {
    path: "/search",
    component:Search
  },
  {
    path: "/singer",
    component:Singer
  }
]
const router = new Router({
  routes,
  mode:"history"
})
export default router
