import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import Experience from '../views/Experience.vue'
import Contact from '../views/Contact.vue'
import Legal from '../views/Legal.vue'
import Privacy from '../views/Privacy.vue'
import But180Secondes from '../views/But180Secondes.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/but-en-180-secondes',
    name: 'ButEn180Secondes',
    component: But180Secondes
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router