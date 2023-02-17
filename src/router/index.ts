import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localcache from '@/utils/cache'
import { fistMenu } from '@/utils/map-menus'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children: [] --> 根据 userMenus 来决定
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  // history: createWebHistory(import.meta.env.BASE_URL)
  history: createWebHistory()
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue')
  //   }
  // ]
})

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localcache.getCache('token')
    if (!token) {
      return '/login'
    }
    // console.log(router.getRoutes())
    // console.log(to)
    if (to.path === '/main') {
      return fistMenu.url
    }
  }
})

export default router
