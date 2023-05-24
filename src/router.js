import { createRouter, createWebHistory } from 'vue-router'
import C0020 from './components/pages/0020.vue'
import C0021 from './components/pages/0021.vue'
import B0040 from './components/pages/0040.vue'
import B0041 from './components/pages/0041.vue'
import B0042 from './components/pages/0042.vue'
import E0060 from './components/pages/0060-xd.vue'

const routes = [
  { path: '/0020', name: '0020', component: C0020 },
  { path: '/0021', name: '0021', component: C0021 },
  { path: '/0040', name: '0040', component: B0040 },
  { path: '/0041', name: '0041', component: B0041 },
  { path: '/0042', name: '0042', component: B0042 },
  { path: '/0060', name: '0060', component: E0060 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router