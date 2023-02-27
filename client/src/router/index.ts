import { createRouter, createWebHistory } from 'vue-router'
import InvoiceDetailsView from '../views/InvoiceDetailsView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'invoices',
          component: () => import('../views/InvoicesView.vue')
        },
        {
          path: 'invoice/:id',
          name: 'invoice.details',
          component: () => import('@/views/InvoiceDetailsView.vue')
        }
      ]
    }
  ]
})

export default router
