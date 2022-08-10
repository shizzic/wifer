<template>
	<div class="hat">
        <div v-for="(elem, index) in what" :key="index" class="elem" :class="{ active : which == index }"
        @click="set(index)">
            {{ elem }}
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Which",
    props: ["what", "which"],
    methods: {
        set(which) {
            if (which != this.which)
                this.$emit("which", +which)
        }
    }
}
</script>

<style scoped>
.hat {
    width: 100%;
    border-bottom: 1.5px solid #bcbcbc;

    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    padding-top: 10px;
}

.elem {
    cursor: pointer;
    font-weight: 700;
    color: #5C5C5C;
    background-color: #E3E3E3;
    border-radius: 40px;

    padding: 5px 20px;
    margin-bottom: 10px;

    word-break: normal;

    transition: background-color .1s linear;
}

.elem:hover, .active {
    background-color: #bcbcbc;
}

.elem:not(:last-of-type) {
    margin-right: 10px;
}
</style>
