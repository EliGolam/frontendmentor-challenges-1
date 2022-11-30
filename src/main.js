import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* ************************************************************ */
/* FONT AWESOME */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faAngleRight } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars, faAngleRight)
/* ************************************************************ */

/* StyleSheets */
import './assets/stylesheets/app.scss'


/* APP */
const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
