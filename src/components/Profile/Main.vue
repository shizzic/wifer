<template>
	<div class="wrap scroll">
		<div v-if="isFetched" class="loader">
			<SyncLoader :loading="true" v-bind="loader_settings" />
		</div>
		<template v-else-if="!isFetched && data">
			<Header :data="data" :lang="values[l].sex" :checked="checked" :add="modalJS.add" :del="modalJS.delete"
				:l="l" :titles="titles[l]" :popover="popover[l]" :live="live" @avatar="++avatar"
				@settings="settings = true" @modal="modal = $event" />
			<Images :data="data" :lang="cropper" :l="l" :avatar="avatar" :priv="checked.private"
				:add_text="popover[l].add" @modal="modal = $event" />

			<div class="flex">
				<Info :data="data" :titles="titles[l]" :values="values[l]" />
				<About :title="titles[l].about" :username="data.username" :about="data.about" :l="l"
					:blank="about[l]" />
			</div>

			<Seeking v-show="data.search.length > 0" :list="values[l].search" :value="data.search"
				:title="titles[l].search" />

			<Settings v-if="settings" :l="l" :lang="settingsJS" :titles="titles" :fields="data" :info="values[l]"
				@close="settings = null" @data="data = $event" />

			<Modal v-if="modal" :text="modalJS.text[modal][l]" :modal="modal" :submit="modalJS.submit[l]"
				:success="modalJS.success" :l="l" @close="modal = null" />

			<Note v-if="$user.id && data._id != $user.id" :checked="checked" :text="checked.like" :target="data._id"
				:placeholder="popover[l].note" @note="note = $event" />
		</template>
	</div>
</template>

<script scoped>
import { ProfileJS } from "@/store/Langs/Profile"
import { InfoJS } from "@/store/Langs/Info"
import { SettingsJS } from "@/store/Langs/Settings"
import { ModalJS } from "@/store/Langs/Modal"
import { SyncLoader } from "vue-spinner/src"
import Header from "@/components/Profile/Header/Main.vue"
import Images from "@/components/Profile/Images/Main.vue"
import Info from "@/components/Profile/Info.vue"
import Seeking from "@/components/Profile/Seeking.vue"
import About from "@/components/Profile/About.vue"
import Settings from "@/components/Settings/Main.vue"
import Modal from "@/components/Profile/Modal.vue"
import Note from "@/components/Profile/Note.vue"

export default {
	name: "Profile",
	props: ["l"],
	setup() {
		const errors = ProfileJS().errors
		const response = ProfileJS().response
		const cropper = ProfileJS().cropper
		const popover = ProfileJS().popover
		const titles = InfoJS().keys
		const values = InfoJS().values
		const about = InfoJS().about
		const settingsJS = SettingsJS()
		const modalJS = ModalJS()

		return {
			errors,
			response,
			cropper,
			popover,
			titles,
			values,
			about,
			settingsJS,
			modalJS
		}
	},
	components: {
		SyncLoader,
		Header,
		Images,
		Info,
		Seeking,
		About,
		Settings,
		Modal,
		Note
	},
	data() {
		return {
			isFetched: false,
			loader_settings: {
                size: "25px",
                color: "#fff"
            },
			live: null,
			data: null,
			avatar: 0,

			settings: null,
			modal: null,

			checked: {
				like: {
					is: false,
					text: ""
				},
				private: {
					is: false,
					access: false
				},
				access: {
					is: false,
					access: false
				}
			}
		}
	},
	watch: {
		'$route.params.id': {
			handler(n) {
				if (n && n > 0)
					this.firstGet()
			}
		}
	},
	beforeMount() {
		this.firstGet()
	},
	methods: {
		getProfile() {
			if (this.isFetched)
				return
			this.isFetched = true
			this.data = null
			fetch(this.$domain + "profile?id=" + this.$route.params.id, {
				method: "GET",
				credentials: "include"
			})
				.then(data => { return data.json() })
				.then(data => {
					if ("error" in data)
						this.$toast.error(this.response[this.l])
					else {
						this.data = data.user
						document.title = data.user.username
						this.pulse()

						if (data.target) {
							if ("Like" in data.target && data.target.Like) {
								this.checked.like.is = true
								this.checked.like.text = data.target.Like.text
							}

							if ("Private" in data.target && data.target.Private)
								for (let elem of data.target.Private)
									if (elem.user == this.$user.id)
										this.checked.private.is = true
									else
										this.checked.private.access = true

							if ("Access" in data.target && data.target.Access)
								for (let elem of data.target.Access)
									if (elem.user == this.$user.id)
										this.checked.access.is = true
									else
										this.checked.access.access = true
						}
					}

					this.isFetched = false
				})
				.catch(() => {
					this.$toast.error(this.errors[this.l].server)
					this.isFetched = false
				})
		},

		firstGet() {
			if (this.$route.params.id)
				if (this.$route.params.id.match(/^\d+$/) && this.$route.params.id > 0)
					this.getProfile()
				else
					this.$toast.error(this.errors[this.l].int)
		},

		pulse() {
			if (this.$route.params.id == this.$user.id)
				this.live = true
			else
				this.live = this.data.online
		}
	}
}
</script>

<style scoped>
.wrap {
	width: 100%;
	height: 100%;

	padding: 25px;

	overflow-x: hidden;
}

.loader {
	width: 100%;
	height: calc(100% - 50px);

	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
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

@media screen and (max-width: 450px) {
	.wrap {
		padding: 10px;
	}
}
</style>
