import { createRouter, createWebHistory } from 'vue-router'
import C0010 from './components/pages/0010.vue'
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
import campaignsList from './components/pages/cms/campaigns/list.vue'
import campaignsForm from './components/pages/cms/campaigns/form.vue'
import prsList from './components/pages/cms/prs/list.vue'
import prsForm from './components/pages/cms/prs/form.vue'
import constructionsList from './components/pages/cms/constructions/list.vue'
import constructionsForm from './components/pages/cms/constructions/form.vue'
import qasList from './components/pages/cms/qas/list.vue'
import qasForm from './components/pages/cms/qas/form.vue'
import pref_textsList from './components/pages/cms/pref_texts/list.vue'
import pref_textsForm from './components/pages/cms/pref_texts/form.vue'
import regionsList from './components/pages/cms/regions/list.vue'
import regionsForm from './components/pages/cms/regions/form.vue'
import prAreasForm from './components/pages/pr_areas/form.vue'
import chatsList from './components/pages/chats/list.vue'
import chatsForm from './components/pages/chats/form.vue'


const routes = [
  { path: '/', name: '0010', meta: { layout: 'none'}, component: C0010},
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
  { path: '/campaigns/list', name: 'campaigns_list', component: campaignsList},
  { path: '/campaigns/form', name: 'campaigns_form', component: campaignsForm },
  { path: '/prs/list', name: 'prs_list', component: prsList},
  { path: '/prs/form', name: 'prs_form', component: prsForm},
  { path: '/constructions/list', name: 'constructions_list', component: constructionsList},
  { path: '/constructions/form', name: 'constructions_form', component: constructionsForm},
  { path: '/qas/list', name: 'qas_list', component: qasList},
  { path: '/qas/form', name: 'qas_form', component: qasForm},
  { path: '/pref_texts/list', name: 'pref_texts_list', component: pref_textsList},
  { path: '/pref_texts/form', name: 'pref_texts_form', component: pref_textsForm},
  { path: '/regions/list', name: 'regions_list', component: regionsList},
  { path: '/regions/form', name: 'regions_form', component: regionsForm},
  { path: '/pr_areas/form', name: 'pr_areas_form', component: prAreasForm},
  { path: '/chats/list', name: 'chats_list', component: chatsList},
  { path: '/chats/form', name: 'chats_form', component: chatsForm},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router