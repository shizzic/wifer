<template>
	<div class="wrapper scroll">
		<Locations :lang="lang" />
	</div>
</template>

<script scoped>
import Locations from "@/components/Search/Sidebar/Locations/Main.vue"
export default {
	name: "Sidebar",
	props: ["lang"],
	components: {
		Locations
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
    border-radius: 4px;

    width: 25%;
	min-width: 300px;
	height: 100%;
    margin-right: 25px;
	
	overflow-y: auto;
}

@media screen and (max-width: 730px) {
    .wrapper {
        position: absolute;
        left: -500px;
        top: 0;
    }
}
</style>
