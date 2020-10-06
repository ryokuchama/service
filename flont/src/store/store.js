import Vue from 'vue';
import vuex from 'vuex';

import counter from '../store/counter';

Vue.use(vuex);

export default new vuex.Store({
    modules: {
        counter
    },

    //初期値
    state: {
        conputedCart: [],
        totalPrice: 0,
        hours: 0,
        minutes: 0,
        phoneNumber: '',
        note: ''
    },
    mutations: {
        
    }

});