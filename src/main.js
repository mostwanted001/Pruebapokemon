import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueClipboard from 'vue-clipboard2'
import Vue from 'vue'

createApp(App).use(VueClipboard)

createApp(App).use(store).use(router).mount('#app')
