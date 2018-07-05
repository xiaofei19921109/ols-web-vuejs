import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: SignIn
<<<<<<< HEAD
=======
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/panel',
      name: 'Panel',
      component: Panel,
      children: [
        {
          path: 'training-camps-list',
          name: 'TrainingCampsList',
          component: TrainingCampsList
        }
      ],
>>>>>>> 04a4e50... Sign up page layout
    }
  ]
})
