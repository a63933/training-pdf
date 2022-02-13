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
    path: '/three-one-one',
    component: () => import('@/components/03-01-01/index.vue')
  },
  {
    path: '/three-two-one',
    component: () => import('@/components/03-02-01/index.vue')
  },
  {
    path: '/three-two-two',
    component: () => import('@/components/03-02-02/index.vue')
  },
  {
    path: '/three-two-three',
    component: () => import('@/components/03-02-03/index.vue')
  },
  {
    path: '/three-three-one',
    component: () => import('@/components/03-03-01/index.vue')
  },
  {
    path: '/three-three-two',
    component: () => import('@/components/03-03-02/index.vue')
  },
  {
    path: '/three-three-three',
    component: () => import('@/components/03-03-03/index.vue')
  },
  {
    path: '/three-three-four',
    component: () => import('@/components/03-03-04/index.vue')
  },
  {
    path: '/three-four-one',
    component: () => import('@/components/03-04-01/index.vue')
  },
  {
    path: '/three-four-two',
    component: () => import('@/components/03-04-02/index.vue')
  },
  {
    path: '/three-four-three',
    component: () => import('@/components/03-04-03/index.vue')
  },
  {
    path: '/three-five-one',
    component: () => import('@/components/03-05-01/index.vue')
  },
  {
    path: '/three-six-one',
    component: () => import('@/components/03-06-01/index.vue')
  },
  {
    path: '/three-seven-one',
    component: () => import('@/components/03-07-01/index.vue')
  },
  {
    path: '/four-one-one',
    component: () => import('@/components/04-01-01/index.vue')
  },
  {
    path: '/four-one-two',
    component: () => import('@/components/04-01-02/index.vue')
  },
  {
    path: '/four-one-three',
    component: () => import('@/components/04-01-03/index.vue')
  },
  {
    path: '/four-two-one',
    component: () => import('@/components/04-02-01/index.vue')
  },
  {
    path: '/four-two-two',
    component: () => import('@/components/04-02-02/index.vue')
  },
  {
    path: '/four-two-three',
    component: () => import('@/components/04-02-03/index.vue')
  },
  {
    path: '/four-three-one',
    component: () => import('@/components/04-03-01/index.vue')
  },
  {
    path: '/four-three-two',
    component: () => import('@/components/04-03-02/index.vue')
  },
  {
    path: '/four-three-three',
    component: () => import('@/components/04-03-03/index.vue')
  },
  {
    path: '/four-three-four',
    component: () => import('@/components/04-03-04/index.vue')
  },
  {
    path: '/four-three-five',
    component: () => import('@/components/04-03-05/index.vue')
  },
  {
    path: '/four-three-six',
    component: () => import('@/components/04-03-06/index.vue')
  },
  {
    path: '/four-four-one',
    component: () => import('@/components/04-04-01/index.vue')
  },
  {
    path: '/four-four-two',
    component: () => import('@/components/04-04-02/index.vue')
  },
  {
    path: '/four-four-three',
    component: () => import('@/components/04-04-03/index.vue')
  },
  {
    path: '/four-six-one',
    component: () => import('@/components/04-06-01/index.vue')
  },
  {
    path: '/five-one-one',
    component: () => import('@/components/05-01-01/index.vue')
  },
  {
    path: '/six-two-one',
    component: () => import('@/components/06-02-01/index.vue')
  },
  {
    path: '/six-two-two',
    component: () => import('@/components/06-02-02/index.vue')
  },
  {
    path: '/six-two-three',
    component: () => import('@/components/06-02-03/index.vue')
  },
  {
    path: '/six-two-four',
    component: () => import('@/components/06-02-04/index.vue')
  },
  {
    path: '/six-three-one',
    component: () => import('@/components/06-03-01/index.vue')
  },
  {
    path: '/six-three-two',
    component: () => import('@/components/06-03-02/index.vue')
  },
  {
    path: '/six-three-three',
    component: () => import('@/components/06-03-03/index.vue')
  },
  {
    path: '/six-three-four',
    component: () => import('@/components/06-03-02/index.vue')
  },
  {
    path: '/six-three-five',
    component: () => import('@/components/06-03-03/index.vue')
  },
  {
    path: '/seven-one-one',
    component: () => import('@/components/07-01-01/index.vue')
  },
  {
    path: '/seven-three-one',
    component: () => import('@/components/07-03-01/index.vue')
  }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;