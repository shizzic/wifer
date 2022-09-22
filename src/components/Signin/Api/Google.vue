<template>
    <GoogleLogin :callback="signin" :buttonConfig="{ type: 'icon' }" :class="{ disabled: !terms }" />
</template>

<script scoped>
export default {
	name: "Google",
	props: ["terms"],
	methods: {
		signin(response) {		
            this.$emit("signin", { "token" : response["credential"], "id" : response["clientId"], "method" : "Google" })	
		}
	}
}
</script>

<style scoped>
.disabled {
	pointer-events: none;
}
</style>
