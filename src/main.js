import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import './assets/styles/styles.scss' //import our scss file

createApp(App).use(store).use(router).mount('#app')