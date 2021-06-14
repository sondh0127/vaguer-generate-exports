import { createApp } from 'vue'
import { InteractiveComponents } from '../src/main'
import App from './App.vue'

const app = createApp(App)
app.use(InteractiveComponents)
app.mount('#app')
