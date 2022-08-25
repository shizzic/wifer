<template>
	<div class="limit" v-click-outside="() => { mode = null }">
        <div class="result" @click="show">{{ limit }}</div>

        <transition name="slide-fade">
            <div v-if="mode">
                <ul class="ul scroll">
                    <template v-for="(elem, index) in list" :key="index">
                        <li v-if="elem !== limit" @click="set(elem)">{{ elem }}</li>
                    </template>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script scoped>
export default {
	name: "Limit",
    props: ["limit"],
    data() {
		return {
			mode: null,
            list: [25, 50, 100]
		}
	},
	methods: {
		set(value) {
			this.$emit("limit", value)
			this.mode  = null
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
.limit {
	z-index: 2;
    position: relative;
	width: 52px;

	margin-bottom: 10px;
}

.result {
	cursor: pointer;
	font-size: 20px;
	color: #fff;
	background-color: #5c9cd8;
	border-radius: 3px;

	display: flex;
	justify-content: center;
	padding: 5px;
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

	margin-top: 7px;
	overflow-y: auto;
}

li {
	font-weight: 400;
	cursor: pointer;
	font-size: 18px;
	color: #949494;
	list-style-type: none;
	background-color: #fff;

	padding: 5px 10px;
}

li:hover {
	background-color: #f9f9f9;
}

li:not(:last-child) {
	border-bottom: 1px solid #b5b5b5;
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
