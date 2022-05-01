<template>
	<div class="block">
		<span class="text">{{ lang[l]["text"] }}</span>
		<router-link class="button" :to="{ name: 'forgot' }">{{ lang[l]["button"] }}</router-link>
	</div>
</template>

<script scoped>
export default {
	name: "Forget",
	props: ["l", "lang"],
	data() {
		return {
		}
	}
}
</script>

<style scoped>
.block {
    display: flex;
}

.text {
    color: #aeacd8;

    display: inline-block;
    margin-right: 25px;
}

.button {
    cursor: pointer;
    color: #ffffff;
	text-decoration: none;
}
</style>
