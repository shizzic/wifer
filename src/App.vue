<template>
	<Nav id="menu" :l="l" />
	<div id="wrap"><router-view :l="l" /></div>
	<Cookie v-if="!cookies" :l="l" />
</template>

<script scoped>
import Nav from "@/components/Nav.vue"
import Cookie from "@/components/Cookie.vue"

export default {
	components: {
		Nav,
		Cookie
	},
	computed: {
		l() { return this.$lang.lang },
		id() { return this.$user.id },
		cookies() { return this.$user.cookies },
	},
	watch: {
		id() {
			this.make_user_online(true)
			this.start()
		},
		l() {
			this.$city.list = {}
			this.$country.list = {}
			location.reload()
		}
	},
	provide() {
		return {
			l: this.l,
		}
	},
	beforeMount() {
		!this.l ? this.$lang.autoLang(navigator.language) : this.$lang.correctLang(this.l)
		this.start()
		this.make_user_online(true)

		document.addEventListener("visibilitychange", () => {
			if (document.visibilityState === "hidden")
				this.make_user_online(false)
			else
				this.make_user_online(true)
		})

		const work = window.sessionStorage.getItem("work")
		if (!work)
			this.visit()
	},
	beforeUnmount() {
		this.$sse.close()
	},
	methods: {
		make_user_online(value) {
			if (this.id)
				fetch(this.$domain + "online?online=" + value, {
					method: "GET",
					credentials: "include"
				})
					.then(data => {
						if (data.status === 401) {
							this.$user.logout(this.$domain)
							this.$router.push({ name: "search" })
						}
					})
		},
		start() {
			if (this.id && this.id > 0) {
				this.$user.getParamsAfterLogin(this.$domain)
				this.$sse.start()
			} else
				this.$sse.close()

			this.$country.getPrice()
		},
		visit() {
			window.sessionStorage.setItem("work", true)

			fetch(this.$domain + "visit", {
				method: "POST"
			})
		}
	}
}
</script>

<style scoped>
/* @media only screen and (min-width : 320px) {
        
}

@media only screen and (min-width : 480px) {

}

@media only screen and (min-width : 768px) {

}

@media only screen and (min-width : 992px) {

}

@media only screen and (min-width : 1200px) {

} */

#app {
	position: relative;
}

#wrap {
	background-color: #1f80aa;
	width: 100%;
	height: calc(100% - 50px);

	position: absolute;
	top: 50px;
	left: 0;
}

@media screen and (max-width: 529px) {
	#menu {
		bottom: 0;
	}

	#wrap {
		top: 0;
	}
}
</style>