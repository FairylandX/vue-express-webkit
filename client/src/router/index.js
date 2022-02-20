import {createRouter, createWebHashHistory} from 'vue-router' // 带#号
// import {createRouter, createWebHistory} from 'vue-router' // 不带#号
import HomeView from '../views/HomeView.vue'
import MyTest from '../views/MyTest.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/mytest',
    name: 'MyTest',
    component: MyTest
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 带#号 HASH 模式
  // history: createWebHistory(), // 不带#号
  routes
})

export default router
