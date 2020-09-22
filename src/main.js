import Vue from 'vue'
import App from './App.vue'

const axios = require('axios');
const cherio = require('cheerio');
const scraperapiClient = require('scraperapi-sdk')('be59d4736ee58ecc682b47921b7751d7');

Vue.prototype.$axios = axios;
Vue.prototype.$cherio = cherio;
Vue.prototype.$scraper = scraperapiClient;

import './assets/scss/tailwind.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
