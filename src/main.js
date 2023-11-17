<<<<<<< HEAD
// import './assets/main.css'
=======
>>>>>>> d1bbb475af2b158f4249130eee664525f4e2d688

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router);
<<<<<<< HEAD

=======
>>>>>>> d1bbb475af2b158f4249130eee664525f4e2d688

app.mount('#app')
