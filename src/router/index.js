import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, AboutView, KatalogView, KontaktlarView, MyacountView, KafolatView, XarajatlarView, MaxfiylikSiyosatiView, FaqView, UlgurchiView, OmmaviyTaklifView, SaytXaritasiView, LikeView } from '../views/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/katalog',
      name: 'katalog',
      component: KatalogView
    },
    {
      path: '/kontaktlar',
      name: 'kontaktlar',
      component: KontaktlarView
    },
    {
      path: '/my-account',
      name: 'myacount',
      component: MyacountView
    },
    {
      path: '/Kafolat-va-qaytarish',
      name: 'kafolat',
      component: KafolatView
    },
    {
      path: '/xarajatlar-va-yetkazip-berish-shartlari',
      name: 'xarajatlar',
      component: XarajatlarView
    },
    {
      path: '/Maxfiylik-siyosati',
      name: 'maxfiylik',
      component: MaxfiylikSiyosatiView
    },
    {
      path: '/Faq',
      name: 'faq',
      component: FaqView
    },
    {
      path: '/Ulgurchi',
      name: 'ulgurchi',
      component: UlgurchiView
    },
    {
      path: '/Ommaviy-taklif',
      name: 'ommaviy-taklif',
      component: OmmaviyTaklifView
    },
    {
      path: '/Sayt-xaritasi',
      name: 'sayt-xaritasi',
      component: SaytXaritasiView
    },
    {
      path: '/Sevimlilar',
      name: 'sevimlilar',
      component: LikeView
    }
  ]
})

export default router
