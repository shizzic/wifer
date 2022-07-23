<template>
	<div class="info">
        <div v-for="(elem, index) in keys" :key="index" class="block">
            <h3 class="title">{{ titles[index] }}</h3>
            <template v-if="data[index] !== 0">
                <span v-if="elem">{{ values[index][data[index]] }}</span>
                <span v-else>{{ data[index] }}</span>
            </template>
            <span v-else>-</span>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Info",
    props: ["data", "titles", "values"],
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
                prefer: true,
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
    border-radius: 8px;

    display: flex;
    flex-wrap: wrap;

    padding: 30px;
    padding-bottom: 0;
    margin-bottom: 30px;
    margin-right: 30px;
}

.block {
    color: #4d4d4d;
    width: 32%;

    display: flex;
    flex-direction: column;
    align-items: left;
    
    margin-bottom: 30px;
}

.title {
    font-weight: 600;
    font-size: 18px;
    
    margin-bottom: 10px;
}

@media screen and (max-width: 1100px) {
    .info {
        margin-right: 0;
    }
}

@media only screen and (max-width : 644px) {
    .block {
        width: 48%;
    }
}

@media only screen and (min-width : 351px) {
    .block {
        margin-right: 1%;
    }
}

@media only screen and (max-width : 350px) {
    .block {
        width: 100%;
        align-items: center;

        margin-right: 0;
    }
}
</style>
