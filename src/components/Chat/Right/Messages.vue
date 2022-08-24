<template>
	<div class="wrapper">
		<div class="messages scroll" ref="messages" @scroll="scroll">
			<div v-show="messages.typing" class="snippet">
				<div class="pulse-wrapper"><div class="dot-pulse" /></div>
			</div>

			<div v-for="(message, index) in messages.messages" :key="index" class="message-wrapper" @mouseover="getDate(message.created_at)">
				<div class="message" :class="{ me: message.user == $user.id, target: message.user != $user.id, }">
					<div class="text-wrapper">
						<span class="text">{{ message.text }}</span>

						<span class="time">
							{{ getTime(message.created_at) }}
							<img v-show="message.user == $user.id && !message.viewed" src="/unreed.webp" class="view unseen" />
							<img v-show="message.user == $user.id && message.viewed" src="/readed.webp" class="view seen" />
						</span>
					</div>
				</div>
			</div>
		</div>

		<div v-show="date.date" class="date-wrapper"><div class="date">{{ date.date }}</div></div>
		
		<div v-show="button" class="toBottom" @click="$refs.messages.scrollTop = 0">
			<img src="/toBottom.webp" />
			<span v-show="count > 0" class="count"><span>{{ count }}</span></span>
		</div>
	</div>
</template>

<script scoped>
export default {
	name: "Messages",
	props: ["target", "messages", "getMessages"],
	data() {
		return {
			button: null,
			scrollTop: 0,
			timeout: null,
			count: 0,
			date: {
				id: null,
				date: null
			},
			dateTimer: null
		}
	},
	watch: {
		target() {
			this.$refs.messages.scrollTop = 0
		},

		'messages.messages': {
			handler() {
				if (Math.floor(this.$refs.messages.scrollTop) === 0)
					this.read()
				else
					this.countNewMessages()
			},
			deep: true
		}
	},
	beforeUnmount() {
		if (this.timeout) {
			clearTimeout(this.timeout)
			this.timeout = null
		}

		if (this.dateTimer) {
			clearTimeout(this.dateTimer)
			this.dateTimer = null
		}
	},
	methods: {
		scroll() {
			let sum = Math.abs(this.$refs.messages.scrollTop) + this.$refs.messages.offsetHeight
			let scrolled = this.$refs.messages.scrollHeight - sum

			if (scrolled < 300) {
				if (this.timeout) {
					clearTimeout(this.timeout)
					this.timeout = null
				}
				
				this.timeout = setTimeout(this.get, 50)
			}

			if (this.$refs.messages.scrollTop > this.scrollTop && this.$refs.messages.scrollTop < -500)
				this.button = true
			else
				this.button = null

			this.scrollTop = this.$refs.messages.scrollTop

			if (Math.floor(this.$refs.messages.scrollTop) === 0)
				this.read()
		},

		read() {
			let target = null

			for (let message in this.messages.messages) {
				if (this.messages.messages[message].user != this.$user.id && this.messages.messages[message].viewed)
					break

				if (this.messages.messages[message].user != this.$user.id && !this.messages.messages[message].viewed) {
					this.messages.messages[message].viewed = true
					target = this.messages.messages[message].user
				}
			}

			if (target) {
				this.$chat.addRoom({ user: +target, viewed: true }, false, "viewed")
				this.$chat.sendMessage({ user: +this.$user.id, target: +target, api: "view", avatar: this.$user.avatar, username: this.$user.username })
				this.$nav.takeHearts(1, "messages")
			}
			
			this.count = 0
		},

		countNewMessages() {
			let count = 0

			for (let message in this.messages.messages) {
				if (this.messages.messages[message].user != this.$user.id && this.messages.messages[message].viewed)
					break

				if (this.messages.messages[message].user != this.$user.id && !this.messages.messages[message].viewed)
					++count
			}

			this.count = count
		},

		get() {
			this.getMessages(true)
		},

		getTime(time) {
            let date = new Date(time * 1000)
            return date.getHours() + ':' + ("0" + date.getMinutes()).substr(-2)
        },

		getDate(time) {
			if (this.date.id != time) {
				let date  	   = new Date(time * 1000)
				this.date.id   = time
				this.date.date = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()

				if (this.dateTimer) {
					clearTimeout(this.dateTimer)
					this.dateTimer = null
				}
				
				this.dateTimer = setTimeout(this.clearDate, 5000)
			}
        },

		clearDate() {
            this.date.date = null
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
	overflow-y: auto;
}

.message-wrapper {
	width: 100%;

	display: flex;
}

.message-wrapper:not(:first-of-type) {
	margin-bottom: 8px;
}

.message {
	position: relative;
	align-self: start;
	color: #fff;
	max-width: 70%;
	border-radius: 24px;

	display: flex;

	padding: 7px 18px;
}

.text {
	display: inline;
	font-size: 18px;
	word-break: break-all;
	vertical-align: middle;
}

.time {
	font-size: 10px;
	float: right;

	position: relative;
	right: -2px;
	bottom: -10px;

	padding-left: 10px;
}

.date-wrapper {
	width: 100%;

	position: absolute;
	top: 10px;
	left: 0;

	display: flex;
	justify-content: center;
}

.date {
	color: #5C5C5C;
	background-color: #fff;
	border-radius: 20px;

	padding: 5px 10px;
}

.view {
	width: 12px;

	margin-left: 8px;
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
	border-radius: 2px;

	display: flex;
	padding: 0 4px;
}

.me {
	background-color: #79c3c4;
	margin-left: auto;
}

.target {
	background-color: #a8b3b5;
}

@media screen and (max-width: 763px) {
    .message {
		max-width: 80%;
	}
}

.snippet {
    position: relative;
    box-shadow: 0 .4rem .8rem -.1rem rgba(0, 32, 128, .1), 0 0 0 1px #f0f2f7;
    border-radius: .25rem;
}

.pulse-wrapper {
	background-color: #dae4e2;
	border-radius: 20px;

	display: inline-block;
	padding: 10px 4%;
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

.dot-pulse::before, .dot-pulse::after {
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
	60%, 100% {
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
	60%, 100% {
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
	60%, 100% {
		box-shadow: 10014px 0 0 -5px #b1bbbb;
	}
}
</style>
