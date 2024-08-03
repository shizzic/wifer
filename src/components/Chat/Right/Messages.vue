<template>
	<div class="wrapper">
		<div class="messages scroll" ref="messages" @scroll="scroll">
			<div v-show="(!$refs.messages || $refs.messages && $refs.messages.scrollTop === 0) && messages.typing"
				class="snippet">
				<div class="pulse-wrapper">
					<div class="dot-pulse" />
				</div>
			</div>

			<div v-for="(message, index) in messages.messages" :key="index" class="message-wrapper">
				<div v-show="date[message.created_at]" class="date-wrapper">
					<div class="date">{{ date[message.created_at] }}</div>
				</div>

				<div class="message" :class="{ me: message.user == $user.id, target: message.user != $user.id, }">
					<div class="text-wrapper">
						<span class="text">{{ message.text }}</span>

						<span class="time">
							{{ getTime(message.created_at) }}
							<img v-show="message.user == $user.id && !message.viewed" src="/images/unreed.webp"
								class="view unseen" />
							<img v-show="message.user == $user.id && message.viewed" src="/images/readed.webp"
								class="view seen" />
						</span>
					</div>

					<div class="new-wrapper" v-show="message.user != $user.id && !message.viewed">
						<div class="new" />
					</div>
				</div>
			</div>
		</div>

		<div v-show="button" class="toBottom" @click="scrollToBottom">
			<img src="/images/toBottom.webp" />
			<span v-show="count > 0" class="count"><span>{{ count }}</span></span>
		</div>
	</div>
</template>

<script scoped>
import { clearTimeout, setTimeout } from 'worker-timers'
export default {
	name: "Messages",
	props: ["target", "messages", "getMessages", "newMessages", "show"],
	data() {
		return {
			button: null,
			scrollTop: 0,
			timeout: null,
			count: 0,
			keys: {},
			date: {}
		}
	},
	watch: {
		show(n) {
			if (n) {
				setTimeout(this.getScroll, 10)

				if (Math.floor(this.$refs.messages.scrollTop) === 0)
					this.read()
			}
		},

		'newMessages': {
			handler(data) {
				this.countNewMessages()
				
				if (data.length > 0 && Math.floor(this.$refs.messages.scrollTop) === 0)
					this.$chat.addNewMessages(this.target)
			},
			deep: true
		},

		'messages.messages': {
			handler() {
				if ((window.innerWidth > 700 || window.innerWidth < 701 && this.show) && this.$refs.messages && Math.floor(this.$refs.messages.scrollTop) === 0)
					this.read()

				this.setDates()
			},
			deep: true
		}
	},
	computed: {
		rooms() {
			return this.$chat.rooms
		}
	},
	beforeMount() {
		this.read()
		this.setDates()
	},
	mounted() {
		this.getScroll()
	},
	beforeUnmount() {
		if (this.timeout) {
			clearTimeout(this.timeout)
			this.timeout = null
		}
	},
	methods: {
		scroll() {
			let sum = Math.abs(this.$refs.messages.scrollTop) + this.$refs.messages.offsetHeight
			let scrolled = this.$refs.messages.scrollHeight - sum

			if (scrolled <= 300) {
				if (this.timeout) {
					clearTimeout(this.timeout)
					this.timeout = null
				}

				this.timeout = setTimeout(this.get, 50)
			}

			this.button = this.$refs.messages.scrollTop > this.scrollTop && this.$refs.messages.scrollTop < -500 ? true : null
			this.scrollTop = this.$refs.messages.scrollTop
			this.$scroll.set({ field: "messages", value: this.scrollTop })
			this.rooms[this.target].scrollTop = this.scrollTop

			if (this.newMessages.length > 0 && Math.floor(this.$refs.messages.scrollTop) === 0)
				this.$chat.addNewMessages(this.target)
		},

		read() {
			let target = null

			for (let message in this.messages.messages) {
				if (this.messages.messages[message].user != this.$user.id && this.messages.messages[message].viewed)
					break

				if (this.messages.messages[message].user != this.$user.id && !this.messages.messages[message].viewed)
					target = this.messages.messages[message].user
			}

			if (target) {
				setTimeout(this.removeBlueDots, 800)
				this.$chat.addRoom({ user: +target, viewed: true }, false, "viewed")
				this.$chat.addRoom({ user: +target, news: 0 }, false, "news")
				this.$chat.sendMessage({ user: +this.$user.id, target: +target, api: "view", avatar: this.$user.avatar, username: this.$user.username })
				this.$nav.takeHearts(1, "messages")
			}

			this.count = 0
		},

		scrollToBottom() {
			this.$chat.addNewMessages(this.target)
		},

		getScroll() {
			if (this.$refs.messages)
				this.$refs.messages.scrollTop = this.rooms[this.target] && this.rooms[this.target].scrollTop < 0 ? this.rooms[this.target].scrollTop : this.$scroll.messages
		},

		countNewMessages() {
			let count = 0

			for (let message of this.newMessages)
				if (message.user != this.$user.id && !message.viewed)
					++count

			this.count = count
		},

		removeBlueDots() {
			for (let message in this.messages.messages) {
				if (this.messages.messages[message].user != this.$user.id && this.messages.messages[message].viewed)
					break

				if (this.messages.messages[message].user != this.$user.id && !this.messages.messages[message].viewed)
					this.messages.messages[message].viewed = true
			}
		},

		getTime(time) {
			let date = new Date(time * 1000)
			return date.getHours() + ':' + ("0" + date.getMinutes()).substr(-2)
		},

		getDate(time) {
			let date = new Date(time * 1000)
			let key = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()

			if (!this.keys[key]) {
				this.date[time] = key
				this.keys[key] = time
			}
		},

		setDates() {
			this.date = {}
			this.keys = {}

			for (let i = this.messages.messages.length - 1; i > -1; i--)
				this.getDate(this.messages.messages[i].created_at)
		},

		get() {
			this.getMessages(true)
		}
	}
}
</script>

<style scoped>
.wrapper {
	position: relative;
	width: 100%;
	height: 100%;

	overflow: hidden;
}

.messages {
	width: 100%;
	height: 100%;
	background-color: #e5f3f6;

	display: flex;
	flex-direction: column-reverse;
	padding: 0 20px;
	padding-top: 10px;

	overflow-x: hidden;
}

.message-wrapper {
	width: 100%;

	display: flex;
	flex-direction: column;
}

.message-wrapper:not(:first-of-type) {
	margin-bottom: 8px;
}

.message {
	position: relative;
	align-self: start;
	color: #fff;
	max-width: 70%;
	border-radius: 4px;

	display: flex;
	padding: 8px 18px;
}

.text-wrapper {
	width: 100%;
	line-height: 20px;
}

.text {
	display: inline;
	font-size: 18px;
	white-space: pre-wrap;
}

.time {
	font-size: 10px;
	float: right;

	position: relative;
	right: 0;
	bottom: -8px;

	padding-left: 10px;
}

.date-wrapper {
	width: 100%;

	display: flex;
	justify-content: center;

	margin: 20px 0;
}

.date {
	color: #fff;
	background-color: #1d1d1d9e;
	border-radius: 20px;
	font-weight: 700;

	padding: 5px 10px;
}

.view {
	width: 12px;

	margin-left: 4px;
	margin-bottom: -2px;
}

.unseen {
	width: 9px;
	filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(160deg) brightness(100%) contrast(102%);
}

.seen {
	filter: invert(34%) sepia(59%) saturate(1893%) hue-rotate(219deg) brightness(99%) contrast(99%);
	margin-bottom: -4px;
}

.toBottom {
	cursor: pointer;
	background-color: #fff;
	border-radius: 50%;

	position: absolute;
	right: 25px;
	bottom: 10px;

	display: flex;
	align-items: center;
}

.toBottom:hover {
	background-color: rgb(242, 242, 242);
}

.toBottom:active {
	background-color: rgb(198, 198, 198);
}

.toBottom img {
	width: 40px;
}

.count {
	width: 100%;
	color: #fff;

	position: absolute;
	top: -15px;

	display: flex;
	justify-content: center;
	align-items: center;
}

.count span {
	background-color: rgb(93, 97, 212);
	border-radius: 30px;

	padding: 0.5px 5.5px;
}

.me {
	background-color: #79c3c4;
	margin-left: auto;
}

.target {
	background-color: #a8b3b5;
}

.new-wrapper {
	width: 100%;
	height: 100%;

	position: absolute;
	right: 0;
	top: 0;

	display: flex;
	align-items: center;
}

.new {
	border-radius: 50%;
	background-color: #5181b8;

	position: absolute;
	right: -17px;

	padding: 4px;
}

.snippet {
	position: relative;
	box-shadow: 0 .4rem .8rem -.1rem rgba(0, 32, 128, .1), 0 0 0 1px #f0f2f7;
	border-radius: .25rem;
}

.pulse-wrapper {
	background-color: #dae4e2;
	border-radius: 24px;

	display: inline-block;
	padding: 10px 25px;
}

.dot-pulse {
	position: relative;
	left: -9999px;
	width: 10px;
	height: 10px;
	border-radius: 5px;
	background-color: #b1bbbb;
	color: #b1bbbb;
	box-shadow: 9999px 0 0 -5px #b1bbbb;
	animation: dotPulse 1.5s infinite linear;
	animation-delay: .25s;
}

.dot-pulse::before,
.dot-pulse::after {
	content: '';
	display: inline-block;
	position: absolute;
	top: 0;
	width: 10px;
	height: 10px;
	border-radius: 5px;
	background-color: #b1bbbb;
	color: #b1bbbb;
}

.dot-pulse::before {
	box-shadow: 9984px 0 0 -5px #b1bbbb;
	animation: dotPulseBefore 1.5s infinite linear;
	animation-delay: 0s;
}

.dot-pulse::after {
	box-shadow: 10014px 0 0 -5px #b1bbbb;
	animation: dotPulseAfter 1.5s infinite linear;
	animation-delay: .5s;
}

@keyframes dotPulseBefore {
	0% {
		box-shadow: 9984px 0 0 -5px #b1bbbb;
	}

	30% {
		box-shadow: 9984px 0 0 2px #b1bbbb;
	}

	60%,
	100% {
		box-shadow: 9984px 0 0 -5px #b1bbbb;
	}
}

@keyframes dotPulse {
	0% {
		box-shadow: 9999px 0 0 -5px #b1bbbb;
	}

	30% {
		box-shadow: 9999px 0 0 2px #b1bbbb;
	}

	60%,
	100% {
		box-shadow: 9999px 0 0 -5px #b1bbbb;
	}
}

@keyframes dotPulseAfter {
	0% {
		box-shadow: 10014px 0 0 -5px #b1bbbb;
	}

	30% {
		box-shadow: 10014px 0 0 2px #b1bbbb;
	}

	60%,
	100% {
		box-shadow: 10014px 0 0 -5px #b1bbbb;
	}
}

@media screen and (max-width: 768px) {
	.message {
		max-width: 85%;
	}
}
</style>
