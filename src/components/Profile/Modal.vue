<template>
	<div class="modal">
        <div class="block" v-click-outside="close" @mousedown="() => { up = true }" @mouseup="() => { up = null }">
            <div class="close" @click="$emit('close')" />
            <img :src="'/' + modal + '.webp'" />
            <div class="text">
                <span v-for="(line, index) in text" :key="index">{{ line }}</span>
            </div>
            <div class="btn" @click="make">{{ submit }}</div>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Modal",
    props: ["text", "modal", "submit", "success", "l"],
    data() {
		return {
			up: null
		}
	},
    methods: {
        deactivate() {
            this.$toast.success(this.success[this.modal][this.l])
            this.$user.setID(null)

            fetch(this.$domain + "deactivate", {
				method: "PUT",
				credentials: "include"
			})

            this.$router.push({ name: "search" })
        },

        logout() {
            this.$toast.success(this.success[this.modal][this.l])
            this.$user.logout(this.$domain)
            this.$router.push({ name: "search" })
        },

        // trigger specific function
        make() {
            this.$emit("close")

            if (typeof this[this.modal] === "function")
                this[this.modal]()
        },

        close() {
			if (!this.up)
				this.$emit('close')

			this.up = null
		}
    }
}   
</script>

<style scoped>
.modal {
	background-color: rgba(0, 0, 0, 0.6);
	
	width: 100%;
	height: 100%;
	padding: 30px;

	position: absolute;
	top: 0;
	left: 0;

	display: flex;
	justify-content: center;
    align-items: center;
}

.block {
    position: relative;
    background-color: #fff;
    border-radius: 20px;

    width: 100%;
    min-width: 250px;
    max-width: 450px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

span {
    display: inline-block;
    font-size: 17px;
}

span:not(:last-of-type) {
    margin-bottom: 5px;
}

img {
    width: 50px;
    margin: 40px 0 30px;
}

.btn {
    cursor: pointer;
    background-color: #ed6755;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: white;
    width: 175px;

    display: flex;
    justify-content: center;
    padding: 10px 4px;
    margin-top: 30px;

    box-shadow: 0px 6px 18px -5px rgba(237, 103, 85, 1);
}

.btn:hover {
    background-color: #e05c4a;
}

.btn:active {
    background-color: #cf5545;
}

.close {
    cursor: pointer;
    width: 24px;
    height: 24px;
    opacity: 0.3;

    position: absolute;
    right: 20px;
    top: 20px;
}

.close:hover {
    opacity: 1;
}

.close:before, .close:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
}

.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>
