<template>
	<div id="sort" v-click-outside="() => { mode = null }">
        <div class="result" @click="show">{{ lang[sort] }}</div>

        <transition name="slide-fade">
            <div v-if="mode">
                <ul class="ul scroll">
                    <template v-for="(elem, index) in list" :key="index">
                        <li v-if="elem !== sort" @click="set(elem)">{{ lang[elem] }}</li>
                    </template>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script scoped>
export default {
	name: "Sort",
    props: ["data", "sort", "lang", "create", "getUsers"],
    data() {
		return {
			mode: null,
            list: ["last_time", "created_at"]
		}
	},
	methods: {
		set(value) {
			this.data.data[this.data.active].sort = value
			this.mode 							  = null
			this.create()
			this.getUsers()
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
#sort {
	z-index: 2;
    position: relative;
	margin-bottom: 10px;
}

.result {
	cursor: pointer;
	font-size: 20px;
	color: #fff;
	background-color: #5c9cd8;
	border-radius: 3px;
	word-break: normal;

	padding: 5px 17px;
}

.ul {
	background-color: #fff;
}

ul {
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
	word-break: break-all;

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
