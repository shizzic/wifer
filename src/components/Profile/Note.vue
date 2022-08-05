<template>
	<div id="note" :class="{ shown: note, closed: !note }" v-click-outside="() => { $emit('note', null) }">
        <textarea maxlength="150" v-model="checked.like.text" @click="$emit('note', true)" @input="autosize($event)" />
        <div class="buttons">
            <button @click="$emit('note', null)">{{ lang.cancel[l] }}</button>
            <button @click="save">{{ lang.save[l] }}</button>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Note",
    props: ["checked", "text", "note", "target", "lang", "l"],
    methods: {
        save() {
            this.$emit('note', null)

            let form = new FormData()
            form.append("text", this.checked.like.text)
            form.append("target", this.target)
            fetch(this.$domain + "note", {
				method: "POST",
				credentials: "include",
                body: form
			})
        },

        autosize(e) {
            this.$emit('value', e.target.value)

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
#note {
    background-color: #fff;
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    position: absolute;
    top: 200px;

    transition: left .2s linear;
}

textarea {
    outline: none;
    border: none;
    color: #222;
	font-size: 24px;
	width: 400px;
    min-height: 200px;
	line-height: 40px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

	background-image: 
    url("/line.webp"), 
    url("/paper.webp");
	background-repeat: repeat, repeat;

    padding: 5px 20px;
    resize: none;
    overflow: hidden;
}

.buttons {
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
	font-weight: 700;
	font-size: 20px;
	color: #fff;
	text-shadow: 0px -1px 0px #000000;
	border-radius: 8px;
	background-color: #62add6;

    padding: 5px 15px;
}
button:active, button:focus {
	zoom: 1;
	filter: alpha(opacity=80);
	opacity: 0.8;
}

button:first-of-type {
    margin-right: 25px;
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
        top: 125px;
    }

    .closed {
        left: -260px;
    }

    textarea {
        width: 270px;
    }
}
</style>
