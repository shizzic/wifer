<template>
	<div class="wrap">
		<div v-if="$chat.socket" id="chat">
			<Left :search="search[l]" :chats="chats[l]" />
			<Right v-if="target && target.id in messages" :target="target" :input="input[l]" :messages="messages[target.id]" :blur="blur[l]"
			:getMessages="getMessages" />
			<None v-else :lang="none[l]" />
		</div>
	</div>
</template>

<script scoped>
import Left from "@/components/Chat/Left/Main.vue"
import Right from "@/components/Chat/Right/Main.vue"
import None from "@/components/Chat/Right/None.vue"
import { chatJS } from "@/store/chat"
export default {
	name: "Chat",
	props: ["l"],
	components: {
		Left,
		Right,
		None
	},
	setup() {
		const none   = chatJS().none
		const search = chatJS().search
		const input  = chatJS().input
		const chats  = chatJS().chats
		const blur   = chatJS().blur

		return {
			none,
			search,
			input,
			chats,
			blur
		}
	},
	data() {
		return {			
			target: chatJS().target,
			rooms: null
		}
	},
	computed: {
		messages() {
			return chatJS().messages
		}
	},
	beforeMount() {
		if (this.target)
			this.getMessages()
	},
	methods: {
		getMessages(scroll = null) {
			let have = this.target.id in this.messages

			if (!have || this.messages[this.target.id].left && (scroll || this.messages[this.target.id].first)) {
				this.$chat.setMessages({ id: +this.target.id, left: null })

				let access = true
				let skip = 0
				if (this.target.id in this.messages) {
					skip   = this.messages[this.target.id].skip

					if (this.messages[this.target.id].accessed)
						access = false
				}

				fetch(this.$domain + "getMessages?target=" + this.target.id + "&skip=" + skip + "&access=" + access, {
					method: "GET",
					credentials: "include"
				})
					.then(data => { return data.json() })
					.then(data => {
						if (data) {
							if (data.accesses) {
								let obj = { user: false, target: false }

								for (let elem of data.accesses)
									if (elem.user == this.$user.id)
										obj.user   = true
									else
										obj.target = true

								this.$chat.setMessages({ id: +this.target.id, access: obj, accessed: true })
							}

							if (data.messages) {
								let left = false
								if (data.messages.length === 25)
									left = true

								if (!data.messages[0].viewed) {
									let need = null
									for (let message of data.messages) {
										if (message.user != this.$user.id && message.viewed)
											break

										if (message.user != this.$user.id && !message.viewed) {
											message.viewed = true
											need = true
										}
									}
									
									if (need && this.$chat.socket)
										this.$chat.sendMessage({ user: +this.$user.id, target: +this.target.id, api: "view" })
								}
								
								this.$chat.setMessages({ id: +this.target.id, messages: data.messages, left: left  })
							}
						}
					})
			}
		}
	}
}
</script>

<style scoped>
.wrap {
	width: 100%;
	height: 100%;
	background-color: #8f8585;

	padding: 25px;
	overflow: hidden;
}

#chat {
	width: 100%;
	height: 100%;
	background-color: #fff;
	border-radius: 4px;

	display: flex;
	overflow: hidden;
}
</style>
