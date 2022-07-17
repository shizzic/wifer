<template>
	<div class="wrap">
		<Sidebar :titles="titles[l]" :values="values[l]" />
		<List />
	</div>
</template>

<script scoped>
import { InfoJS } from "@/store/Langs/Info"
import Sidebar from "@/components/Search/Sidebar/Main.vue"
import List from "@/components/Search/List/Main.vue"
export default {
	name: "Search",
	props: ["l"],
	components: {
		Sidebar,
		List
	},
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
		}
	},
	methods: {
	}
}
</script>

<style scoped>
.wrap {
	background-color: #daa77b;
	word-break: break-all;

	width: 100%;
	height: 100%;
	padding: 25px;

	display: flex;
	
	overflow: hidden;
}

.wrap::before, .wrap::after {
  content: '';
  margin: auto;
}

@media screen and (max-width: 730px) {
    .wrap {
        padding: 15px;
    }
}
</style>
