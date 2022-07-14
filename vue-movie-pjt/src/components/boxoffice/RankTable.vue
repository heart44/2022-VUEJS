<template>
    <table>
        <thead>
            <tr>
                <th>순위</th>
                <th>제목</th>
                <th>개봉일</th>
                <th>누적관객수</th>
                <th>누적매출액</th>
            </tr>
        </thead>
        <tbody>
            <RankRow :item="item" v-for="item in list" :key="item.movieCd" />
        </tbody>
    </table>
</template>

<script>
import RankRow from '../boxoffice/RankRow.vue'

export default {
    components: {
        RankRow
    },
    props: {
        list: Array
    },
}
</script>

<style>

</style>