const state = {
    conputedCart: [],
    hours: 0,
    minites: 0,
    phoneNumber: String,
    note: ''
};

const mutations = {
    'CHANGE_COUNT'(state) {
        state.count = state.count + 1;
    },
};

const actions = {
    plusCount: ({commit}) => {
        commit('CHANGE_COUNT');
    }
};

const getters = {
    currentCount: state => {
        return state.count;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}