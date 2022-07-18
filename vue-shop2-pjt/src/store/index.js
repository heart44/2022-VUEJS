import Vuex from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

export default new Vuex.Store({
    state: {
        iuser: 0
    },
    mutations: {
        setIuser: (state, iuser) => {
            state.iuser = iuser;
        }
    },
    plugins: [
        createPersistedstate()
    ]
});