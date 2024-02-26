import { createApp } from 'vue';
import App from './App.vue';
import './assets/global.css';
import SearchMain from "./views/SearchMain.vue"
import router from './router';

// 在這裡使用全域的 JavaScript 代碼，動態設置 body 樣式
document.body.style.background = 'url("./LoginVideo.mp4") center center / cover no-repeat';
document.body.style.overflow = 'hidden'; // 禁止上下滾動

const app = createApp(App);
app.component('SearchMain', SearchMain); // 注冊 SearchMain 組件
app.use(router);
app.mount('#app');