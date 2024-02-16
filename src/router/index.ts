import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageList from '../views/PageList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    alias : '/about-us',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/pageList',
    name : 'pageList',
    component : PageList
  },
  {
    path:'/allListPage',
    name:'allListPage',
    component:() => import('../views/ToDoList/AllListPgae.vue')
  },
  {
    path:'/loginPage',
    name:'loginPage',
    component:() => import('../views/LoginPage.vue')
  },
  {
    path: '/homePage',
    name: 'homePage',
    component:() => import('../views/HomePage.vue'),
    beforeEnter (to, from,next )  {      
      if(localStorage.getItem('VueAuth') === "true"){
        next()
      }else{
        next('/loginPage')
      }
    },
  },
{
  path: '/:pathMatch(.*)*',
  component: HomeView
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
