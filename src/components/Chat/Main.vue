<template>
	<div class="wrap">
		<div v-if="socket" id="chat">
			<Left :search="search[l]" :chats="chats[l]" :order="order" :rooms="rooms" :target="target"
				:getRooms="getRooms" :show="show" />

			<Right v-if="rooms && target && target.id in messages && target.id in rooms" :key="rooms[target.id].target"
				:target="target" :input="input[l]" :messages="messages[target.id]" :newMessages="newMessages[target.id]"
				:blur="blur[l]" :getMessages="getMessages" :rooms="rooms" :show="show" />
			<None v-else :lang="none[l]" :show="show" />
		</div>
	</div>
</template>

<script scoped>
import { clearInterval, setInterval } from 'worker-timers'
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
		const none = chatJS().none
		const search = chatJS().search
		const input = chatJS().input
		const chats = chatJS().chats
		const blur = chatJS().blur

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
			interval: null
		}
	},
	computed: {
		show() { return this.$chat.show },
		socket() { return this.$chat.server },
		target() { return this.$chat.target },
		order() { return this.$chat.order },
		rooms() { return this.$chat.rooms },
		roomsLeft() { return this.$chat.roomsLeft },
		messages() { return this.$chat.messages },
		newMessages() { return this.$chat.newMessages }
	},
	watch: {
		target(target) {
			if (target) {
				if (this.messages && target.id in this.messages)
					if (this.messages[target.id].messages.length === 0)
						this.newMessages[target.id] = []
					else
						this.$chat.addNewMessages(target.id)

				this.getMessages()
			}
		}
	},
	beforeMount() {
		console.log(this.rooms)
		this.$chat.start()
		this.getRooms(this.$chat.lastSearch, this.$chat.lastUsername)
		this.interval = setInterval(this.checkUsersOnline, 1000 * 60 / 2) // каждые 30 секунд
	},
	beforeUnmount() {
		this.$chat.close()
		this.interval = clearInterval(this.interval)
	},
	methods: {
		getRooms(byUsername = false, username = "") {
			let order = this.order

			if (byUsername !== this.$chat.lastSearch) {
				this.$chat.set({ field: "lastSearch", value: byUsername })
				order = []
			} else
				if (username != this.$chat.lastUsername)
					order = []

			this.$chat.set({ field: "lastUsername", value: username })

			if (this.roomsLeft) {
				this.$chat.set({ field: "roomsLeft", value: null })

				fetch(this.$domain + "getRooms", {
					method: "POST",
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						nin: order,
						byUsername: byUsername,
						username: username
					})
				})
					.then(data => { return data.json() })
					.then(data => {
						if (data) {
							if (data.rooms && data.rooms.length === 25)
								this.$chat.set({ field: "roomsLeft", value: true })

							if (data.rooms && data.users) {
								let rooms = this.rooms

								if (byUsername)
									for (let room of data.rooms) {
										let id

										if (room.user != this.$user.id)
											id = room.user
										else
											id = room.target

										let index = order.indexOf(id)

										if (index === -1)
											order.push(id)
									}
								else
									for (let id of data.ids) {
										let index = order.indexOf(id)

										if (index === -1)
											order.push(id)
									}

								for (let user of data.users)
									rooms[user._id] = user

								for (let room of data.rooms) {
									delete room._id

									if (room.user in rooms) {
										rooms[room.user] = Object.assign({}, rooms[room.user], room)
										continue
									}

									if (room.target in rooms)
										rooms[room.target] = Object.assign({}, rooms[room.target], room)
								}

								this.$chat.set({ field: "rooms", value: rooms })
								this.$chat.set({ field: "order", value: order })
							}
						}
					})
			}
		},

		getMessages(scroll = null, anyway = undefined) {
			const have = this.target.id in this.messages

			if (anyway || !have || this.target.id in this.messages && this.messages[this.target.id].left && (scroll || this.messages[this.target.id].first)) {
				this.$chat.setMessages({ id: +this.target.id, left: null })

				let access = true
				let skip = 0
				if (this.target.id in this.messages) {
					skip = this.messages[this.target.id].skip

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
							if ("accesses" in data) {
								let obj = { user: false, target: false }

								if (data.accesses)
									for (let elem of data.accesses)
										if (elem.user == this.$user.id)
											obj.user = true
										else
											obj.target = true

								this.$chat.setMessages({ id: +this.target.id, access: obj, accessed: true })
							}

							if (data.messages) {
								let left = false
								if (data.messages.length === 25)
									left = true

								this.$chat.setMessages({ id: +this.target.id, messages: data.messages, left: left })
							}
						}
					})
			}
		},

		checkUsersOnline() {
			fetch(this.$domain + "checkOnlineInChat", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					nin: this.order
				})
			})
				.then(data => { return data.json() })
				.then(data => {
					if (data)
						for (let user of data)
							if (user._id in this.rooms)
								this.rooms[user._id].online = user.online
				})
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

@media screen and (max-width: 768px) {
	.wrap {
		padding: 15px;
	}
}

@media screen and (max-width: 450px) {
	.wrap {
		padding: 10px;
	}
}
</style>
