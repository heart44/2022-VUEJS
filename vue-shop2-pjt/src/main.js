import { createApp } from 'vue'
import App from './App.vue'
import mixins from './mixins';
import router from './router'
import store from './store'

createApp(App).mixin(mixins).use(store).use(router).mount('#app');

window.Kakao.init('400971afcc07d18dede3bc9f981ac358');
