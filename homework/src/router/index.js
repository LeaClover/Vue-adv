import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import BlogDetails from '../pages/BlogDetails.vue'
import BlogPage from '../pages/BlogPage.vue'
import ProjectDetails from '../pages/ProjectDetails.vue'
import ProjectPage from '../pages/ProjectPage.vue'
import PageError from '../pages/PageError.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: BlogDetails
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogPage
  },
  {
    path: '/project-details',
    name: 'project-details',
    component: ProjectDetails
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectPage
  },
  {
    path: '*',
    component: PageError
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
