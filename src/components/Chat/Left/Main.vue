<template>
	<div class="left">
		<Hat />
	</div>
</template>

<script scoped>
import Hat from "@/components/Chat/Left/Hat.vue"
export default {
	name: "Left",
	components: {
		Hat
	},
	data() {
		return {
		}
	}
}
</script>

<style scoped>
.left {
	width: 25%;
	min-width: 300px;
	height: 100%;
	border-right: 1px solid #b0b5b8;
	
	overflow-y: auto;
}
</style>
