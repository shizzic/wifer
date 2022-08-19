<template>
	<div class="footer">
		<textarea
            class="hideScroll" v-model="text" maxlength="1500" :placeholder="input" 
            @input="autosize($event)" @keypress.enter="enter"
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
            text: ""
		}
	},
    watch: {
        target() {
            this.text = ""
        }
    },
    methods: {
        send() {
            if (this.text.length > 0) {
                let text = this.text.trim()
                let time = Math.floor(Date.now() / 1000)
                this.$chat.sendMessage({ user: +this.$user.id, target: this.target, api: "message", text: text, created_at: time})
                this.$chat.addMessage({ id: this.target, message: { user: +this.$user.id, text: text, created_at: time }})
                this.text = ""
            }
        },

        enter(e) {
            if (e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault()
                this.send()
            }
        },

        autosize(e) {
            let el = e.target
            setTimeout(function() {
                el.style.height = "5px"
                el.style.height = (el.scrollHeight) + "px"
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
    color: #5C5C5C;
    font-size: 18px;
    width: 100%;
    min-height: 40px;
    height: 40px;
    max-height: 150px;
    outline: none;
    border: 1px solid #b0b5b8;
    border-radius: 20px;
    resize: none;

    padding: 8px 20px 10px;
    margin: 10px 0;
    
    overflow-x: hidden;
    overflow-y: auto;
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
