import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CourseDetail from '../views/CourseDetail.vue'
import Courses from '../views/Courses.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/coursedetail',
      name: 'coursedetail',
      component: CourseDetail
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    }
  ]
})

export default router
