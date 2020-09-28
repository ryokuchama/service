import Vue from 'vue';
import vuex from 'vuex';
import axios from 'axios';

import counter from '../store/counter';

Vue.use(vuex);

interface State {
    conputedCart: [];
    totalPrice: 0;
    hours: 0;
    minites: 0;
    phoneNumber: String;
    note: '';
}
export default new vuex.Store({
    modules: {
        counter
    },

    state: {
        
    }
});