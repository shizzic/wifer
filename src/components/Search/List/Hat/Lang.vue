<template>
	<div class="lang">
        <div v-for="(elem, index) in $lang.languages" :key="index" class="elem" :class="{ active : elem === l }"
        @click="$lang.setLang(elem)">
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
	word-break: break-all;
    
    display: flex;
    flex-wrap: wrap;
}

.elem {
    cursor: pointer;
    font-weight: 700;
    color: #5C5C5C;
    background-color: #E3E3E3;
    border-radius: 40px;

    padding: 5px 20px;

    margin-right: 10px;
    margin-bottom: 10px;

    transition: background-color .1s linear;
}

.elem:hover, .active {
    background-color: #bcbcbc;
}
</style>
