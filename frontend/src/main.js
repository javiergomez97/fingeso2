import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

// Instancia de axios se configura con URL base del backend
const axiosInstance = axios.create({
    baseURL: "http://localhost:8081"
    })

// Para acceder a axios desde this.$http
Vue.prototype.$http = axiosInstance;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
