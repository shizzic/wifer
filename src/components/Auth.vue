<template />
<script scoped>
import { langJS } from "@/store/lang"
import { SigninJS } from "@/store/Langs/Signin"
import { AuthJS } from "@/store/Langs/Auth"

import { useSeoMeta } from "@unhead/vue"

export default {
	name: "Auth",
	setup() {
		useSeoMeta({
			title: "Authentication",
			ogTitle: "Authentication",
			description: "Authentication process with user id and special token.",
			ogDescription: "Authentication process with user id and special token.",
			robots: "noindex",
		})

		const response = AuthJS()["response"]
		const success = SigninJS()["success"]

		return {
			response,
			success
		}
	},
	computed: {
		l() {
			return langJS()["lang"]
		},
		id() {
			return this.$user.id
		}
	},
	beforeMount() {
		if (/^[0-9]+$/.test(this.$route.params.code) && this.$route.params.code.length === 6)
			this.check()
		else {
			this.$toast.error(this.response[this.l][0])
			this.$router.push({ name: "search" })
		}
	},
	methods: {
		check() {
			if (!this.$user.id) {
				fetch(this.$domain + "checkCode", {
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						id: this.$route.params.id,
						code: this.$route.params.code,
					})
				})
					.then(data => { return data.json() })
					.then(data => {
						if ("error" in data) {
							this.$toast.error(this.response[this.l][data["error"]])
							this.$router.push({ name: "search" })
						} else {
							this.$user.set({ field: "id", value: data.id })
							this.$router.push({ name: "profile", params: { id: this.id } })
							this.$toast.success(this.success[this.l])
						}
					})
			}
		}
	}
}
</script>
