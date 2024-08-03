<template>
	<nav>
		<div id="links">
			<template v-for="(elem, key) in list" :key="key">
				<router-link v-if="key === 'profile'" :to="{ name: key, params: { id: id } }" class="wrap" @click="set(key)">
					<div class="elem" :data-title="elem.title[l]">
						<div class="circle" />

						<div class="link">
							<img :src="elem.image" />
						</div>
					</div>

					<div class="border" :class="{ 'checked': $route.name === key }" />
				</router-link>

				<router-link v-else :to="{ name: key }" class="wrap" @click="set(key)">
					<div class="elem" :data-title="elem.title[l]">
						<div class="circle" />

						<div v-if="key === 'heart' && all > 0" class="notification">
							<span :class="{
								important: likes > 0 || privates > 0 || accesses > 0,
								useless: likes === 0 && privates === 0 && accesses === 0
							}">{{ all }}</span>
						</div>

						<div v-if="key === 'chat' && messages > 0" class="notification">
							<span class="useless">{{ messages }}</span>
						</div>

						<div class="link">
							<img :src="elem.image" />
						</div>
					</div>
					
					<div class="border" :class="{ 'checked': $route.name === key }" />
				</router-link>
			</template>
		</div>
	</nav>
</template>

<script scoped>
import { SeoJS } from "@/store/Langs/Seo"

export default {
	name: 'Nav',
	props: ["l"],
	setup() {
		const names = SeoJS().names

		return {
			names
		}
	},
	computed: {
		id() {
			return this.$user.id
		},
		list() {
			return this.id ? this.$nav.inner : this.$nav.outer
		},
		views() {
			return this.$nav.views
		},
		likes() {
			return this.$nav.likes
		},
		privates() {
			return this.$nav.privates
		},
		accesses() {
			return this.$nav.accesses
		},
		all() {
			return this.views + this.likes + this.privates + this.accesses
		},
		messages() {
			return this.$nav.messages
		},
		allWithMessages() {
			return this.views + this.likes + this.privates + this.accesses + this.$nav.messages
		},
	},
	data() {
		return {
			checked: 0,
		}
	},
	watch: {
		id(user_id) {
			if (!user_id || user_id && user_id < 1)
				for (let key of this.$nav.fields)
					this.$nav.setHearts(0, key)
		},

		allWithMessages() {
			this.update_page_title(this.names[this.l][this.$route.name])
		},

		"$route.name": {
			handler(name) {
				this.update_page_title(this.names[this.l][name])
			}
		}
	},
	methods: {
		set(component) {
			this.checked = component

			if (component !== "heart")
				this.$scroll.set({ field: "heart", value: 0 });
		},
		update_page_title(name) {
			if (!name)
				return

			const count = this.allWithMessages
			document.title = count > 0 ? name + " (" + count + ")" : name
		}
	}
}
</script>

<style scoped>
nav {
	z-index: 2147483640;
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

.wrap {
	cursor: pointer;
	height: 100%;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;
}

.elem {
	position: relative;
	flex: 1;
	cursor: pointer;
	height: 95%;
	border-top-left-radius: 12px;
	border-top-right-radius: 12px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

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
	background-color: rgb(226, 235, 253);

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

	transition: width .3s;
}

.checked {
	width: 100%;
}

.notification {
	z-index: 2;
	width: 100%;
	height: 100%;

	position: absolute;
	left: 0;
	top: 0;

	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
}

.notification span {
	font-size: 12px;
	color: #fff;
	border-top-left-radius: 2px;
	border-top-right-radius: 2px;

	display: inline-block;
	padding: 1px 5px;
}

.useless {
	background-color: #000;
}

.important {
	background-color: #f34338;
}

.wrap:hover [data-title]::after {
  content: attr(data-title);
  font-size: 15px;
  z-index: 100;
  background-color: rgb(199, 199, 199);
  border-radius: 2px;
  word-break: normal;

  position: absolute;
  left: 0;
  top: 0;

  padding: 1px 6px;
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
</style>
