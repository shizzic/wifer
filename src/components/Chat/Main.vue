<template>
	<div class="wrap">
		<div v-if="work" id="chat">
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
			work: null,
			socket: null,
			
			target: null,
			rooms: null,
			messages: chatJS().messages
		}
	},
	beforeMount() {
		if (this.$chat.target) {
			this.target = this.$chat.target
			this.getMessages()
		}

		this.$chat.set({ field: "target", value: null })
		
		this.socket = new WebSocket("wss://" + this.$domainName + "ws")

		this.socket.onopen = () => {
			this.work = true
		}

		// this.socket.onmessage = (e) => {
		// 	this.acceptMsg(e.data)
		// }

		// this.socket.onclose = () => {
		// 	this.work = null
		// }
	},
	methods: {
		// sendMessage(text) {
		// 	this.socket.send(JSON.stringify({ message: text }))
		// },
		// acceptMsg(data) {
		// 	// this.response.push(JSON.parse(data).message)
		// },

		getMessages(scroll = null) {
			let have = this.target.id in this.messages

			if (have === false || scroll && this.messages[this.target.id].left || have === true && this.$chat.first && this.messages[this.target.id].left) {
				this.$chat.setLeft({ target: this.target.id, value: null })
				this.$chat.set({ field: "first", value: null })

				let access = true
				let skip = 0
				if (this.target.id in this.messages) {
					skip   = this.messages[this.target.id].skip
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
								let obj = { user: null, target: null }

								for (let elem of data.accesses)
									if (elem.user == this.$user.id)
										obj.user   = true
									else
										obj.target = true

								this.$chat.setAccess({ target: this.target.id, access: obj })
							}

							if (data.messages) {
								let left = null
								if (data.messages.length === 25)
									left = true
								
								this.$chat.setMessages({ target: this.target.id, messages: data.messages, left: left  })
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
