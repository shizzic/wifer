<template>
	<div class="wrapper" :class="{disabled: !terms}">
		<template v-if="!https || https && (!country || country && country !== 'Russia')">
			<Google @signin="signin" :terms="terms" />
			<!-- <Twitter @signin="signin" :terms="terms" :redirect_uri="redirect_uri" /> -->
		</template>
		<Yandex @signin="signin" :terms="terms" :redirect_uri="redirect_uri" />
		<Mail @signin="signin" :terms="terms" :redirect_uri="redirect_uri" />
	</div>
</template>

<script scoped>
import * as time_zones from './timezone_to_country'
import Google from "@/components/Signin/Api/Google.vue"
import Twitter from "@/components/Signin/Api/Twitter.vue"
import Yandex from "@/components/Signin/Api/Yandex.vue"
import Mail from "@/components/Signin/Api/Mail.vue"

export default {
	name: "Api",
	props: ["l", "success", "response", "terms"],
	components: {
		Google,
		Twitter,
		Yandex,
		Mail,
	},
	computed: {
		id() {
			return this.$user.id
		}
	},
	data() {
		return {
			https: false,
			redirect_uri: window.location.origin + window.location.pathname,
			country: time_zones.default[Intl.DateTimeFormat().resolvedOptions().timeZone]
		}
	},
	beforeMount() {
		if (window.location.protocol === "https:")
			this.https = true
	},
	methods: {
		signin(data) {
			if (!this.terms)
				return

			fetch(this.$domain + "signin", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: data.id,
					token: data.token,
					method: data.method,
					redirect_uri: data.redirect_uri,
					api: true,
				})
			})
				.then(data => { return data.json() })
				.then(response => {
					if ("error" in response) {
						this.$toast.error(this.response[this.l][response.error])
						this.$router.push({ name: "signin" })
					} else {
						this.$user.set({ field: "id", value: response.id })
						this.$router.push({ name: "profile", params: { id: this.id } })
						this.$toast.success(this.success[this.l])
					}
				})
		}
	}
}
</script>

<style scoped>
.wrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 25px;
}

.wrapper *:not(:last-child) {
	margin: 0;
	margin-right: 10px;
}

.disabled {
	pointer-events: none;
}
</style>
