import Vue from 'vue';
import App from './App.vue';
import Ninja from './Ninja.vue';
import Header from './Header.vue';
import BootstrapVue from 'bootstrap-vue'
import ToggleButton from 'vue-js-toggle-button';
Vue.use(BootstrapVue);
Vue.use(ToggleButton);

Vue.component('en-tete', Header)
Vue.component('machine', Ninja)

new Vue({
  el: '#app',
  render: h => h(App)
})
