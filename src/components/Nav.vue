<template>
	<nav>
		<div id="links">
			<router-link v-for="(elem, key) in list" :key="key" :to="{ name: key, params: { id: id } }" class="wrap" :title="elem.title[l]" 
			@click="checked = key">
				<div class="elem">
					<div class="circle" />
					<div v-if="elem.image === '/heart.webp' && $nav.hearts" class="notification"><span>{{ hearts }}</span></div>
					<div v-if="elem.image === '/chat.webp' && $nav.messages" class="notification"><span>{{ $nav.messages }}</span></div>

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
		hearts() {
			return this.$nav.hearts
		}
	},
	data() {
		return {
			checked: 0,
			interval: null
		}
	},
	watch: {
		id(n) {
			if (n && n > 0)
				if (!this.interval)
					this.interval = setInterval(this.getHearts, 1000 * 120)
			else {
				this.hearts   = null
				this.messages = null
				clearInterval(this.interval)
			}
		}
	},
	beforeMount() {
		if (this.id) {
			this.getHearts()
			this.interval = setInterval(this.getHearts, 1000 * 120)
		}
	},
	methods: {
		getHearts() {
			fetch(this.$domain + "notifications", {
				method: "GET",
				credentials: "include"
			})
				.then(data => { return data.json() })
				.then(data => {
					let hearts   = 0
					let messages = 0

					for (let key in data)
						if (data[key] > 0)
							if (key !== "messages")
								hearts   += data[key]
							else
								messages += data[key]

					this.$nav.setHearts(hearts)
					this.$nav.setMessages(messages)
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
	background-color: #000;
	border-top-left-radius: 2px;
	border-top-right-radius: 2px;

	display: inline-block;
	padding: 1px 5px;
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
