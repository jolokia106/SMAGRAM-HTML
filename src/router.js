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
import othersList from './components/pages/cms/others/list.vue'
import othersForm from './components/pages/cms/others/form.vue'
import constructionsList from './components/pages/cms/constructions/list.vue'
import constructionsForm from './components/pages/cms/constructions/form.vue'
import qasList from './components/pages/cms/qas/list.vue'
import qasForm from './components/pages/cms/qas/form.vue'
import pref_textsList from './components/pages/cms/pref_texts/list.vue'
import pref_textsForm from './components/pages/cms/pref_texts/form.vue'
import regionsList from './components/pages/cms/regions/list.vue'
import regionsForm from './components/pages/cms/regions/form.vue'
import bpNewsList from './components/pages/bp_news/list.vue'
import bpNewsForm from './components/pages/bp_news/form.vue'
import prAreasForm from './components/pages/pr_areas/form.vue'
import chatsList from './components/pages/chats/list.vue'
import chatsForm from './components/pages/chats/form.vue'
import reportsForm from './components/pages/reports/form.vue'
import expensesForm from './components/pages/expenses/form.vue'
import expensesList from './components/pages/expenses/list.vue'
import bpExpensesForm from './components/pages/bp_expenses/form.vue'
import bpExpensesList from './components/pages/bp_expenses/list.vue'
import funnelsForm from './components/pages/funnels/form.vue'
import serviceAddressForm from './components/pages/service_address/form.vue'
import serviceAddressList from './components/pages/service_address/list.vue'
import categoriesForm from './components/pages/categories/form.vue'
import categoriesList from './components/pages/categories/list.vue'
import mstCampaignsList from './components/pages/mst_campaigns/list.vue'
import mstCampaignsForm from './components/pages/mst_campaigns/form.vue'
import servicePricesForm from './components/pages/service_prices/form.vue'
import biList from './components/pages/bi/list.vue'


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
  { path: '/others/list', name: 'others_list', component: othersList},
  { path: '/others/form', name: 'others_form', component: othersForm},
  { path: '/constructions/list', name: 'constructions_list', component: constructionsList},
  { path: '/constructions/form', name: 'constructions_form', component: constructionsForm},
  { path: '/qas/list', name: 'qas_list', component: qasList},
  { path: '/qas/form', name: 'qas_form', component: qasForm},
  { path: '/pref_texts/list', name: 'pref_texts_list', component: pref_textsList},
  { path: '/pref_texts/form', name: 'pref_texts_form', component: pref_textsForm},
  { path: '/regions/list', name: 'regions_list', component: regionsList},
  { path: '/regions/form', name: 'regions_form', component: regionsForm},
  { path: '/bp_news/list', name: 'bp_news_list', component: bpNewsList },
  { path: '/bp_news/form', name: 'bp_news_form', component: bpNewsForm },
  { path: '/pr_areas/form', name: 'pr_areas_form', component: prAreasForm},
  { path: '/chats/list', name: 'chats_list', component: chatsList},
  { path: '/chats/form', name: 'chats_form', component: chatsForm},
  { path: '/reports/form', name: 'reports_form', component: reportsForm},
  { path: '/expenses/list', name: 'expenses_list', component: expensesList},
  { path: '/expenses/form', name: 'expenses_form', component: expensesForm},
  { path: '/bp_expenses/list', name: 'bp_expenses_list', component: bpExpensesList},
  { path: '/bp_expenses/form', name: 'bp_expenses_form', component: bpExpensesForm},
  { path: '/funnels', name: 'funnels_form', component: funnelsForm},
  { path: '/service_address/list', name: 'service_address_list', component: serviceAddressList},
  { path: '/service_address/form', name: 'service_address_form', component: serviceAddressForm},
  { path: '/categories/list', name: 'categories_list', component: categoriesList},
  { path: '/categories/form', name: 'categories_form', component: categoriesForm},
  { path: '/mst_campaigns/list', name: 'mst_campaigns_list', component: mstCampaignsList},
  { path: '/mst_campaigns/form', name: 'mst_campaigns_form', component: mstCampaignsForm },
  { path: '/service_prices', name: 'service_prices_form', component: servicePricesForm },
  { path: '/bi', name: 'bi_list', component: biList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router