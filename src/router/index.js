import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Panel from '@/components/Panel'
import TrainingCampsList from '@/components/TrainingCampsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      ]
    }
  ]
})
