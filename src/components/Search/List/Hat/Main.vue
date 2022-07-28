<template>
	<div id="hat">
        <Lang :l="l" />
        <div class="filters" @click="$emit('filters')">{{ filters }}</div>
        <div class="flex">
            <Limit :data="data" :limit="data.data[data.active].limit" />
            <Sort :data="data" :sort="data.data[data.active].sort" :lang="sort" />
        </div>
    </div>
</template>

<script scoped>
import Lang from "@/components/Search/List/Hat/Lang.vue"
import Limit from "@/components/Search/List/Hat/Limit.vue"
import Sort from "@/components/Search/List/Hat/Sort.vue"
export default {
	name: "Hat",
    props: ["l", "data", "sort", "filters"],
    components: {
        Lang,
        Limit,
        Sort
    }
}
</script>

<style scoped>
#hat {
    width: 100%;
	word-break: break-all;
    border-bottom: 2px solid #bcbcbc;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    
	padding: 10px;
    padding-bottom: 0;
}

.filters {
	background-color: #ff6868;
	font-size: 16px;
	color: white;
	border-radius: 7px;
	box-shadow: 0 7px 0px #de4d4d;
	transition: all .2s;
	padding: 6px 20px;
    position: relative;
	top: -0px;
	cursor: pointer;

    margin-right: 10px;
    margin-bottom: 10px;

    display: none;
}

 .filters:active {
	top: 3px;
	box-shadow: 0 2px 0px #de4d4d;
	transition: all .2s;
}

.flex {
    display: flex;
    /* margin-left: auto; */
}

@media screen and (max-width: 790px) {
    .filters {
		display: block;
    }
}
</style>
