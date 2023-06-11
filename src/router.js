import { createRouter, createWebHistory } from 'vue-router'
import C0020 from './components/pages/0020.vue'
import C0021 from './components/pages/0021.vue'
import B0040 from './components/pages/0040.vue'
import B0041 from './components/pages/0041.vue'
import B0042 from './components/pages/0042.vue'
import materialsBuy from './components/pages/materials/buy.vue'
import materialsList from './components/pages/materials/list.vue'
import materialsForm from './components/pages/materials/form.vue'
import suppliersList from './components/pages/suppliers/list.vue'
import suppliersForm from './components/pages/suppliers/form.vue'
import newsList from './components/pages/cms/news/list.vue'
import newsForm from './components/pages/cms/news/form.vue'


const routes = [
  { path: '/0020', name: '0020', component: C0020 },
  { path: '/0021', name: '0021', component: C0021 },
  { path: '/0040', name: '0040', component: B0040 },
  { path: '/0041', name: '0041', component: B0041 },
  { path: '/0042', name: '0042', component: B0042 },
  { path: '/materials/buy', name: 'materials_buy', component: materialsBuy },
  { path: '/materials/list', name: 'materials_list', component: materialsList },
  { path: '/materials/form', name: 'materials_form', component: materialsForm },
  { path: '/suppliers/list', name: 'suppliers_list', component: suppliersList },
  { path: '/suppliers/form', name: 'suppliers_form', component: suppliersForm },
  { path: '/news/list', name: 'news_list', component: newsList },
  { path: '/news/form', name: 'news_form', component: newsForm },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router