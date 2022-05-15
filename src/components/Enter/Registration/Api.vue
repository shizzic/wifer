<template>
	<div class="registration-api-wrapper">
		<GoogleLogin :callback="google" :buttonConfig="{ type: 'icon' }" />
		<v-facebook-login
			app-id="3352108845111671"
			@sdk-init="facebookInit"
			@login="facebook"
			:useAltLogo="true"
			:options="{ autoLogAppEvents: false }"
			class="registration-api-facebook"
			:logo-class="'registration-api-icon'"
      	>
		  	<template v-slot:login>{{ "" }}</template>
		</v-facebook-login>
	</div>
</template>

<script scoped>
import { decodeCredential } from 'vue3-google-login'
import VFacebookLogin from 'vue-facebook-login-component-next'
export default {
	name: "Api",
	components: {
		VFacebookLogin
	},
	data() {
		return {
			FB: {},
			user: {}
		}
	},
	methods: {
		google(response) {
			const data = decodeCredential(response.credential)

			if (data.email_verified)
  				console.log(data.email)
		},
		facebook() {
			this.FB.api('/me', { fields: 'email' },
				user => { 
					this.user = user
					console.log(this.user.email) 
				}
			)
		},
		facebookInit({ FB, _ }) {
			this.FB = FB
		}
	}
}
</script>

<style>
.registration-api-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
}

.registration-api-facebook {
	cursor: pointer;
	width: 40px;
	height: 40px;
	border: 1px solid #dadce0;
	border-radius: 4px;
    background-color: #ffffff;

	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px 0;
    margin-left: 25px;
}

.registration-api-icon {
	filter: invert(34%) sepia(76%) saturate(432%) hue-rotate(180deg) brightness(101%) contrast(93%);
}
</style>
