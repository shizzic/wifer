<template>
	<div class="wrapper" :class="{ disabled: !terms }">
		<template v-if="!country || country && country !== 'Russia'">
			<Google @signin="signin" :terms="terms" />
			<Facebook v-if="https" @signin="signin" :terms="terms" />
			<Twitter @signin="signin" :terms="terms" />
		</template>
	</div>
</template>

<script scoped>
import * as time_zones from './timezone_to_country'
import Google from "@/components/Signin/Api/Google.vue"
import Facebook from "@/components/Signin/Api/Facebook.vue"
import Twitter from "@/components/Signin/Api/Twitter.vue"

export default {
	name: "Api",
	props: ["l", "success", "response", "terms"],
	components: {
		Google,
		Facebook,
		Twitter,
	},
	computed: {
		id() {
			return this.$user.id
		}
	},
	data() {
		return {
			https: false,
			country: time_zones.default[Intl.DateTimeFormat().resolvedOptions().timeZone]
		}
	},
	beforeMount() {
		if (window.location.protocol === "https:")
			this.https = true
	},
	methods: {
		signin(data) {
			fetch(this.$domain + "signin", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: data.id,
					token: data.token,
					api: true,
					method: data.method,
				})
			})
				.then(data => { return data.json() })
				.then(data => {
					if ("error" in data)
						this.$toast.error(this.response[this.l][data.error])
					else {
						this.$user.set({ field: "id", value: data.id })
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
</style>
