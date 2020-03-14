import Vue from 'vue';
import VueRouter from 'vue-router';
import Training from '@/views/Training.vue';
import Statistics from '@/views/Statistics.vue';
import Record from '@/views/Record.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect:'/training'
  },
  {
    path: '/training',
    component: Training
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/record',
    component: Record
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router
