<template>
	<div @click="terms ? popup() : null">
		<img src="/images/apis/google.webp">
	</div>
</template>

<script scoped>
export default {
	props: ['redirect_uri', 'terms'],
	beforeMount() {
		if (!this.$route.query.method && this.$route.query.code && this.$route.query.state === 'Google')
			this.$emit("signin", {
				"token": this.$route.query.code,
				"method": "Google",
				redirect_uri: this.redirect_uri
			})
	},
	methods: {
		popup() {
			window.open('https://accounts.google.com/o/oauth2/auth?scope=email&response_type=code&access_type=offline&state=Google&redirect_uri=' 
			+ this.redirect_uri + '&client_id=' + import.meta.env.VITE_GOOGLE_ID, '_self')
		}
	}
}
</script>

<style scoped>
div {
	cursor: pointer;
	width: 40px;
	height: 40px;
	border-radius: 4px;
	background-color: #fff;

	display: flex;
	justify-content: center;
	align-items: center;

	padding: 8px;
}

div:hover {
	background-color: #ededed;
}

img {
	width: 100%;
}
</style>