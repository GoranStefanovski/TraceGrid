import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import GuestDefaultPage from '../views/GuestDefaultPage.vue'
import MapView from '../views/MapView.vue'
import ReportsView from '../views/ReportsView.vue'

Vue.use(VueRouter);

const requireToken = (to, from, next) => {
  const token = sessionStorage.getItem('user-token');
  if (token) {
    next();
  } else {
    next('/');
  }
};

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: GuestDefaultPage,
  },
  {
    path: '/map',
    name: 'map',
    component: MapView,
    beforeEnter: requireToken
  },
  {
    path: '/reports',
    name: 'reports',
    component: ReportsView,
    beforeEnter: requireToken
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
