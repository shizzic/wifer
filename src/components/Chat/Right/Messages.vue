<template>
	<div class="some">
		<div class="messages scroll" ref="messages" @scroll="scroll">
			<div v-for="(message, index) in messages.messages" :key="index" class="message-wrapper">
				<div class="message" :class="{ me: message.user == $user.id, target: message.user != $user.id, }">
					<span class="text">{{ message.text }}</span>
					<span class="date">
						{{ getDate(message.created_at) }}
						<img src="/readed.webp" class="view" :class="{ unseen: !message.viewed, seen: message.viewed }" />
					</span>
				</div>
			</div>
		</div>
		
		<div v-show="button" class="toBottom" @click="$refs.messages.scrollTop = 0"><img src="/toBottom.webp" /></div>
	</div>
</template>

<script scoped>
export default {
	name: "Messages",
	props: ["messages", "getMessages"],
	data() {
		return {
			button: null,
			scrollTop: 0,
			timeout: null
		}
	},
	watch: {
		'messages.messages': {
			handler() {
				if (Math.floor(this.$refs.messages.scrollTop) == 0)
					this.read()
			},
			deep: true
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

			if (target)
				this.$chat.sendMessage({ user: +this.$user.id, target: +target, api: "view" })
		},

		get() {
			this.getMessages(true)
		},

		getDate(time) {
            let date = new Date(time * 1000)
            let hours = date.getHours()
            let minutes = "0" + date.getMinutes()
            let formattedTime = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + hours + ':' + minutes.substr(-2)
            return formattedTime
        }
	}
}
</script>

<style scoped>
.some {
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
	border-radius: 6px;

	display: flex;
	flex-direction: column;

	padding: 8px 18px;
}

.text {
	font-size: 18px;
	word-break: break-all;
}

.date {
	font-size: 12px;

	display: flex;
	align-items: center;

	margin-top: 8px;
	margin-left: auto;
	margin-right: 8px;
}

.view {
	width: 12px;

	position: absolute;
	right: 6px;
	bottom: 9px;
}

.unseen {
	filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(160deg) brightness(100%) contrast(102%);
}

.seen {
	filter: invert(34%) sepia(59%) saturate(1893%) hue-rotate(219deg) brightness(99%) contrast(99%);
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
	background-color: rgb(228, 225, 225);
}

.toBottom img {
	width: 36px;
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

/*
#dae4e2
back for typing

#b1bbbb
color for typing */
</style>
