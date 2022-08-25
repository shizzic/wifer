<template>
	<div class="footer">
		<textarea
            class="hideScroll" v-model="text" maxlength="1500" :placeholder="input" ref="write"
            @input="autosize($event.target); type($event.target.value);" @keypress.enter="enter"
        />
        <img src="/send.webp" :class="{ active : text.length > 0 }" @click="send" />
	</div>
</template>

<script scoped>
export default {
	name: "Footer",
    props: ["input", "target"],
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
            this.$refs.write.focus()
        }
    },
    mounted() {
        window.addEventListener('beforeunload', () => { this.sendTyping() })
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
            if (this.text.length > 0) {
                if (this.timeout)
                    this.clearTrash()

                this.typing = false
                let text    = this.text.trim()
                let time    = Math.floor(Date.now() / 1000)
                
                this.$chat.addMessage({ id: +this.target, message: { user: +this.$user.id, target: +this.target, text: text, created_at: time, avatar: this.$user.avatar, username: this.$user.username }})
                this.$chat.sendMessage({ user: +this.$user.id, target: +this.target, api: "message", text: text, created_at: time, avatar: this.$user.avatar, username: this.$user.username })
                
                this.text = ""
                this.$refs.write.style.height = "40px"
            }
        },

        enter(e) {
            if (e.view.outerWidth > 992 && e.keyCode == 13 && !e.shiftKey) {
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

    margin-left: 20px;
    margin-bottom: 12px;
}

.active {
    cursor: pointer;
    filter: invert(30%) sepia(78%) saturate(1565%) hue-rotate(192deg) brightness(98%) contrast(89%);
}
</style>
