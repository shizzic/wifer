<template>
	<div class="flex">
        <div class="square" :class="{ active : mode }" @click="set(true)">
            <div v-for="(_, line) in 3" :key="line" class="line">
                <span v-for="(_, index) in 3" :key="index" class="dot" />
            </div>
        </div>

        <div class="square" :class="{ active : !data.data[data.active].mode }" @click="set(null)">
            <div v-for="(_, line) in 3" :key="line" class="line">
                <span class="dot" />
                <span class="long" />
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Mode",
	props: ["data", "mode", "create"],
	methods: {
        set(value) {
            if (value !== this.mode) {
                this.data.data[this.data.active].mode = value
                this.create()
            }
        }
	}
}
</script>

<style scoped>
.square {
    cursor: pointer;
    height: 35px;
    width: 35px;

    padding: 3px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    margin-right: 15px;

    border: 1px solid #9f9f9f;
    border-radius: 2px;
}

.line {
    width: 100%;
    height: 33%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.dot {
    background-color: #9f9f9f;

    display: inline-block;
    padding: 2.5px;
}

.long {
    width: 100%;
    background-color: #9f9f9f;

    display: inline-block;
    padding: 2.5px;
    margin-left: 3px;
}

.active {
    border-color: rgb(58, 58, 58);
}

.active .dot, .active .long {
    background-color: rgb(58, 58, 58);
}
</style>
