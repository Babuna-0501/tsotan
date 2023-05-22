import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Import your page components
import Home from './pages/HomePage.vue'
import Add from './pages/AddPage.vue'
import List from './pages/ListPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/add', component: Home },
    { path: '/', component: Add },
    { path: '/list', component: List }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
