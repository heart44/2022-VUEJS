import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
    state() {
        return {
            user: {},
            sallerSelectedProduct: {},
        }
    },
    mutations: {
        user: (state, data) => {
            state.user = data;
        },
        sallerSelectedProduct: (state, data) => {
            state.sallerSelectedProduct = data;
        }
    },
    plugins: [
        createPersistedstate({
            paths: ['user']     //값이 유지되는게 user일때만 저장하겠다
        })
    ]
});