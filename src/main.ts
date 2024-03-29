import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios    from 'axios';
import VueAxios from 'vue-axios';
Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

import 'bootstrap/dist/css/bootstrap-grid.css'

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
