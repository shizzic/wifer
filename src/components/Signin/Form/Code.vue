<template>
	<split-input
        v-model="value"
        class-name="w-12 h-8 rounded-sm p-5 font-bold text-lg"
        :input-number="6"
    />
</template>

<script scoped>
export default {
	name: "Code",
	props: ["title", "error"],
	data() {
		return {
			value: ""
		}
	}
}
</script>

<style scoped>

</style>
