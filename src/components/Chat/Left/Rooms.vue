<template>
	<div class="rooms hideScroll" ref="rooms" @scroll="scroll">
		<div v-for="(user_id, index) in order" :key="index" class="room" 
            :class="{ active: target && target.id == user_id, inactive: !target || target && target.id != user_id }"
            @click="set(rooms[user_id])"
        >
            <div class="icon-wrapper">
                <img v-if="rooms[user_id].avatar" :src="$file('images', user_id, 'avatar.webp')" class="icon" />
                <img v-else src="/images/avatar.webp" class="icon">

                <div v-show="rooms[user_id].online" class="online" />
            </div>

            <div class="right-wrapper">
                <div class="top-wrapper">
                    <span class="username">{{ rooms[user_id].username }}</span>
                    <span class="date">{{ getDate(rooms[user_id].created_at) }}</span>
                </div>
                <div class="message">
                    <div v-if="rooms[user_id].user == $user.id && !rooms[user_id].typing" class="view-wrapper">
                        <img v-show="!rooms[user_id].viewed" src="/images/unreed.webp" class="view unseen" />
                        <img v-show="rooms[user_id].viewed" src="/images/readed.webp" class="view seen" />
                    </div>
                    <template v-else>
                        <div v-show="rooms[user_id].typing" class="snippet">
                            <div class="pulse-wrapper"><div class="dot-pulse" /></div>
                        </div>
                    </template>

                    <span v-show="!rooms[user_id].typing" class="text">{{ rooms[user_id].text }}</span>
                    <div class="new-wrapper">
                        <div v-show="rooms[user_id].news > 0 && !rooms[user_id].viewed" class="new">
                            {{ rooms[user_id].news }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script scoped>
export default {
	name: "Rooms",
	props: ["order", "rooms", "target", "getRooms", "changeTop"],
    data() {
		return {
			timeout: null
		}
	},
    watch: {
        changeTop() {
			if (this.$refs.rooms)
                this.$refs.rooms.scrollTop = 0
		}
    },
    mounted() {
        if (this.$refs.rooms)
			this.$refs.rooms.scrollTop = this.$scroll.rooms
    },
    methods: {
        set(user) {
            this.$chat.set({ field: "show", value: true})
            
            if (!this.target || this.target && user._id != this.target.id) {
                this.$scroll.set({ field: "messages", value: 0 })
                this.$chat.set({ field: "target", value: { id: +user._id, avatar: user.avatar, username: user.username } })
            }
        },

        scroll() {
            this.$scroll.set({ field: "rooms", value: this.$refs.rooms.scrollTop })
			let sum = Math.abs(this.$refs.rooms.scrollTop) + this.$refs.rooms.offsetHeight
			let scrolled = this.$refs.rooms.scrollHeight - sum

			if (scrolled < 300) {
				if (this.timeout) {
					clearTimeout(this.timeout)
					this.timeout = null
				}
				
				this.timeout = setTimeout(this.getRooms(this.$chat.lastSearch, this.$chat.lastUsername), 50)
			}
		},

        getDate(time) {
            let today = new Date().getDate()
            let date = new Date(time * 1000)
            let dateDay = date.getDate()

            if (today === dateDay)
                return date.getHours() + ":" + ("0" + date.getMinutes()).substr(-2)
            else
                return dateDay + "." + (date.getMonth() + 1) + "." + date.getFullYear()
        }
    }
}
</script>

<style scoped>
.rooms {
	width: 100%;
	height: 100%;

    display: flex;
    flex-direction: column;
    padding: 0 10px;

    overflow-x: hidden;
    overflow-y: auto;
}

.room {
    cursor: pointer;
    width: 100%;
    border-radius: 4px;

    display: flex;
    align-items: center;

    padding: 10px;
    margin-bottom: 5px;

    transition: background-color .1s linear;
}

.icon-wrapper {
    position: relative;

    display: flex;
    align-items: center;

    margin-right: 12px;
}

.icon {
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
    border-radius: 50%;
    object-fit: cover;
}

.right-wrapper {
    width: 100%;
    min-width: 0;
    height: 100%;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.top-wrapper {
    width: 100%;

    display: flex;
    justify-content: space-between;
}

.username {
    color: #0a0a0a;
    font-size: 19px;
     
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.date {
    color: #a2aeb8;
    font-size: 11px;

    margin-left: 5px;
}

.message {
    position: relative;
    min-height: 17.2px;

    display: flex;
    align-items: center;
}

.text {
    color: #67717a;
    font-size: 12px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.view-wrapper {
    position: relative;

    display: flex;
    align-items: center;

    margin-right: 20px;
}

.view {
	width: 12px;

    position: absolute;
    bottom: -7px;
}

.unseen {
	filter: invert(62%) sepia(7%) saturate(20%) hue-rotate(347deg) brightness(94%) contrast(92%);
}

.seen {
	filter: invert(34%) sepia(59%) saturate(1893%) hue-rotate(219deg) brightness(99%) contrast(99%);
}

.active {
    background-color: #e5effa !important;
}

.inactive:hover {
    background-color: #f0f2f3;
}

.online {
    border: 2px solid #fff;
    border-radius: 50%;
    background-color: rgb(75, 179, 75);

    padding: 4px;

    position: absolute;
    right: 0;
    bottom: 0;
}

.new-wrapper {
    margin-left: auto;
}

.new {
    color: #fff;
    font-size: 14px;
    border-radius: 28px;
    background-color: #5181b8;

    padding: 1px 5.5px;
    margin-left: 10px;
}

.snippet {
    border-radius: .25rem;

    position: absolute;
    left: 15px;
    bottom: -14px;
}

.pulse-wrapper {
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
