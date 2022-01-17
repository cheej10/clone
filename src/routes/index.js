import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('../views/MainView'),
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/SignupView'),
    },
  ],
});
