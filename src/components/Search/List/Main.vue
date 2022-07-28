<template>
	<div class="wrapper">
		<Hat :l="l" :data="data" :sort="sort" :filters="filters" @filters="$emit('filters')" />
	</div>
</template>

<script scoped>
import Hat from "@/components/Search/List/Hat/Main.vue"
export default {
	name: "List",
	props: ["l", "data", "sort", "filters"],
	components: {
		Hat
	},
	data() {
		return {
		}
	},
	methods: {
	}
}
</script>

<style scoped>
.wrapper {
	background-color: #fff;
	word-break: break-all;
    border-radius: 8px;

    width: 100%;
	height: 100%;
	
	overflow-y: auto;
}
</style>
