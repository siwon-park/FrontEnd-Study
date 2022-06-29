import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EventBusGlobal from '@/views/EventBusGlobal.vue'
import EventBusPropsEmit from '@/views/EventBusPropsEmit.vue'
import VuexData from '@/views/VuexData.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/eventbus-props-emit',
    name: 'eventbus-props-emit',
    component: EventBusPropsEmit
  },
  {
    path: '/eventbus-global',
    name: 'eventbus-global',
    component: EventBusGlobal
  },
  {
    path: '/vuex-data',
    name: 'vuex-data',
    component: VuexData
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
