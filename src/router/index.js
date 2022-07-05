import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Psychological from '../views/Psychological.vue'
import Theoretical from '../views/Theoretical.vue'
import TheoreticalTwo from '../views/TheoreticalTwo.vue'
import MoreInfo from '../views/MoreInfo.vue'
import Result from '../views/Result.vue'
import NotFound from '../views/NotFound.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/driving-test-sv',
      redirect: '/'
    },
    {
      path: '/psicologico',
      name: 'Psicologico',
      component: Psychological
    },
    {
      path: '/teorico',
      name: 'Teorico',
      component: Theoretical
    },
    {
      path: '/teorico-2',
      name: 'Teorico-2',
      component: TheoreticalTwo
    },
    {
      path: '/informacion-adicional',
      name: 'InformacionAdicional',
      component: MoreInfo
    },
    {
      path: '/resultado/:testName',
      name: 'Result',
      component: Result,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
