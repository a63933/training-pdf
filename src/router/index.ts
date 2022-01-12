import {createRouter, createWebHashHistory} from 'vue-router'
import Welcome from '@/components/welcome.vue'
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: Welcome },
  { path: '/about', component: About },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;