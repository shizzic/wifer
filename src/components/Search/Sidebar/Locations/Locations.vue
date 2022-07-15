<template>
	<div class="body">
        <div class="flex">
            <div v-for="(elem, index) in countries" :key="index" class="elem" @click="$emit('country', index)">
                {{ elem }}
            </div>
        </div>

        <div v-if="Object.keys(countries).length > 0" class="border">
            <div /><span>&#9587;</span><div />
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
	props: ["countries", "cities"],
	emits: ["country", "city"]
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
    padding: 0 20px;
    margin-top: 10px;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.border div {
    height: 2px;
    width: 100%;
    background-color: #b5b5b5;
}

.border span {
    padding: 0 10px;
}
</style>
