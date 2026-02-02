import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Resume from "@/views/Resume.vue";
import Contact from "@/views/Contact.vue";
import Projects from "@/views/Projects.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
})

export default router
