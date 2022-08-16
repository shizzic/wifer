<template>
	<div class="left">
		<Hat :search="search" />
		<None :lang="chats" />
	</div>
</template>

<script scoped>
import Hat from "@/components/Chat/Left/Hat.vue"
import None from "@/components/Chat/Left/None.vue"
export default {
	name: "Left",
	props: ["search", "chats"],
	components: {
		Hat,
		None
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

	display: flex;
	flex-direction: column;
	
	overflow: hidden;
}
</style>
