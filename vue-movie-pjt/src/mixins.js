//통신하는 친구를 만들건데 계속 임포트해서 사용하지 않고 
//뷰에 박아서 쓸 건데 전역에서 쉽게 통신할 수 있게 해줌
//재사용성을 극대화 시킴

//js기능 업데이트 발표 됨, async 안쓰고도 await 사용 가능해짐

import axios from "axios";

export default {
    data() {
        return {
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
        }
    },
    methods: {
        async $api(url, data) {
            return (await axios({
                method: 'get',
                url, 
                data
            }).catch(e => {
                console.log(e);
            })).data;
        },
        async getBoxOfficeByDay() {
            return await this.$api(this.baseUrl + this.boxOfficeByDay, {});
        }
    }
}