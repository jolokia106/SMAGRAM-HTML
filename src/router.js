import { createRouter, createWebHistory } from 'vue-router'
import C0020 from './components/pages/0020.vue'
import C0021 from './components/pages/0021.vue'

const routes = [
  { path: '/0020', name: '0020', component: C0020 },
  { path: '/0021', name: '0021', component: C0021 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router