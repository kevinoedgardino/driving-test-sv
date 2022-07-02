import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/main.css'
import './styles/loading.css'
import './styles/fonts.css'
import './styles/media.css'

createApp(App).use(router).mount('#app')
