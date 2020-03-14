import Vue from 'vue';
import VueRouter from 'vue-router';
import Training from '@/views/Training/Training.vue';
import Statistics from '@/views/Statistics/Statistics.vue';
import Record from '@/views/Record/Record.vue';
import NotFound from '@/views/NotFound.vue';
import AddPractice from '@/views/Training/AddPractice.vue';
import DoTraining from '@/views/Training/DoTraining.vue';
import AddAction from '@/views/Training/AddAction.vue';
import Information from '@/views/Statistics/Information.vue';
import TableShow from '@/views/Statistics/TableShow.vue';
import UpdateRecord from '@/views/Record/UpdateRecord.vue';

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
    path: '/addpractice',
    component: AddPractice
  },
  {
    path:'/dotraining',
    component: DoTraining
  },
  {
    path: '/addaction',
    component: AddAction
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/information',
    component: Information
  },
  {
    path: '/tableshow',
    component: TableShow
  },
  {
    path: '/record',
    component: Record
  },
  {
    path: '/updaterecord',
    component: UpdateRecord
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
