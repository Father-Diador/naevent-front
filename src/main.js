import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Notifications} from './notification/Notification'

createApp(App).use(store).use(Notifications).use(router).mount('#app')
