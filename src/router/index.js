import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CourseDetail from '../views/CourseDetail.vue'
import Courses from '../views/Courses.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Payment from '../views/Payment.vue'
import CourseStream from '@/views/CourseStream.vue'
import Profile from '@/views/Profile.vue'
import Roadmap from '@/views/Roadmap.vue'
import ProfileCourses from '@/views/ProfileCourses.vue'
import ProfileCertificates from '@/views/ProfileCertificates.vue'
import ProfileEdit from '@/views/ProfileEdit.vue'
import ProfileMessages from '@/views/ProfileMessages.vue'
import Blogs from '@/views/Blogs.vue'
import BlogDetail from '@/views/BlogDetail.vue'
import ProfileNotifications from '@/views/ProfileNotifications.vue'
import Gallery from '@/views/Gallery.vue'
import StudentPortfolio from '@/views/StudentPortfolio.vue'
import Books from '@/views/Books.vue'
import Quiz from '@/views/Quiz.vue'

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
      name: 'courseDetail',
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
      component: Profile,
      redirect: { name: 'profileCourses' },
      children: [
        {
          path: 'courses',
          name: 'profileCourses',
          component: ProfileCourses
        },
        {
          path: 'certificates',
          name: 'profileCertificates',
          component: ProfileCertificates
        },
        {
          path: 'edit',
          name: 'profileEdit',
          component: ProfileEdit
        },
        {
          path: 'messages',
          name: 'profileMessages',
          component: ProfileMessages
        },
        {
          path: 'messages',
          name: 'profileNotifications',
          component: ProfileNotifications
        }
      ]
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: Roadmap
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
    {
      path: '/blogdetail',
      name: 'blogDetail',
      component: BlogDetail
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/studentportfolio',
      name: 'studentPortfolio',
      component: StudentPortfolio
    },
    {
      path: '/books',
      name: 'books',
      component: Books
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    }
  ]
})

export default router
