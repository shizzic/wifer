<template>
	<div class="seeking">
        <h3>{{ title }}</h3>
        <div class="elem-wrap">
            <div v-for="(elem, index) in value" :key="index" class="elem">{{ list[elem] }}</div>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Seeking",
    props: ["list", "value", "title"]
}
</script>

<style scoped>
.seeking {
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 8px;

    padding: 20px;
    padding-bottom: 10px;
}

.elem-wrap {
    display: flex;
    flex-wrap: wrap;
}

.elem {
    font-weight: 700;
    color: #5C5C5C;
    background-color: #E3E3E3;
    border-radius: 40px;

    padding: 10px 20px;
    margin-right: 10px;
    margin-bottom: 10px;
}

h3 {
    color: #4d4d4d;
	font-weight: 600;
    font-size: 18px;
    
    margin-bottom: 20px;
}

</style>
