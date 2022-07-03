<template>
	<div v-if="data" class="wrap scroll">
		<Header :data="data" @avatar="++avatar" />
		<Images v-if="data && (data.public > 0 || data.private > 0 || data._id == $user.id)" 
			:data="data" :lang="cropper" :l="l" :avatar="avatar"
		/>
		<Info :data="data" :l="l" />
		<About :about="data.about" :l="l" />
	</div>
</template>

<script scoped>
import { ProfileJS } from "@/store/Langs/Profile"
import Header from "@/components/Profile/Header/Main.vue"
import Images from "@/components/Profile/Images/Main.vue"
import Info from "@/components/Profile/Info/Main.vue"
import About from "@/components/Profile/About/Main.vue"
export default {
	name: "Profile",
	props: ["l"],
	setup() {
		const errors   = ProfileJS().errors
		const response = ProfileJS().response
		const cropper  = ProfileJS().cropper

		return {
            errors,
			response,
			cropper
		}
	},
	components: {
		Header,
		Images,
		Info,
		About
	},
	data() {
		return {
			data: null,
			avatar: 0
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
	width: 100%;
	height: 100%;

	background-color: #286DA8;
	padding: 30px;

	overflow-y: auto;
}

.wrap::before, .wrap::after {
  content: '';
  margin: auto;
}

@media screen and (max-width: 768px) {
    .wrap {
        padding: 10px;
    }
}
</style>
