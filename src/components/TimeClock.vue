<template>
    <div>
        <p>{{ time }}</p>
    </div>
</template>

<script>
export default {
    name: 'TimeClock',
    data() {
        return {
            time: null
        }
    },
    methods: {
        calculateDate() {
            setInterval(() => {
                const currentDate = new Date();
                const currentHour = currentDate.getHours();
                const currentMunite = currentDate.getMinutes();
                const currentSecond = currentDate.getSeconds();
                const hh = currentHour < 10 ? `0${currentHour}` : currentHour;
                const mm = currentMunite < 10 ? `0${currentMunite}` : currentMunite;
                const ss = currentSecond < 10 ? `0${currentSecond}` : currentSecond;
                this.time = `${hh}:${mm}:${ss}`;
            })
        }
    },
    created() {
        this.calculateDate();
    },
}
</script>

<style lang="scss" scoped>
p {
    position: fixed;
    margin: 0;
    top: 18px;
}
</style>