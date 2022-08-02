<template>
	<div v-if="data" class="wrap scroll">
		<Header
			:data="data" :lang="values[l].sex" 
			@avatar="++avatar" @settings="settings = true" @modal="modal = $event"
		/>
		<Images :data="data" :lang="cropper" :l="l" :avatar="avatar" />

		<div class="flex">
			<Info :data="data" :titles="titles[l]" :values="values[l]" />
			<About :title="titles[l].about" :username="data.username" :about="data.about" :l="l" :blank="about[l]" />
		</div>
		
		<Seeking v-show="data.search.length > 0" :list="values[l].search" :value="data.search" :title="titles[l].search" />

		<Settings v-if="data && settings"
			:l="l" :lang="settingsJS" :titles="titles" :fields="data" :info="values[l]"
			@close="settings = null" @data="data = $event"
		/>

		<Modal v-if="modal" 
			:text="buttonsJS.text[modal][l]" :modal="modal" :save="settingsJS.buttons[l].save" :success="buttonsJS.success[modal][l]"
			@close="modal = null"
		/>
	</div>
</template>

<script scoped>
import { ProfileJS } from "@/store/Langs/Profile"
import { InfoJS } from "@/store/Langs/Info"
import { SettingsJS } from "@/store/Langs/Settings"
import { ButtonsJS } from "@/store/Langs/Buttons"
import Header from "@/components/Profile/Header/Main.vue"
import Images from "@/components/Profile/Images/Main.vue"
import Info from "@/components/Profile/Info.vue"
import Seeking from "@/components/Profile/Seeking.vue"
import About from "@/components/Profile/About.vue"
import Settings from "@/components/Settings/Main.vue"
import Modal from "@/components/Modal.vue"
export default {
	name: "Profile",
	props: ["l"],
	setup() {
		const errors   	 = ProfileJS().errors
		const response 	 = ProfileJS().response
		const cropper  	 = ProfileJS().cropper
		const titles  	 = InfoJS().keys
		const values  	 = InfoJS().values
		const about  	 = InfoJS().about
		const settingsJS = SettingsJS()
		const buttonsJS  = ButtonsJS()

		return {
            errors,
			response,
			cropper,
			titles,
			values,
			about,
			settingsJS,
			buttonsJS
		}
	},
	components: {
		Header,
		Images,
		Info,
		Seeking,
		About,
		Settings,
		Modal
	},
	data() {
		return {
			data: null,
			avatar: 0,

			settings: null,
			modal: null
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

	padding: 30px;

	overflow-y: auto;
}

.wrap::before, .wrap::after {
  content: '';
  margin: auto;
}

@media screen and (max-width: 768px) {
    .wrap {
        padding: 15px;
    }
}

.flex {
	display: flex;
}

@media screen and (max-width: 800px) {
    .flex {
        flex-wrap: wrap;
    }
}
</style>
