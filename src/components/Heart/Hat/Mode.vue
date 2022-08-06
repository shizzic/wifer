<template>
	<div class="mode">
        <span class="founded">{{ founded }} 1</span>

        <div class="flex">
            <div class="flex">
                <div class="square" :class="{ active : mode }" @click="set(true)">
                    <img src="/profile.webp" />
                </div>

                <div class="square" :class="{ active : !mode }" @click="set(null)">
                    <img src="/others.webp" />
                </div>
            </div>

            <Limit :limit="limit" :get="get" @limit="$emit('limit', $event)" />
        </div>
    </div>
</template>

<script scoped>
import Limit from "@/components/Heart/Hat/Limit.vue"
export default {
	name: "Mode",
    props: ["limit", "get", "founded", "mode"],
    components: {
        Limit
    },
    methods: {
        set(value) {
            if (this.mode !== value)
                this.$emit("mode", value)
        }
    }
}
</script>

<style scoped>
.mode {
    width: 100%;
    border-bottom: 1.5px solid #bcbcbc;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 0 10px;
    padding-top: 10px;
}

.founded {
    color: #4d4d4d;
    font-size: 17px;
    font-weight: 700;

    display: flex;
    align-items: center;

    margin-bottom: 10px;
    margin-right: 10px;
}

.square {
    cursor: pointer;
    height: 35px;
    width: 35px;
    background-color: #9f9f9f;
    border-radius: 2px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    padding: 3px;
    margin-right: 15px;
}

img {
    width: 26px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(33deg) brightness(102%) contrast(102%);
}

.active {
    background-color: #3A3A3A;
}

.flex {
    display: flex;
}
</style>
