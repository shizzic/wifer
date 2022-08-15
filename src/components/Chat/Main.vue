<template>
	<div class="wrap">
		<div v-if="work" id="chat">
			<Left />
			<Right />
		</div>
	</div>
</template>

<script scoped>
import Left from "@/components/Chat/Left/Main.vue"
import Right from "@/components/Chat/Right/Main.vue"
export default {
	name: "Chat",
	components: {
		Left,
		Right
	},
	data() {
		return {
			work: null,
			socket: null
		}
	},
	mounted() {
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
	overflow-y: auto;
}

#chat {
	width: 100%;
	height: 100%;
	background-color: #fff;
	border-radius: 4px;

	display: flex;

	overflow-y: auto;
}
</style>
