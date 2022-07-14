<template>
    <div>
        <h1 v-if="title">{{ title }}</h1>
        <h1 v-else>BoxOfficeByWeek</h1>
        <div>
            <select v-model="weekGb">
                <option value="0">주간</option>
                <option value="1">주말</option>
                <option value="2">주중</option>
            </select>
            <input type="date" v-model="selectedDate">
            <button @click="search">검색</button>
        </div>
        <div>
            <h4>{{ boxofficeType }}</h4>
            <h5>{{ showRange }}</h5>
            <h5>{{ yearWeekTime }}</h5>
        </div>
        <RankTable :list="list" />
    </div>
</template>

<script>
import RankTable from '../components/boxoffice/RankTable.vue'
export default {
    components: {
        RankTable
    },
    data() {
        return {
            title: '',
            selectedDate: '',
            list: [],
            showRange: '',
            yearWeekTime: '',
            weekGb: '',
        }
    },
    methods: {
        search() {
            const targetDt = this.selectedDate.replaceAll('-', '');
            const weekGb = this.weekGb;
            this.getData(targetDt, weekGb);
        },
        async getData(targetDt, weekGb) {
            const data = await this.getBoxOfficeByWeek(targetDt, weekGb)
            this.list = data.boxOfficeResult.weeklyBoxOfficeList
            this.showRange = data.boxOfficeResult.showRange
            this.title = data.boxOfficeResult.boxofficeType
            this.yearWeekTime = data.boxOfficeResult.yearWeekTime.slice(-2) + '주차'
        }
    },
    created() {
        const d = new Date();
        d.setDate(d.getDate() -7);
        this.selectedDate = this.getDateStr(d)
        this.weekGb = 0;
    }
}
</script>