<template>
    <div>
        <h1>{{ title }}</h1>
        <div>
            <select v-model="weekGb" v-if="pathName==='boxOfficeByWeek'">
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
            pathName: '',
            titleType: '',
        }
    },
    methods: {
        search() {
            const targetDt = this.selectedDate.replaceAll('-', '');
            const weekGb = this.weekGb;
            this.getData(targetDt, weekGb);
        },
        async getData(targetDt, weekGb) {
            switch(this.pathName) {
                case 'boxOfficeByDay':
                    this.list = (await this.getBoxOfficeByDay(targetDt)).boxOfficeResult.dailyBoxOfficeList
                    break
                case 'boxOfficeByWeek':
                    const data = await this.getBoxOfficeByWeek(targetDt, weekGb)
                    this.list = data.boxOfficeResult.weeklyBoxOfficeList
                    this.showRange = data.boxOfficeResult.showRange
                    this.titleType = data.boxOfficeResult.boxofficeType
                    this.yearWeekTime = data.boxOfficeResult.yearWeekTime.slice(-2) + '주차'
                    break
            }
        },
        common() {
            this.pathName = this.$route.name;
            switch(this.pathName) {
                case 'boxOfficeByDay':
                    this.title = '일별 박스오피스'
                    break
                case 'boxOfficeByWeek':
                    this.title = this.titleType
                    break
            }
        }
    },
    created() {
        this.common()
        const d = new Date()
        d.setDate(d.getDate() -1);
        this.selectedDate = this.getDateStr(d)
        this.weekGb = 0;
    },
    updated() {
        this.common()
    }
}
</script>