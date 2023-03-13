import { createRouter, createWebHistory } from 'vue-router'
import InvoiceDetails from '../views/InvoiceDetails.vue'
import Home from '../views/Home.vue'

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
      component: Home,
      children: [
        {
          path: '',
          name: 'invoices',
          component: () => import('@/views/InvoicesList.vue')
        },
        {
          path: 'invoice/:id',
          name: 'invoice.details',
          component: () => import('@/views/InvoiceDetails.vue')
        }
      ]
    }
  ]
})

export default router
