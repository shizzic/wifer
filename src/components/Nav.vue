<template>
	<nav>
		<div id="links">
			<router-link v-for="(elem, key) in list" :key="key" :to="{ name: key, params: { id: id } }" class="wrap" :title="elem.title[l]" 
			@click="checked = key">
				<div class="elem">
					<div class="circle" />

					<div class="link">
						<img :src="elem.image"  />
					</div>
				</div>

				<div class="border" :class="{ 'checked': $route.name === key }" />
			</router-link>
		</div>
	</nav>
</template>

<script scoped>
import { navJS } from "@/store/nav.js"
export default {
	name: 'Nav',
	props: ["l"],
	setup() {
		const inner = navJS()["inner"]
		const outer = navJS()["outer"]

		return {
			inner,
			outer
		}
	},
	computed: {
		id() {
			return this.$user.id
		},
		list() {
			return this.id ? this.inner : this.outer
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
	z-index: 2147483646;
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
	.link {
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

	.elem {
		flex: 1;
		padding: 0 0;
	}
}

.wrap {
	cursor: pointer;
	height: 100%;
	-webkit-tap-highlight-color: transparent;
}

.elem {
	flex: 1;
	cursor: pointer;
	height: 95%;
	border-radius: 12px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	position: relative;
  	overflow: hidden;
}

.link {
	position: relative;
	-webkit-tap-highlight-color: transparent;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.circle {
	width: 0%;
	height: 0%;
	opacity: 0;

	border-radius: 50%;
	background-color:rgb(226, 235, 253);
	
	position: absolute;
	top: 50%;
	left: 50%;

	transition: all .8s ease-Out;
}

.wrap:focus .circle {
	width: 200%;
	height: 500%;
	opacity: 1;

	top: -200%;
	left: -50%;
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
	width: 100%;
}
</style>
