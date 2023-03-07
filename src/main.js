import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faStar)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
