import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/index.css'


const app = createApp(App);

import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init({ disable: "phone" });

app.use(store).use(router).mount("#app");

// createApp(App).use(router).mount('#app')

