import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)

createApp(App)
.use(store)
.use(router)
.mount('#app')
