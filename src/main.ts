import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as VueAuth from '@websanova/vue-auth';
import axios    from 'axios';
import VueAxios from 'vue-axios';



Vue.config.productionTip = false;

// Vue.use(VueAuth, {
//   auth: require('@websanova/vue-auth/dist/drivers/auth/bearer.js'),
//   http: require('@websanova/vue-auth/dist/drivers/http/axios.1.x.js'),
//   router: require('@websanova/vue-auth/dist/drivers/router/vue-router.2.x.js'),
//   refreshData: {url: 'auth/refresh', method: 'GET', enabled: false,interval: 1},
//   rolesVar: 'permissions_array',
//   parseUserData: user => user
// });

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
