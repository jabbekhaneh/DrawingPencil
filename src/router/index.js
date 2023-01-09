import { createRouter, createWebHistory,createWebHashHistory} from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'LayoutViews',
    component: ()=> import('@/Localization/en/Layout.en.vue'),
    children:[
      {
        path: '',
        name: 'LayoutPages',
        component: HomeView,
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ]
    
  },

  // *************************
  {
    path: '/fa',
    name: 'LayoutFaViews',
    component: ()=> import('@/Localization/fa/Layout.fa.vue'),
    children:[
      {
        path: '',
        name: 'LayoutFaPages',
        component: HomeView,
      }
    ]
  }
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
