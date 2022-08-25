<template>
	<div id="hat">
        <div class="flex">
            <Lang :l="l" />

            <div class="filter-sort">
                <div class="filters-wrap switch"><img src="/filters.webp" class="filters" @click="$emit('filters')" /></div>
                <Sort :data="data" :sort="data.data[data.active].sort" :lang="sort" :create="create" :getUsers="getUsers" />
            </div>
        </div>
        
        <div class="flex">
            <div class="founded">{{ founded }} {{ count }}</div>

            <div class="right">
                <Mode :data="data" :mode="data.data[data.active].mode" :create="create" />
                <Limit :data="data" :limit="data.data[data.active].limit" :create="create" :getUsers="getUsers" />
            </div>
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
    props: ["l", "data", "sort", "create", "count", "founded", "getUsers"],
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
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.flex {
    width: 100%;
    border-bottom: 1.5px solid #bcbcbc;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 10px;
    padding-bottom: 0;
}

.right {
    display: flex;
    flex-wrap: wrap;
}

.founded {
    color: #4d4d4d;
    font-size: 17px;
    font-weight: 700;

    display: flex;
    align-items: center;

    margin-bottom: 10px;
    margin-right: 15px;
}

.filter-sort {
    display: flex;
}

.filters-wrap {
    height: 35px;
    background-color: #ff6868;
    border-radius: 3px;

    display: flex;
    justify-content: center;

    padding: 5px;
    margin-bottom: 10px;
    margin-right: 15px;
}

.filters {
    filter: invert(100%) sepia(98%) saturate(0%) hue-rotate(290deg) brightness(104%) contrast(104%);
    height: 100%;
    cursor: pointer;
	font-size: 16px;
	color: white;
	border-radius: 4px;
    
    margin-bottom: 10px;
}

.filters-wrap:hover {
	background-color: #f34f4f;
}

.filters-wrap:active {
	background-color: #c33232;
}

.switch {
    display: none;
}

@media screen and (max-width: 790px) {
    .switch {
		display: flex;
        justify-content: flex-end;
    }
}
</style>
