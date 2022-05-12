import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  routes: [
    {
      path: '/',
      component: import('../pages/Login.vue')
    },
    {
      path: '/:access_token',
      components: {
        default: () => import('../pages/Login.vue')
      }
    },
    {
      path: '/setPassword',
      components: {
        default: () => import('../pages/Auth.vue')
      }
    },
    {
      path: '/dashboard',
      components: {
        default: () => import('../pages/Dashboard.vue')
      }
    }
  ],
  history: createWebHashHistory()
});

export default router;
