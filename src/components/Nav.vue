<template>
	<nav>
		<div id="links">
			<template v-for="(elem, key) in list" :key="key">
				<router-link v-if="key === 'profile'" :to="{ name: key, params: { id: id } }" class="wrap" :title="elem.title[l]" @click="set(key)">
					<div class="elem">
						<div class="circle" />

						<div class="link">
							<img :src="elem.image"  />
						</div>
					</div>

					<div class="border" :class="{ 'checked': $route.name === key }" />
				</router-link>

				<router-link v-else :to="{ name: key }" class="wrap" :title="elem.title[l]" @click="set(key)">
					<div class="elem">
						<div class="circle" />

						<div v-if="key === 'heart' && all > 0" class="notification">
							<span :class="{ 
								important : likes > 0 || privates > 0 || accesses > 0, 
								useless: likes === 0 && privates === 0 && accesses === 0 
							}">{{ all }}</span>
						</div>

						<div v-if="key === 'chat' && messages > 0" class="notification">
							<span class="useless">{{ messages }}</span>
						</div>

						<div class="link">
							<img :src="elem.image"  />
						</div>
					</div>

					<div class="border" :class="{ 'checked': $route.name === key }" />
				</router-link>
			</template>
		</div>
	</nav>
</template>

<script scoped>
export default {
	name: 'Nav',
	props: ["l"],
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
		}
	},
	data() {
		return {
			checked: 0,
			interval: null
		}
	},
	watch: {
		id(user_id) {
			if (user_id && user_id > 0) {
				if (!this.interval) {
					this.getHearts()
					this.interval = setInterval(this.getHearts, 1000 * 120)
				}
			} else {
				for (let field of this.$nav.fields)
					this.$nav.setHearts(0, field)

				this.interval = clearInterval(this.interval)
			}
		},

		allWithMessages(n) {
			if (n > 0)
				document.title = "luckriza (" + n + ")"
			else
				document.title = "luckriza"
		}
	},
	beforeMount() {
		if (this.id) {
			this.getHearts()
			this.interval = setInterval(this.getHearts, 1000 * 120)
		}
	},
	methods: {
		set(component) {
			this.checked = component

			if (component !== "heart")
				this.$scroll.set({ field: "heart", value: 0 });
		},
		getHearts() {
			fetch(this.$domain + "notifications", {
				method: "GET",
				credentials: "include"
			})
				.then(data => {
					if (data.status === 401) {
						this.$user.logout(this.$domain)
						this.$router.push({ name: "search" })
					} else
						return data.json()
				})
				.then(data => {
					if (data)
						for (let key in data) {
							let hearts = 0

							if (data[key] > 0) {
								hearts += data[key]
								this.$nav.setHearts(hearts, key)
							}
						}
				})
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
