<template>
    <div class="body" style="z-index: 20;">
        <h3>{{ lang.select }}</h3>

        <div class="wrapper" v-click-outside="() => { mode = null }">
            <div class="result" @click="show">{{ active }}</div>
            <div class="arrow" :class="{ closed: !mode, opened: mode }" @click="show" />

            <transition name="slide-fade">
                <div v-if="mode">
                    <div class="mini" />

                    <ul class="ul scroll">
                        <template v-for="(elem, index) in templates.data" :key="index">
                            <li v-if="index != active" @click="change(index)">{{ index }}</li>
                        </template>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Select",
	props: ["lang", "templates", "active"],
	data() {
		return {
			mode: null
		}
	},
	methods: {
		change(index) {
			this.templates.active = index
			this.mode = null
			this.$emit("data", this.templates.data[this.active])
		},

		show() {
			if (this.mode)
				this.mode = null
			else
				this.mode = true
		}
	}
}
</script>

<style scoped>
.body {
	position: relative;
	margin-top: 30px;
}

h3 {
	color: #4d4d4d;
	font-size: 20px;

	margin-bottom: 10px;
}

.wrapper {
    position: relative;
}

.result {
	cursor: pointer;
	font-size: 20px;
	color: #fff;
	background-color: #5c9cd8;
	border-radius: 4px;
	word-break: break-all;

	padding: 11px 22px;
	padding-right: 45px;
}

.arrow {
	cursor: pointer;
    display: block;

    width: 10px;
    height: 10px;

	position: absolute;
    top: 50%;
    right: 25px;

    margin-top: -3px;

    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    transition: all .3s ease-in-out;
    transform-origin: 50% 0;
}

.closed {
	transform: rotate(45deg) translateY(-50%);
}

.opened {
	top: calc(50% + 5px);
	transform: rotate(-135deg) translateY(-50%);
}

.ul {
	background-color: #fff;
}

ul {
	width: 100%;
	max-height: 300px;
	border: 1px solid #b5b5b5;
    background-color: #fff;
	border-radius: 4px;

	position: absolute;
	left: 0;

	margin-top: 15px;
	overflow-y: auto;
}

li {
	font-weight: 400;
	cursor: pointer;
	font-size: 18px;
	color: #949494;
	list-style-type: none;
	background-color: #fff;
	word-break: break-all;

	padding: 10px 20px;
}

li:hover {
	background-color: #f9f9f9;
}

li:not(:last-child) {
	border-bottom: 1px solid #b5b5b5;
}

.mini {
	z-index: 2;

	width: 7px;
    height: 7px;
	border-top: 1px solid #b5b5b5;
    border-left: 1px solid #b5b5b5;
    background-color: #fff;

	display: block;
	margin-bottom: -4px;

	position: absolute;
    bottom: -14px;
    right: 25px;
    
    transform: rotate(45deg);
    transition: all .4s ease-in-out;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
}

.slide-fade-leave-to, .slide-fade-enter-from {
    transform: translateX(10px);
}
</style>
