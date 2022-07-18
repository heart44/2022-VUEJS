import { createApp } from 'vue'
import App from './App.vue'
import mixins from './mixins';
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App).mixin(mixins).use(store).use(router).use(VueSweetalert2).mount('#app');

window.Kakao.init('400971afcc07d18dede3bc9f981ac358');
