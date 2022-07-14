//통신하는 친구를 만들건데 계속 임포트해서 사용하지 않고 
//뷰에 박아서 쓸 건데 전역에서 쉽게 통신할 수 있게 해줌
//재사용성을 극대화 시킴

//js기능 업데이트 발표 됨, async 안쓰고도 await 사용 가능해짐

import axios from "axios";

export default {
    data() {
        return {
            key: '1a0a7ecf96ad3364d8de70e91560767a',
            baseUrl: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
        }
    },
    methods: {  //.data 앞까지가 axios 실행 결과(객체)
        async $api(url, param) {
            return (await axios.get(url, {
                params: param
            }).catch(e => {
                console.log(e);
            })).data;
        },
        async getBoxOfficeByDay(targetDt) {
            const param = {
                key: this.key,
                targetDt
            }
            const url = this.baseUrl + this.boxOfficeByDay
            return await this.$api(url, param);
        },
        getDateStr(date) {
            return date.toISOString().split('T')[0];
        }
    }
}