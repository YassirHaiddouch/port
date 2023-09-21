import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/css/main.css'
import App from './App.vue'


import Home from './components/home.vue'
import Aboutus from './components/aboutus.vue'
import Projects from './components/Projects.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/AboutUs', component: Aboutus },
        { path: '/Projects', component: Projects },
        
    ]
});

 const app = createApp(App);
 app.use(router);
 app.mount('#app')