<template>
	<nav>
		<div v-for="(elem, key) in list" :key="key">
			<router-link class="router" :class="{ 'checked': checked === key }" :to="{ name: elem['name'] }" @click="checked = key">
				{{ elem["title"][lang] }}
			</router-link>
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

div {
	border: 1px solid;
	display: flex;
	align-items: center;
}

.router {
	text-decoration: none;
	color: #8C8D99;

	display: block;
	height: 100%;
	border: 1px solid;
}

.router::after {
    content: '';
    display: block;
    width: 0;
    height: 2.5px;
    background-color: #000;
    transition: width .2s;
}

.router:hover::after {
    width: 100%;
}

/* .checked {
	border-bottom: 2.5px solid #334040;
} */
</style>
