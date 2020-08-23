const state = {
    conputedCart: [],
    totalPrice: 0,
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
    currentCart: state => {
        return state.computedCart;
    },
    currentTotalPrice: state => {
        return state.totalPrice;
    },
    hour: state => {
        return state.hours;
    },
    minute: state => {
        return state.minutes;
    },
    phoneNum: state => {
        return state.phoneNumber;
    },
    note: state => {
        return state.note;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}