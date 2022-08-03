<template>
	<div v-if="data" class="wrap scroll">
		<Header
			:data="data" :lang="values[l].sex" :checked="checked" :add="modalJS.add" :del="modalJS.delete" :l="l"
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
			:text="modalJS.text[modal][l]" :modal="modal" :submit="modalJS.submit[l]" :success="modalJS.success[modal][l]"
			@close="modal = null"
		/>
	</div>
</template>

<script scoped>
import { ProfileJS } from "@/store/Langs/Profile"
import { InfoJS } from "@/store/Langs/Info"
import { SettingsJS } from "@/store/Langs/Settings"
import { ModalJS } from "@/store/Langs/Modal"
import Header from "@/components/Profile/Header/Main.vue"
import Images from "@/components/Profile/Images/Main.vue"
import Info from "@/components/Profile/Info.vue"
import Seeking from "@/components/Profile/Seeking.vue"
import About from "@/components/Profile/About.vue"
import Settings from "@/components/Settings/Main.vue"
import Modal from "@/components/Profile/Modal.vue"
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
		const modalJS    = ModalJS()

		return {
            errors,
			response,
			cropper,
			titles,
			values,
			about,
			settingsJS,
			modalJS
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
			modal: null,

			checked: {
				like: {
					is: null,
					text: ""
				}
			}
		}
	},
	watch: {
		'$route.params.id': {
			handler() {
				this.firstGet()
			}
		}
	},
	beforeMount() {
		this.firstGet()
	},
	methods: {
		getProfile() {
			fetch(this.$domain + "profile?id=" + this.$route.params.id, {
				method: "GET",
				credentials: "include"
			})
				.then(data => { return data.json() })
				.then(data => { console.log(data)
					if ("error" in data)
						this.$toast.error(this.response[this.l])
					else {
						this.data = data

						if (data._id != this.$user.id)
							this.getTarget()
					}
				})
				.catch(() => { this.$toast.error(this.errors[this.l].server) })
		},

		getTarget() {
			fetch(this.$domain + "target?target=" + this.$route.params.id, {
				method: "GET",
				credentials: "include"
			})
				.then(data => { return data.json() })
				.then(data => {
					console.log(data)

					if (data)
						if ("like" in data) {
							this.checked.is   = true
							this.checked.text = data.like.text
						}
				})
		},

		firstGet() {
			if (this.$route.params.id.match(/^\d+$/) && this.$route.params.id > 0)
				this.getProfile()
			else
				this.$toast.error(this.errors[this.l].int)
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
