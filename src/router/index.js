import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: '/InfoPage',
        name: 'InfoPage',
        component: () => import('@/views/InfoPage.vue')
      },
      {
       path: '/GetProfessionPage',
       name: 'GetProfessionPage',
       component: () => import('@/views/GetProfessionPage.vue') 
      },
      {
        path: '/TargetProgramPage',
        name: 'TargetProgramPage',
        component: () => import('@/views/TargetProgramsPage.vue')
      },
      {
        path: '/CooperativeAreaPage',
        name: 'CooperativeAreaPage',
        component: () => import ('@/views/CooperativePlotsPage.vue')
      },
      {
        path: '/OfferProjectPage',
        name: 'OfferProjectPage',
        component: () => import('@/views/ProposeProjectPage.vue')
      },
      {
        path: '/ContactsPage',
        name: 'ContactsPage',
        component: () => import('@/views/ContactPage.vue')
      }
  ]
})

export default router
