import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vue from 'vue'

import './assets/scss/style.scss';
import jQuery from 'jquery';
import 'popper.js';
import'bootstrap'; 
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


window.$ = window.jQuery = jQuery;

// Vue.config.productionTip = false;


createApp(App).use(store).use(router).mount('#app')
