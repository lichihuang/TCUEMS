import { createRouter, createWebHistory } from "vue-router";
import SearchMain from '../views/SearchMain.vue';
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/SearchMain',
    name: 'SearchMain',
    component: SearchMain,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;