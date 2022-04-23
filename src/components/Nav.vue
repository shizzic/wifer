<template>
	<nav>
		<div id="links">
			
			<template v-if="logged">
				<div v-for="(elem, key) in inner" :key="key" class="wrap" :title="elem.title[lang]">
					<router-link class="wrapper" :to="{ name: key }" @click="checked = key">
						<img :src="elem.image"  />
					</router-link>

					<div class="border" :class="{ 'checked': checked === key }" />
				</div>
			</template>

			<template v-else>
				<div v-for="(elem, key) in outer" :key="key" class="wrap" :title="elem.title[lang]">
					<router-link class="wrapper" :to="{ name: key }" @click="checked = key">
						<img :src="elem.image"  />
					</router-link>

					<div class="border" :class="{ 'checked': checked === key }" />
				</div>
			</template>

		</div>
	</nav>
</template>

<script scoped>
import { langJS } from "@/store/lang"
import { navJS } from "@/store/nav"
export default {
	name: 'Nav',
	setup() {
		const lang  = langJS()["lang"];
		const inner = navJS()["inner"];
		const outer = navJS()["outer"];

		return {
			lang,
			inner,
			outer
		}
	},
	data() {
		return {
			checked: 0,
			logged: true
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
	justify-content: center;

	position: fixed;

	/* background-color: #286DA8; */
	/* background-color: #CD5360; */
	/* background-color: #B37D4E; */
	/* background-color: #438496; */
}

#links {
	height: 100%;
	display: flex;
}

@media screen and (min-width: 529px) {
	.wrapper {
		padding: 0 40px;
	}
}

@media screen and (max-width: 529px) {
	#links {
		width: 100%;
	}

	.wrap {
		flex: 1;
	}

	.wrapper {
		flex: 1;
		padding: 0 0;
	}
}

.wrap {
	flex: 1;
	height: 100%;
	border-radius: 12px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.wrapper {
	-webkit-tap-highlight-color: transparent;
	height: 95%;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	transition: background-color .2s;
}

.wrap:hover {
	background-color: aliceblue;
}

img {
	width: 24px;
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
