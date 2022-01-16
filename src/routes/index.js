import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/signup',
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/SignupView'),
    },
  ],
});
