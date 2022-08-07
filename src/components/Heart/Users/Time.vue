<template>
    <div class="time">
        <img src="/added.webp" />
        <span>{{ getDate(time) }}</span>
    </div>
</template>

<script scoped>
export default {
	name: "Time",
    props: ["time"],
    methods: {
        getDate(time) {
            var date = new Date(time * 1000)
            var hours = date.getHours()
            var minutes = "0" + date.getMinutes()
            var seconds = "0" + date.getSeconds()
            var formattedTime = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
            return formattedTime
        }
    }
}
</script>

<style scoped>
.time {
    display: flex;
    align-items: center;
    
    padding-left: 15px;
    margin: 10px 0;
}

.row {
    width: 50%;

    display: flex;
    align-items: center;

    margin-top: 10px;
}

img {
    width: 20px;
    height: 20px;
    
    margin-right: 10px;
}

span {
    font-size: 18px;
    color: #000;
    word-break: normal;

    display: inline-block;
}
</style>
