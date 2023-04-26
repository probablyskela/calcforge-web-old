import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'

import './assets/scss/reset.scss'

const app = createApp(App)

app.use(router)
app.use(VueCookies)

app.mount('#app')   