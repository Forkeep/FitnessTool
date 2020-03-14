import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Icon from '@/components/Icon.vue';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import TopBar from '@/components/TopBar.vue';

Vue.config.productionTip = false;
Vue.component('Icon',Icon);
Vue.component('Nav',Nav);
Vue.component('Layout',Layout);
Vue.component('TopBar',TopBar);
new Vue({
  router:router,
  store:store,
  render: h => h(App)
}).$mount('#app');
