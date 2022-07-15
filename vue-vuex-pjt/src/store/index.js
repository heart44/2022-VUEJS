import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			count: 0,
		};
	},
	getters: {
	},
	mutations: {   //state 값 수정 가능한 곳
        increment(state) {
            state.count++;
        }
	},
	actions: {
	},
	modules: {
	},
});
