<template>
	<div class="wrap">
		<div v-if="work" id="chat">
			<Left :search="search[l]" :chats="chats[l]" />
			<Right v-if="target" :target="target" :input="input[l]" />
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

		return {
			none,
			search,
			input,
			chats
		}
	},
	data() {
		return {
			work: null,
			socket: null,

			target: null,
			rooms: null,
			messages: {}
		}
	},
	beforeMount() {
		if (this.$chat.target)
			this.target = this.$chat.target

		this.$chat.set({ field: "target", value: null })
		
		this.socket = new WebSocket("wss://" + this.$domainName + "ws")

		this.socket.onopen = () => {
			this.work = true
			this.sendMessage("Hi")
		}

		this.socket.onmessage = (e) => {
			this.acceptMsg(e.data)
		}

		this.socket.onclose = () => {
			this.work = null
		}
	},
	methods: {
		sendMessage(text) {
			this.socket.send(JSON.stringify({ message: text }))
		},
		acceptMsg(data) {
			// this.response.push(JSON.parse(data).message)
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
