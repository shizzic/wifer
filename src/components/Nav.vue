<template>
	<nav>
		<div id="links">
			<div v-for="(elem, key) in list" :key="key" class="wrap" :title="elem.title[lang]">
				<router-link class="wrapper" :to="{ name: elem.name }" @click="checked = key">
					<img :src="elem.image"  />
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
			checked: 0
		}
	}
}
</script>

<style scoped>
nav {
	z-index: 1;
	background-color: #FFFFFF;

	width: 100%;
	height: 50px;

	display: flex;
	justify-content: space-around;

	position: fixed;

	/* background-color: #286DA8; */
	/* background-color: #CD5360; */
	/* background-color: #B37D4E; */
	/* background-color: #438496; */
}

#links {
	height: 100%;
	display: flex;
	justify-content: space-between;
}

.wrap {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.wrapper {
	height: 95%;
	cursor: pointer;
	border-radius: 12px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 20px;

	transition: background-color .2s;
}

.wrapper:hover {
	background-color: aliceblue;
}

img {
	width: 20px;
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
