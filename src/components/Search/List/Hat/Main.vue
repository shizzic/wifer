<template>
	<div id="hat">
        <Lang :l="l" />
        <div class="filters" @click="$emit('filters')">{{ filters }}</div>
        <Mode :data="data" :mode="data.data[data.active].mode" :create="create" />
        <div class="flex">
            <Limit :data="data" :limit="data.data[data.active].limit" :create="create" />
            <Sort :data="data" :sort="data.data[data.active].sort" :lang="sort" :create="create" />
        </div>
    </div>
</template>

<script scoped>
import Lang from "@/components/Search/List/Hat/Lang.vue"
import Mode from "@/components/Search/List/Hat/Mode.vue"
import Limit from "@/components/Search/List/Hat/Limit.vue"
import Sort from "@/components/Search/List/Hat/Sort.vue"
export default {
	name: "Hat",
    props: ["l", "data", "sort", "filters", "create"],
    components: {
        Lang,
        Mode,
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
    
	padding: 10px 10px;
}

.filters {
    cursor: pointer;
	background-color: #ff6868;
	font-size: 16px;
	color: white;
	border-radius: 7px;
	box-shadow: 0 7px 0px #de4d4d;
	
    position: relative;
	top: -3px;

    margin-right: 10px;
    padding: 6px 20px;

    display: none;
    transition: all .2s;
}

 .filters:active {
	top: 3px;
	box-shadow: 0 2px 0px #de4d4d;
	transition: all .2s;
}

.flex {
    display: flex;
    align-items: center;

    margin-top: 5px;
}

@media screen and (max-width: 790px) {
    .filters {
		display: block;
    }
}
</style>
