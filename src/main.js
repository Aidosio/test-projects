import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import vue3MaterialEsm from "vue3-material";

createApp(App).use(router).use(vue3MaterialEsm).mount('#app')
