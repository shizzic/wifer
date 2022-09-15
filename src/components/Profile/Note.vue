<template>
	<div id="note" :class="{ shown: show, closed: !show }"  v-click-outside="close" @mousedown="() => { up = true }" @mouseup="() => { up = null }">
        <textarea class="scroll" maxlength="150" v-model="checked.like.text" @click="show = true" @input="autosize($event)" />
        <div class="buttons">
            <button @click="show = null"><img src="/cancel.webp" /></button>
            <button @click="save"><img src="/save.webp" /></button>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Note",
    props: ["checked", "text", "target"],
    data() {
		return {
            show: null,
			up: null
		}
	},
    methods: {
        save() {
            this.close()

            let form = new FormData()
            form.append("text", this.checked.like.text)
            form.append("target", this.target)
            this.checked.like.is = true

            fetch(this.$domain + "like", {
				method: "POST",
				credentials: "include",
                body: form
			})
                .then(data => {
                    if (data.status === 401) {
                        this.$user.logout(this.$domain)
                        this.$router.push({ name: "search" })
                    }
                })
        },

        autosize(e) {
            this.$emit('value', e.target.value)

            let el = e.target
            setTimeout(function() {
                el.style.height = "5px"
                el.style.height = (el.scrollHeight) + "px"
            }, 0)
        },

        close() {
			if (!this.up)
				this.show = null

			this.up = null
		}
    }
}
</script>

<style scoped>
#note {
    border-radius: 8px;
    width: 400px;

    position: absolute;
    top: 200px;

    display: flex;
    flex-direction: column;

    transition: left .2s linear;
}

textarea {
    outline: none;
    border: none;
    color: #222;
	font-size: 24px;
    width: 100%;
    min-height: 200px;
    max-height: 350px;
	line-height: 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-left: 3px solid #654321;
    border-right: 3px solid #654321;
    border-top: 3px solid #654321;

	background-image: 
    url("/line.webp"), 
    url("/paper.webp");
	background-repeat: repeat, repeat;

    padding: 5px 20px;
    resize: none;
    overflow-x: hidden;
    overflow-y: auto;
}

.buttons {
    height: 100%;
    width: 100%;
    background-color: #333;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    display: flex;
    justify-content: center;

    padding: 10px;
}

span {
    cursor: pointer;
    color: #fff;

    display: inline-block;
    margin: 0 5px;
}

button {
	cursor: pointer;
	text-shadow: 0px -1px 0px #000000;
	border-radius: 6px;
	background-color: #62add6;

    display: flex;
    align-items: center;

    padding: 4px 15px;
}

button:active, button:focus {
	zoom: 1;
	filter: alpha(opacity=80);
	opacity: 0.8;
}

button:first-of-type {
    margin-right: 20px;
}

img {
    width: 24px;
    filter: invert(100%) sepia(0%) saturate(7475%) hue-rotate(91deg) brightness(94%) contrast(107%);
}

.shown {
    left: 0;
}

.closed {
    left: -380px;
}

@media screen and (max-width: 768px) {
    .closed {
        left: -390px;
    }
}

@media screen and (max-width: 420px) {
    #note {
        width: 230px;
        top: 125px;
    }

    .closed {
        left: -220px;
    }
}
</style>
