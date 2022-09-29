<template>
	<div class="lang">
        <div v-for="(elem, index) in $lang.languages" :key="index" class="elem" :class="{ active : index === l }"
        @click="$lang.setLang(index)">
            {{ elem }}
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Lang",
    props: ["l"]
}
</script>

<style scoped>
.lang {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    margin-right: 15px;
}

.elem {
    cursor: pointer;
    font-weight: 700;
    color: #5C5C5C;
    background-color: #E3E3E3;
    border-radius: 40px;
    height: 30.8px;

    display: flex;
    align-items: center;

    padding: 5px 20px;
    margin-bottom: 10px;

    transition: background-color .1s linear;
}

.elem:hover, .active {
    background-color: #bcbcbc;
}

.elem:not(:last-of-type) {
    margin-right: 10px;
}
</style>
