import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

declare global {
  interface Window { $: any; }
}

const $ = require('jquery');
window.$ = $;
require('jquery-contextmenu');
import 'jquery-contextmenu/dist/jquery.contextMenu.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
