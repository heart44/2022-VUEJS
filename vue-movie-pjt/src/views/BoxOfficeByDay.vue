<template>
    <h1>BoxOfficeByDay</h1>
</template>

<script>
export default {
    methods: {
        async getData() {
            const data = await this.getBoxOfficeByDay('20211212')
            console.log(data)
        }
    },
    created() {
        this.getData();
    }
}
</script>

<style>

</style>