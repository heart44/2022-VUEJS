import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			count: 0,
            cart: [
                {
                    product_id: 1,
                    product_name: '아이폰 거치대',
                    category: 'A'
                },
                {
                    product_id: 2,
                    product_name: '아이폰 거치대',
                    category: 'B'
                }
            ],
		};
	},
	getters: {
        cartCount: (state) => {
            return state.cart.length;
        }
	},
	mutations: {   //state 값 수정 가능한 곳, 동기 처리
        increment(state) {
            state.count++;
        },
        setCount(state, val) {
            state.count = val;
        }
	},
	actions: {  //비동기 처리, 통신이 필요할 땐 여기에 작업
	},
	modules: {
	},
});
