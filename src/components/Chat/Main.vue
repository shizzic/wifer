<template>
	<div class="wrap">
		<div v-if="socket" id="chat">
			<Left v-if="order.length > 0" :search="search[l]" :chats="chats[l]" :order="order" :rooms="rooms" :target="target" :getRooms="getRooms"
			:show="show" />
			<NoneRooms v-else :lang="chats[l]" :show="show" />

			<Right v-if="target && target.id in messages" :target="target" :input="input[l]" :messages="messages[target.id]" 
			:blur="blur[l]" :getMessages="getMessages" :rooms="rooms" :show="show" />
			<NoneMessages v-else :lang="none[l]" :show="show" />
		</div>
	</div>
</template>

<script scoped>
import Left from "@/components/Chat/Left/Main.vue"
import Right from "@/components/Chat/Right/Main.vue"
import NoneRooms from "@/components/Chat/Left/None.vue"
import NoneMessages from "@/components/Chat/Right/None.vue"
import { chatJS } from "@/store/chat"
export default {
	name: "Chat",
	props: ["l"],
	components: {
		Left,
		Right,
		NoneRooms,
		NoneMessages
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
			interval: null
		}
	},
	computed: {
		show() { return this.$chat.show },
		socket() { return this.$chat.socket },
		target() { return this.$chat.target },
		order() { return this.$chat.order },
		rooms() { return this.$chat.rooms },
		roomsLeft() { return this.$chat.roomsLeft },
		messages() { return this.$chat.messages }
	},
	watch: {
		target(target) {
			if (target)
				this.getMessages()
		}
	},
	beforeMount() {
		if (this.target)
			this.getMessages()

		this.getRooms()
		this.interval = setInterval(this.checkUsersOnline, 1000 * 60 * 3)
	},
	beforeUnmount() {
		clearInterval(this.interval)
		this.interval = null
	},
	methods: {
		getRooms() {
			if (this.roomsLeft) {
				this.$chat.set({ field: "roomsLeft", value: null })

				fetch(this.$domain + "getRooms", {
					method: "POST",
					credentials: "include",
					body: JSON.stringify({
						nin: this.order
					})
				})
					.then(data => { return data.json() })
					.then(data => {
						if (data) {
							if (data.ids.length === 25)
								this.$chat.set({ field: "roomsLeft", value: true })

							let order = this.order

							for (let id of data.ids) {
								let index = order.indexOf(id)

								if (index === -1)
									order.push(id)
							}

							let rooms = this.rooms

							if (data.rooms && data.users) {
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
							}

							this.$chat.set({ field: "rooms", value: rooms })
							this.$chat.set({ field: "order", value: order })
						}
				})
			}
		},

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
							if ("accesses" in data) {
								let obj = { user: false, target: false }

								if (data.accesses)
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
								
								this.$chat.setMessages({ id: +this.target.id, messages: data.messages, left: left  })
							}
						}
					})
			}
		},

		checkUsersOnline() {
			fetch(this.$domain + "checkOnlineInChat", {
				method: "POST",
				credentials: "include",
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
