<template>
	<div v-if="data" class="wrap">
		<Header :data="data" />
	</div>
</template>

<script scoped>
import { ProfileJS } from "@/store/Langs/Profile"
import Header from "@/components/Profile/Header/Main.vue"
export default {
	name: "Profile",
	props: ["l"],
	setup() {
		const errors = ProfileJS()["errors"]
		const response = ProfileJS()["response"]

		return {
            errors,
			response
		}
	},
	components: {
		Header
	},
	data() {
		return {
			data: null
		}
	},
	beforeMount() {
		if (this.$route.params.id.match(/^\d+$/))
			this.getProfile()
		else
			this.$toast.error(this.errors[this.l].int)
	},
	methods: {
		getProfile() {
			fetch(this.$domain + "profile?id=" + this.$route.params.id, {
				method: "GET",
				credentials: "include"
			})
				.then(data => { return data.json() })
				.then(data => {
					if ("error" in data)
						this.$toast.error(this.response[this.l])
					else {
						this.data = data
						console.log(data)
					}
				})
				.catch(() => { this.$toast.error(this.errors[this.l].server) })
		}
	}
}
</script>

<style scoped>
.wrap {
	padding: 30px;
}

@media screen and (max-width: 768px) {
    .wrap {
        padding: 10px;
    }
}
</style>
