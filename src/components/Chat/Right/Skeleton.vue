<template>
    <div class="parent">
        <div class="header">
            <Skeletor class="avatar" />
            <Skeletor class="username" />
        </div>

        <div class="messages">
            <Skeletor class="message" :height="35" style="width: 20%; align-self: flex-start;" />
            <Skeletor class="message" :height="110" style="width: 60%; align-self: flex-start;" />

            <Skeletor class="message" :height="35" style="width: 27%; align-self: flex-end;" />
            <Skeletor class="message" :height="90" style="width: 50%; align-self: flex-end;" />
            <Skeletor class="message" :height="70" style="width: 60%; align-self: flex-end;" />

            <Skeletor class="message" :height="35" style="width: 15%; align-self: flex-start;" />
            <Skeletor class="message" :height="35" style="width: 20%; align-self: flex-start;" />
            <Skeletor class="message" :height="35" style="width: 25%; align-self: flex-start;" />
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
.parent {
    width: 100%;
    height: 100%;
    border: 1px solid;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;

    overflow-x: hidden;
    overflow-y: auto;
}

.header {
    width: 100%;
    min-height: 60px;
    border-bottom: 1px solid #b0b5b8;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 10px;
}

.avatar {
    width: 42px;
    min-width: 42px;
    height: 42px;
    min-height: 42px;
    border-radius: 50%;
}

.username {
    width: 50%;
    max-width: 150px;
    height: 16px;
    border-radius: 4px;

    margin-left: 20px;
    margin-top: -8px;
}

.messages {
	width: 100%;
	height: 100%;
	background-color: #e5f3f6;

	display: flex;
	flex-direction: column-reverse;
	padding: 0 20px;
	padding-top: 10px;
    margin-bottom: -10px;

	overflow-x: hidden;
}

.message {
    border-radius: 4px;

    margin-bottom: 8px;
}
</style>