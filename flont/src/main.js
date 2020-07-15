import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/router';

Vue.config.productionTip = false

var store = {
  debug: true,
  state: {

  },
  containsOfCart() {

  },
  timeAndPhoneNumber() {

  }
}

new Vue({
  data() {
    return {
      privateState: store.state
    }
  },
  methods: {
    containsOfCart: function() {

    },
    timeAndPhoneNumber: function() {

    }
  },
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')