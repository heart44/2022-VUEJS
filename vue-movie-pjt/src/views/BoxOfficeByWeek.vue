<template>
    <div>
        <h1>BoxOfficeByWeek</h1>
        <div>
            <input type="date" v-model="selectedDate">
            <button @click="search">검색</button>
        </div>
        <div>
            <h4>{{ boxofficeType }}</h4>
            <h4>{{ yearWeekTime }}</h4>
        </div>
        <table>
            <thead>
                <tr>
                    <th>순위</th>
                    <th>제목</th>
                    <th>개봉일</th>
                    <th>누적관객수</th>
                    <th>누적매출액</th>
                    <th>기간</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list" :key="item.movieCd">
                    <td>{{ item.rank }}</td> 
                    <td>{{ item.movieNm }}</td> 
                    <td>{{ item.openDt }}</td> 
                    <td>{{ item.audiAcc }}</td> 
                    <td>{{ item.salesAcc }}</td> 
                    <td>{{ showRange }}</td> 
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedDate: '',
            list: [],
            showRange: '',
            boxofficeType: '',
            yearWeekTime: '',
        }
    },
    methods: {
        search() {
            const targetDt = this.selectedDate.replaceAll('-', '');
            this.getData(targetDt);
        },
        async getData(targetDt) {
            const data = await this.getBoxOfficeByWeek(targetDt)
            this.list = data.boxOfficeResult.weeklyBoxOfficeList
            this.showRange = data.boxOfficeResult.showRange
            this.boxofficeType = data.boxOfficeResult.boxofficeType
            this.yearWeekTime = data.boxOfficeResult.yearWeekTime.slice(-2) + '주차'
        }
    },
    created() {
        const d = new Date();
        d.setDate(d.getDate() -1);
        this.selectedDate = this.getDateStr(d)
    }
}
</script>