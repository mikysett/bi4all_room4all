import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/', name: 'home', component: HomeView
  },
  {
    path: '/add-meeting', name: 'add-meeting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AddMeeting" */ '../components/AddMeeting')
  },
  {
    path: '/add-room', name: 'add-room',
    component: () => import(/* webpackChunkName: "AddRoom" */ '../components/AddRoom')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
