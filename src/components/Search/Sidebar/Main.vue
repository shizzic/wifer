<template>
	<div />
</template>

<script scoped>
export default {
	name: "Sidebar",
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
	background-color: #fff;
	word-break: break-all;
    border-radius: 4px;

    width: 325px;
    min-width: 325px;
	height: 100%;
    margin-right: 25px;
	
	overflow-y: auto;
}

@media screen and (max-width: 730px) {
    div {
        position: absolute;
        left: -500px;
        top: 0;
    }
}
</style>
