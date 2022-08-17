<template>
	<div class="some">
		<div class="messages scroll" ref="messages" 
			@scroll="scroll" @wheel="wheel" v-touch:swipe.top="wheel" v-touch:swipe.bottom="buttonClose"
		>
			<div v-for="(message, index) in messages.messages" :key="index" class="message-wrapper">
				<div class="message" :class="{ me: message.user == $user.id, target: message.user != $user.id, }">
					<span class="text">{{ message.text }}</span>
					<span class="date">{{ getDate(message.created_at) }}</span>
				</div>
			</div>
		</div>
		
		<div v-show="button" class="toBottom" @click="$refs.messages.scrollTop = 0; button = null;"><img src="/toBottom.webp" /></div>
	</div>
</template>

<script scoped>
export default {
	name: "Messages",
	props: ["messages", "getMessages"],
	data() {
		return {
			button: null,
			sum: 0
		}
	},
	methods: {
		getDate(time) {
            let date = new Date(time * 1000)
            let hours = date.getHours()
            let minutes = "0" + date.getMinutes()
            let formattedTime = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + hours + ':' + minutes.substr(-2)
            return formattedTime
        },

		scroll() {
			let sum = Math.abs(this.$refs.messages.scrollTop) + this.$refs.messages.offsetHeight
			let scrolled = this.$refs.messages.scrollHeight - sum

			if (scrolled < 500)
				this.getMessages(true)

			this.sum = sum
		},

		wheel(e) {
			let top = this.sum - this.$refs.messages.clientHeight
			let bottom = null
			if (!e.deltaY || e.deltaY && e.deltaY > 0)
				bottom = true

			if (top > 500 && bottom) {
				this.button = true
			} else
				this.button = null
		},

		buttonClose() {
			this.button = null
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

	display: inline-block;
	margin-top: 8px;
	margin-left: auto;
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
