import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import { createPinia } from 'pinia'

import 'virtual:windi.css'
// import '~/assets/main.scss'

import App from './App.vue'

// ROUTES
const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })

// STORE
const pinia = createPinia()

// DEFINE APP
const app = createApp(App).use(router).use(pinia)

app.mount('#app')
