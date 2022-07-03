<template>
	<div class="info">
        <div v-for="(elem, index) in keys" :key="index" class="block">
            <h3 class="title">{{ titles[l][index] }}</h3>
            <template v-if="data[index] !== 0">
                <span v-show="elem">{{ values[l][index][data[index]] }}</span>
                <span v-show="!elem">{{ data[index] }}</span>
            </template>
            <span v-else>-</span>
        </div>
    </div>
</template>

<script scoped>
import { InfoJS } from "@/store/Langs/Info"
export default {
	name: "Info",
    props: ["data", "l"],
    setup() {
		const titles = InfoJS().keys
        const values = InfoJS().values

		return {
            titles,
            values
		}
	},
    data() {
		return {
			keys: {
                height: null,
                weight: null,
                body: true,
                smokes: true,
                drinks: true,
                ethnicity: true,
                income: true,
                industry: true,
                search: true,
                children: null
            }
		}
	}
}
</script>

<style scoped>
.info {
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px;

    display: flex;
    flex-wrap: wrap;

    padding: 30px;
}

.block {
    color: #4d4d4d;
    width: 33%;

    display: flex;
    flex-direction: column;
    align-items: left;

    margin-bottom: 20px;
}

.title {
    font-weight: 600;
    font-size: 18px;
    
    margin-bottom: 10px;
}

@media only screen and (max-width : 644px) {
    .block {
        width: 50%;
    }
}

@media only screen and (max-width : 350px) {
    .block {
        width: 100%;
        align-items: center;
    }
}
</style>
