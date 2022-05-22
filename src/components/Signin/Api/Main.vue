<template>
	<div class="wrapper">
		<Google @signin="signin" />
		<Facebook @signin="signin" />
	</div>
</template>

<script scoped>
import Google from "@/components/Signin/Api/Google.vue"
import Facebook from "@/components/Signin/Api/Facebook.vue"
export default {
	name: "Api",
	components: {
		Google,
		Facebook
	},
	data() {
		return {
		}
	},
	methods: {
		signin(data) {
			let form = new FormData()
			form.append("id", data.id)
			form.append("token", data.token)
			form.append("api", true)
			form.append("method", data.method)

			fetch(this.$domain + "signin", {
				method: "POST",
				credentials: "include",
				body: form
			})
				.then(data => { return data.json() })
				.then(data => { console.log(data)
					if ("error" in data)
						this.$toast.error(this.response[this.l][data["error"]])
					else {
						// this.$user.setID(data["id"])
						this.$router.push({ name: "search" })
						// this.$toast.success(this.success[this.l])
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
