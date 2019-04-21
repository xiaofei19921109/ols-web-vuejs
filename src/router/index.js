import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import CampList from '@/components/Camps';
import CampCreate from '@/components/Camps/CampCreate';
import CampDetail from '@/components/Camps/CampDetail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/camps',
      children: [
        {
          path: '',
          component: CampList
        },
      ]
    },
    {
      path: '/camps/create',
      name: 'CampCreate',
      component: CampCreate
    },
    {
      path: '/camps/:id',
      name: 'CampDetail',
      component: CampDetail
    },
  ]
})
