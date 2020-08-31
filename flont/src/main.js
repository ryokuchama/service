import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import {ValidationProvider} from 'vee-validate/dist/vee-validate.full';
import {ValidationObserver} from 'vee-validate';
import router from './router/router';
import store from './store/store';
import {sync} from 'vuex-router-sync'
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(axios);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

sync(store, router)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')