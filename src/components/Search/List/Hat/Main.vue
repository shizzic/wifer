<template>
	<div id="hat">
        <div class="flex">
            <Lang :l="l" />
            <Sort :data="data" :sort="data.data[data.active].sort" :lang="sort" :create="create" :getUsers="getUsers" />
        </div>
        
        <div class="flex">
            <div class="founded">{{ founded }} {{ count }}</div>

            <div class="right">
                <Mode :data="data" :mode="data.data[data.active].mode" :create="create" />
                <Limit :data="data" :limit="data.data[data.active].limit" :create="create" :getUsers="getUsers" />
            </div>
        </div>

        <div class="flex switch"><div class="filters" @click="$emit('filters')">{{ filters }}</div></div>
    </div>
</template>

<script scoped>
import Lang from "@/components/Search/List/Hat/Lang.vue"
import Mode from "@/components/Search/List/Hat/Mode.vue"
import Limit from "@/components/Search/List/Hat/Limit.vue"
import Sort from "@/components/Search/List/Hat/Sort.vue"
export default {
	name: "Hat",
    props: ["l", "data", "sort", "filters", "create", "count", "founded", "getUsers"],
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
}

.filters {
    height: 35px;
    cursor: pointer;
	background-color: #ff6868;
	font-size: 16px;
	color: white;
	border-radius: 4px;
    word-break: normal;
    
    margin-bottom: 10px;
    padding: 8px 20px;
    
    transition: all .1s linear;
}

 .filters:hover {
	background-color: #f34f4f;
}

 .filters:active {
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
