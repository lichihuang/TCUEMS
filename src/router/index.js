import { createRouter, createWebHistory } from "vue-router";
import SearchMain from '../views/SearchMain.vue';
import Result from '../views/Result.vue';
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
  {
    path: '/Result',
    name: 'Result',
    component: Result,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // 防止滚动条残留在切换页面时
  document.documentElement.scrollTop = 0;

  if (to.path === '/') {
    // 如果进入 SearchMain 页面，禁用滚动条
    document.body.style.overflow = 'hidden';
  } else {
    // 否则恢复滚动条
    document.body.style.overflow = 'auto';
  }

  next();
});

export default router;