<template>
	<div class="footer">
		<textarea
            class="hideScroll" v-model="text" maxlength="1500" :placeholder="input" ref="write"
            @input="autosize($event.target); type($event.target.value);" @keypress.enter="enter"
        />
        <V3Emoji size="small" :recent="true" @click-emoji="text += $event" />
        <img src="/images/send.webp" :class="{ active : text.length > 0 }" @click="send" />
	</div>
</template>

<script scoped>
import V3Emoji from "vue3-emoji"
import "vue3-emoji/dist/style.css"
export default {
	name: "Footer",
    props: ["input", "target"],
    components: {
        V3Emoji
    },
	data() {
		return {
            text: "",
            timeout: null,
            typing: false
		}
	},
    watch: {
        target(_, old) {
            if (old && old > 0 && this.typing)
                this.sendTyping(false, +old)

            this.clearTrash()
            this.text   = ""
            this.typing = false

            if (window.screen.width > 992)
                this.$refs.write.focus()
        }
    },
    mounted() {
        document.addEventListener("visibilitychange", () => {
			if (document.visibilityState === "hidden" && this.typing)
				this.sendTyping()
		})
        
        if (window.screen.width > 992)
            this.$refs.write.focus()
    },
    beforeUnmount() {
        this.clearTrash()

        if (this.target && this.target > 0 && this.typing)
            this.sendTyping()
    },
    methods: {
        type(value) {
            this.text = value

            if (!this.typing && value.length > 0) {
                this.typing = true
                this.sendTyping(true)
            }

            if (this.timeout)
                this.clearTrash()

            if (this.typing)
                this.timeout = setTimeout(this.sendTyping, 5000)
        },

        sendTyping(typing = false, tar = null) {
            let target = +this.target
            if (tar)
                target = tar
            
            this.$chat.sendMessage({ user: +this.$user.id, target: target, api: "typing", typing: typing, avatar: this.$user.avatar, username: this.$user.username})

            if (!typing)
                this.typing = false
        },

        clearTrash() {
            clearTimeout(this.timeout)
            this.timeout = null
        },

        send() {
            let text = this.text.trim()

            if (text.length > 0) {
                if (this.timeout)
                    this.clearTrash()

                this.typing = false
                text        = text.replaceAll(/(\n\n)\n*/g, "\n\n")
                let time    = Math.floor(Date.now() / 1000)
                
                this.$chat.addMessage({ id: +this.target, message: { user: +this.$user.id, target: +this.target, text: text, created_at: time, avatar: this.$user.avatar, username: this.$user.username }})
                this.$chat.sendMessage({ user: +this.$user.id, target: +this.target, api: "message", text: text, created_at: time, avatar: this.$user.avatar, username: this.$user.username })
                
                this.text = ""
                this.$refs.write.style.height = "40px"
            }
        },

        enter(e) {
            if (window.screen.width > 992 && e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault()
                this.send()
            }
        },

        autosize(e) {
            setTimeout(function() {
                if (e.value === "")
                    e.style.height = "40px"
                else {
                    e.style.height = "5px"
                    e.style.height = (e.scrollHeight -1) + "px"
                }
            }, 0)
        }
    }
}
</script>

<style>
#EmojiItem {
    width: 40px;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    padding-bottom: 12px;
    margin-left: 10px;
}

.pollup {
    position: absolute;
    right: -65px;
    bottom: 50px;
    z-index: 5;
    transition: all ease .5s;
    color: var(--V3Emoji-fontColor);
    background-color: var(--V3Emoji-backgroundColor);
    box-shadow: 3px 3px 10px var(--V3Emoji-shadowColor);
    border-radius: 15px;
    overflow: hidden;
}

.pollup .tab-name {
    display: none;
}

.pollup .emoji-container {
    height: auto;
    max-height: 150px;
}

.emoji-container-open-btn {
    font-size: 30px;
}

.pollup .emoji-container-item {
    padding: 7px 0;

    font-size: 18px;
}

@media screen and (max-width: 312px) {
    .pollup {
        left: -150px;
    }
}
</style>

<style scoped>
.footer {
	width: 100%;
    background-color: #e5f3f6;

    display: flex;
    align-items: flex-end;
    padding: 0 20px;
}

textarea {
    font-family: 'PT Sans';
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    letter-spacing: 1px;
    min-height: 42px;
    height: 42px;
    max-height: 150px;
    outline: none;
    border: 1px solid #b0b5b8;
    border-radius: 20px;
    resize: none;

    padding: 10px 20px;
    margin: 10px 0;
    
    overflow-x: hidden;
    overflow-y: auto;
}

textarea::placeholder {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

img {
    width: 36px;
    filter: invert(75%) sepia(5%) saturate(220%) hue-rotate(159deg) brightness(95%) contrast(92%);

    margin-left: 12px;
    margin-bottom: 12px;
}

.active {
    cursor: pointer;
    filter: invert(30%) sepia(78%) saturate(1565%) hue-rotate(192deg) brightness(98%) contrast(89%);
}
</style>
