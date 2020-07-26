import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router/router';
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(axios);

var store = {
  debug: true,
  state: {
    computedCart: []
  },

  // カート内を共通状態管理
  containsOfCart(newCart) {
    if (this.debug) console.log('contains of cart', newCart)
    this.state.computedCart = newValue
  },
  // 時間と場所の共通状態管理
  timeAndPhoneNumber(newTime) {
    if (this.debug) console.log('time and phonenumber', newTime)
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