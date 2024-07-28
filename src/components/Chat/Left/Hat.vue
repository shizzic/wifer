<template>
	<div class="hat">
		<div class="search">
            <img src="/images/search.webp" class="icon" />
            <input maxlength="20" v-model="username" :placeholder="search" @input="input($event.target.value)" />
        </div>
        <img src="/images/back.webp" class="back" @click="$chat.set({ field: 'show', value: true })" />
	</div>
</template>

<script scoped>
import { clearTimeout, setTimeout } from 'worker-timers'

export default {
	name: "Hat",
    props: ["search", "getRooms"],
    data() {
		return {
			username: "",
            timer: null
		}
	},
    mounted() {
        this.username = this.$chat.lastUsername
    },
    beforeUnmount() {
        this.clearTimer()
    },
    methods: {
        input(value) {
            this.clearTimer()

            if (value === "")
                this.timer = setTimeout(this.getByOrder, 1000)
            else
                if (value != this.$chat.lastUsername)
                    this.timer = setTimeout(this.getByUsername, 1000)
        },

        getByOrder() {
            this.$emit("top")
            this.$chat.set({ field: "roomsLeft", value: true })
            this.getRooms()
        },

        getByUsername() {
            this.$emit("top")
            this.$chat.set({ field: "roomsLeft", value: true })
            this.getRooms(true, this.username)
        },

        clearTimer() {
            clearTimeout(this.timer)
            this.timer = null
        }
    }
}
</script>

<style scoped>
.hat {
	width: 100%;

    display: flex;
    align-items: center;
    padding: 15px 15px 10px;

	overflow: hidden;
}

.search {
    width: 100%;
    border: 1px solid #b0b5b8;
    border-radius: 20px;

    display: flex;
    align-items: center;

    padding-left: 10px;
}

.icon {
    width: 16px;
    filter: invert(86%) sepia(10%) saturate(117%) hue-rotate(159deg) brightness(85%) contrast(84%);
}

input {
    color: #5C5C5C;
    font-size: 16px;
    letter-spacing: 1px;
    outline: none;
    border: none;
    border-radius: 20px;
    width: 100%;

    padding: 10px;
}

.back {
    cursor: pointer;
    width: 34px;
    transform: rotate(180deg);

    display: none;
    margin-left: 15px;
}

@media screen and (max-width: 700px) {
    .back {
        display: block;
    }
}
</style>
