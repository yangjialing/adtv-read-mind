import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/mind',
    name: 'Mind',
    component: () => import('../views/Mind.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('../views/Demo.vue')
  },
  {
    path: '/behavior',
    name: 'Behavior',
    component: () => import('../views/Behavior.vue')
  },
  {
    path: '/draggableList',
    name: 'DraggableList',
    component: () => import('../views/DraggableList.vue')
  },
  {
    path: '/antvhtml',
    name: 'AntvHtml',
    component: () => import('../views/AntvHtml.vue')
  },
  {
    path: '/treedemo',
    name: 'TreeDemo',
    component: () => import('../views/TreeDemo.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
