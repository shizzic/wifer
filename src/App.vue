<template>
	<Nav id="menu" :l="l" />
	<main id="wrap"><router-view :l="l" /></main>
</template>

<script scoped>
import Nav from "@/components/Nav.vue"
export default {
	name: 'App',
	components: {
		Nav
	},
	computed: {
        l() {
            return this.$lang.lang
        },
		id() {
			return this.$user.id
		}
    },
	watch: {
		id() {
			this.makeOnline(true)
			this.start()
		}
	},
	beforeMount() {
		if (!this.l)
			this.$lang.autoLang(navigator.language)
		else
			this.$lang.correctLang(this.l)

		this.start()
		this.makeOnline(true)
		
		document.addEventListener("visibilitychange", () => {
			if (document.visibilityState === "hidden")
				this.makeOnline(false)
			else
				this.makeOnline(true)
		})
	},
	methods: {
		makeOnline(value) {
			if (this.id)
				fetch(this.$domain + "online?online=" + value, {
					method: "GET",
					credentials: "include"
				})
		},
		start() {
			if (this.id && this.id > 0) {
				this.$user.getParamsAfterLogin(this.$domain)
				this.$chat.startSocket(this.$domainName)
			} else
				this.$chat.closeSocket()
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