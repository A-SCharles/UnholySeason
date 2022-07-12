import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/animes',
    name: 'animes',
    component: () => import('../views/animes.vue')
  },
  {
    path: '/animes/:id',
    name: 'anime',
    component: () => import('../views/animeDetail.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
