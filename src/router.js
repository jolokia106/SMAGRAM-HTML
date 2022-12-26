import { createRouter, createWebHistory } from 'vue-router'
import C0020 from './components/pages/0020.vue'

const routes = [
  { path: '/0020', name: '0020', component: C0020 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router