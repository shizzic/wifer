<template>
	<div class="body">
        <div class="flex">
            <div v-for="(elem, index) in countries" :key="index" class="elem" @click="$emit('country', index)">
                {{ elem }}
            </div>
        </div>

        <div v-if="Object.keys(countries).length > 0" class="border">
            <div class="line" /><div class="circle" /><div class="line" />
        </div>

        <div class="flex">
            <template v-for="(country, index) in cities" :key="index">
                <div v-for="(elem, key) in country" :key="key" class="elem" @click="$emit('city', { city : key, country : index })">
                    {{ elem }}
                </div>
            </template>
        </div>
	</div>
</template>

<script scoped>
export default {
	name: "Locations",
	props: ["countries", "cities"]
}
</script>

<style scoped>
.body {
    width: 100%;
    margin-bottom: 10px;
}

.flex {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
}

.elem {
    color: #fff;
    cursor: pointer;
    background-color: #808080;
    padding: 8px 20px;
    border-radius: 30px;

    margin-bottom: 10px;
}

.elem:not(:last-of-type) {
    margin-right: 10px;
}

.border {
    width: 100%;
    padding: 0 15px;
    margin-top: 5px;
    margin-bottom: 15px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.line {
    height: 2px;
    width: 100%;
    background-color: #b5b5b5;
}

.circle {
    border: 2px solid #b5b5b5;
    border-radius: 50%;

    padding: 5px;
    margin: 0 10px;
}
</style>
