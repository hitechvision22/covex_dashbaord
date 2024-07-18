import { createApp } from 'vue'
import App from './App.vue'
import './css/index.css'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'
import emitter from './emitter/useEmiter';

require('moment/locale/fr');

window.emitter = emitter;
createApp(App).config.globalProperties.$mitt = emitter;

createApp(App).use(router).use(store).use(VueAxios,axios).mount('#app')
