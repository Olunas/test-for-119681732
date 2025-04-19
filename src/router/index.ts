import { createRouter, createWebHistory } from 'vue-router'
import form1 from '../views/form1.vue'
import form2 from '../views/form2.vue'
import form3 from '../views/form3.vue'
import form4 from '../views/form4.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form1',
      component: form1,
    },
    {
      path: '/form2',
      name: 'form2',
      component: form2,
    },
    {
      path: '/form3',
      name: 'form3',
      component: form3,
    },
    {
      path: '/form4',
      name: 'form4',
      component: form4,
    },
  ],
})

export default router
