import {createRouter, createWebHashHistory} from 'vue-router'
import Welcome from '@/components/welcome.vue'

const routes = [
  { path: '/', component: Welcome },
  {
    path: '/one-one-one',
    component: () => import('@/components/01-01-01/index.vue')
  },
  {
    path: '/one-one-two',
    component: () => import('@/components/01-01-02/index.vue')
  },
  {
    path: '/one-two-one',
    component: () => import('@/components/01-02-01/index.vue')
  },
  {
    path: '/one-two-two',
    component: () => import('@/components/01-02-02/index.vue')
  },
  {
    path: '/one-two-three',
    component: () => import('@/components/01-02-03/index.vue')
  },
  {
    path: '/one-two-four',
    component: () => import('@/components/01-02-04/index.vue')
  },
  {
    path: '/two-one-one',
    component: () => import('@/components/02-01-01/index.vue')
  },
  {
    path: '/two-one-two',
    component: () => import('@/components/02-01-02/index.vue')
  },
  {
    path: '/two-one-three',
    component: () => import('@/components/02-01-03/index.vue')
  },
  {
    path: '/two-two-one',
    component: () => import('@/components/02-02-01/index.vue')
  },
  {
    path: '/two-two-two',
    component: () => import('@/components/02-02-02/index.vue')
  },
  {
    path: '/two-two-four',
    component: () => import('@/components/02-02-04/index.vue')
  },
  {
    path: '/three-one-note',
    component: () => import('@/components/03-01-note/index.vue')
  }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;