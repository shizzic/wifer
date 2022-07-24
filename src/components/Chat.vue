<template>
	<div @click="$user.logout($domain)">Chat</div>
</template>

<script scoped>
export default {
	name: "Chat",
	data() {
		return {
		}
	},
	methods: {
	}
}
</script>

<style scoped>
div {
	background-color: #B37D4E;
	word-break: break-all;
	height: 100%;
	
	overflow-y: auto;
}
</style>
