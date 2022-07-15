import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BoxOfficeByDay from '../views/BoxOfficeByDay.vue'
import BoxOfficeByWeek from '../views/BoxOfficeByWeek.vue'
import BoxOffice from '../views/BoxOffice';

const routes = [
  {
    path: '/',
    name: 'name',
    component: Home
  },
  {
    path: '/boxOfficeByDay',
    name: 'boxOfficeByDay',
    // route level code-splitting
    component: BoxOffice
  },
  {
    path: '/boxOfficeByWeek',
    name: 'boxOfficeByWeek',
    // route level code-splitting
    component: BoxOffice
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
