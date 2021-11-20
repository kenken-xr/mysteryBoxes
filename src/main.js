import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import $ from "jquery";

import 'swiper/swiper.min.css';


import homeButton from './components/homeButton.vue'

const app = createApp(App)
app.use(router)
app.use($)

app.component('homeButton', homeButton)
app.mount('#app')

