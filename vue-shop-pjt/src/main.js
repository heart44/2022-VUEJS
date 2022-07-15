import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

window.Kakao.init('400971afcc07d18dede3bc9f981ac358');
