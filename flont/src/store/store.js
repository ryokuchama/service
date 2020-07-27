import Vue from 'vue';
import vuex from 'vuex'

import counter from './store/counter';

Vue.use(vuex);

export default new vuex.Store({
    modules: {
        counter
    }
});