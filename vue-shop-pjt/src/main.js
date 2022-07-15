import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'

createApp(App).use(store).use(router).mixin(mixins).mount('#app')

window.Kakao.init('400971afcc07d18dede3bc9f981ac358');
