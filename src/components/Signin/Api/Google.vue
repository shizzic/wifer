<template>
    <GoogleLogin :callback="signin" :buttonConfig="{ type: 'icon' }" />
</template>

<script scoped>
export default {
	name: "Google",
	data() {
		return {
		}
	},
	methods: {
		signin(response) {		
            this.$emit("signin", { "token" : response["credential"], "id" : response["clientId"], "method" : "Google" })	
		}
	}
}
</script>

<style scoped>
</style>
