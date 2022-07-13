<template>
    <div>
        <div>
            <h1>이벤트 클릭</h1>
            <button type="button" @click="increaseCnt(); printConsole()">Add 1</button>
            <p>The counter is : {{ cnt }}</p>
        </div>
        <div>
            {{ selectedValue }}
            <select v-model="selectedValue" @change="changeSelect">
                <option>서울</option>
                <option>부산</option>
                <option>제주</option>
            </select>
        </div>
        <div>
            {{ txtVal }}            <!-- input에서 change 이벤트는 포커스를 벗어나야 실행됨 -->
            <input type="txtVal" v-model="txtVal" @keyup="changeTxtVal" @keyup.enter="enterTxtVal">
        </div>
    </div>
</template>
<!-- 이벤트 걸때 메소드에 -->
<!-- 괄호가 없으면 호출해달라고 주소값만 보냄 -->
<!-- 괄호가 있으면 실행해달라고 하는 것임(파라미터 보낼 수 있음) -->
<script>
export default {
    data() {
        return {
            selectedValue: '',
            cnt: 0,
            txtVal: '',
        }
    },
    methods: {
        increaseCnt() {
            this.cnt++;
        },
        printConsole() {
            console.log(this.cnt);
        },
        changeTxtVal() {
            console.log(this.txtVal)
        },
        enterTxtVal() {
            console.log('Enter');
        }
    }
}
</script>

<style>

</style>