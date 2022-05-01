<template>
	<nav>
		<div id="links">
			
			<template v-if="id">
				<div v-for="(elem, key) in inner" :key="key" class="wrap" :title="elem.title[l]" @click="checked = key">
					<router-link class="wrapper" :to="{ name: key }">
						<img :src="elem.image"  />
					</router-link>

					<div class="border" :class="{ 'checked': $route.name === key }" />
				</div>

				<div class="wrap" :title="profile.title[l]" @click="checked = 'profile'">
					<router-link class="wrapper" :to="{ name: 'profile' }">
						<img :src="avatar" style="border-radius: 50%;"  />
					</router-link>

					<div class="border" :class="{ 'checked': $route.name === 'profile' }" />
				</div>
			</template>

			<template v-else>
				<div v-for="(elem, key) in outer" :key="key" class="wrap" :title="elem.title[l]" @click="checked = key">
					<router-link class="wrapper" :to="{ name: key }">
						<img :src="elem.image"  />
					</router-link>

					<div class="border" :class="{ 'checked': $route.name === key }" />
				</div>
			</template>

		</div>
	</nav>
</template>

<script scoped>
import { navJS } from "@/store/nav"
import { userJS } from "@/store/user"
export default {
	name: 'Nav',
	props: ["l"],
	setup() {
		const inner   = navJS()["inner"];
		const outer   = navJS()["outer"];
		const profile = navJS()["profile"];

		return {
			inner,
			outer,
			profile
		}
	},
	computed: {
		id() {
			return userJS()["id"]
		},
		avatar() {
			return userJS()["avatar"]
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
	justify-content: center;

	position: fixed;
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
	cursor: pointer;
	height: 100%;
	border-radius: 12px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.wrapper {
	-webkit-tap-highlight-color: transparent;
	height: 95%;

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
	height: 24px;
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
