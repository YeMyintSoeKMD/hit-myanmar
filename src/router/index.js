import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CourseDetail from '../views/CourseDetail.vue'
import Courses from '../views/Courses.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Payment from '../views/Payment.vue'
import CourseStream from '@/views/CourseStream.vue'
import Profile from '@/views/Profile.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/coursestream',
      name: 'coursestream',
      component: CourseStream
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router
