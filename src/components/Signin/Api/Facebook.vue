<template>
    <v-facebook-login
        app-id="3352108845111671"
        @sdk-init="init"
        @login="signin"
        :useAltLogo="true"
        :options="{ autoLogAppEvents: false }"
        class="registration-api-facebook"
        :logo-class="'registration-api-icon'"
    >
        <template v-slot:login>{{ "" }}</template>
    </v-facebook-login>
</template>

<script scoped>
import VFacebookLogin from 'vue-facebook-login-component-next'
export default {
	name: "Facebook",
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
		signin(data) {
            this.$emit("signin", { "token" : data.authResponse.accessToken, "id" : data.authResponse.userID, "method" : "Facebook" })
		},
		init({ FB, _ }) {
			this.FB = FB
		}
	}
}
</script>

<style>
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
