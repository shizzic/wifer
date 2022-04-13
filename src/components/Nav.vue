<template>
	<nav>
		<div id="links">
			<div v-for="(elem, key) in list" :key="key" class="wrap">
				<router-link class="router" :class="{ 'checked': checked === key }" :to="{ name: elem['name'] }" @click="checked = key">
					{{ elem["title"][lang] }}
				</router-link>
				<div class="border" :class="{ 'checked': checked === key }" />
			</div>
		</div>
	</nav>
</template>

<script scoped>
import { langJS } from "@/store/lang"
import { navJS } from "@/store/nav"
export default {
	name: 'Nav',
	setup() {
		const lang = langJS()["lang"];
		const list = navJS()["list"];

		return {
			lang,
			list
		}
	},
	data() {
		return {
			checked: null
		}
	},
	methods: {
	}
}
</script>

<style scoped>
nav {
	width: 100%;
	height: 7%;

	display: flex;
	justify-content: space-around;
}

#links {
	width: 30%;
	display: flex;
	justify-content: space-between;
}

.router {
	cursor: pointer;
	text-decoration: none;
	color: #8C8D99;
	font-size: 16px;
	border-radius: 12px;
	
	display: flex;
	justify-content: center;
	align-items: center;

	height: 95%;
	width: 100%;
	padding: 0 10px;

	transition: background-color .2s;
}

.router:hover {
	background-color: aliceblue;
}

.border {
	width: 0;
    height: 5%;
    background-color: #000;
    transition: width .2s;
}

.checked {
	color: #000;
	width: 100%;
}
</style>
