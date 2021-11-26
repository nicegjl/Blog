import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

registerMicroApps([
  {
    name: 'test app', // app name registered
    entry: 'http://172.26.129.212:8082/',
    container: '#computerTest',
    activeRule: '/computer',
  },
  {
    name: 'react app', // app name registered
    entry: 'http://172.26.129.212:8082/',
    container: '#reactTest',
    activeRule: '/computer',
  },
]);

start();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
