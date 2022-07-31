<template>
	<div class="wrapper scroll">
		<Hat :l="l" :data="data" :sort="sort" :filters="filters" :create="create" :count="count" :founded="founded" :getUsers="getUsers"
		@filters="$emit('filters')" />
		<Users :users="users" :mode="mode" :photos="photos" :titles="titles" :values="values" />
		<Pagination v-if="users" :users="users" :count="count" :limit="data.data[data.active].limit" />
	</div>
</template>

<script scoped>
import Hat from "@/components/Search/List/Hat/Main.vue"
import Users from "@/components/Search/List/Users/Main.vue"
import Pagination from "@/components/Search/List/Pagination.vue"
export default {
	name: "List",
	props: ["l", "data", "sort", "filters", "create", "users", "mode", "photos", "count", "founded", "getUsers", "titles", "values"],
	components: {
		Hat,
		Users,
		Pagination
	}
}
</script>

<style scoped>
.wrapper {
	background-color: #fff;
	word-break: break-all;
    border-radius: 4px;

    width: 100%;
	height: 100%;
	
	overflow-y: auto;
}
</style>
