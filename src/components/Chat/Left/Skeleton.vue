<template>
    <div class="rooms">
        <div v-for="(num, _) in 5" :key="num" class="room">
            <Skeletor class="avatar" />

            <div class="right">
                <Skeletor class="username" />
                <Skeletor class="text" />
                <Skeletor class="time" />
            </div>
        </div>
    </div>
</template>

<script scoped>
import 'vue-skeletor/dist/vue-skeletor.css'
import { Skeletor } from "vue-skeletor"
export default {
    components: {
        Skeletor
    }
}
</script>

<style scoped>
.rooms {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    padding: 10px;

    overflow-x: hidden;
    overflow-y: auto;
}

.room {
    width: 100%;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 10px;
    margin-bottom: 5px;
}

.avatar {
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
    border-radius: 50%;
}

.right {
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
}

.username {
    width: 50%;
    max-width: 150px;
    height: 20px;
    border-radius: 4px;
}

.text {
    width: 25%;
    max-width: 100px;
    height: 15px;
    border-radius: 4px;
}

.time {
    width: 10%;
    max-width: 30px;
    height: 10px;
    border-radius: 2px;

    position: absolute;
    right: 0;
    top: 0;
}
</style>