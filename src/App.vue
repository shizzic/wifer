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
		window.addEventListener('beforeunload', () => { this.makeOnline(false) })
	},
	methods: {
		makeOnline(value) {
			if (this.id)
				fetch(this.$domain + "online?online=" + value, {
					method: "POST",
					credentials: "include"
				})
		},
		start() {
			if (this.id && this.id > 0) {
				this.$nav.checkMessages(this.$domain)
				this.$chat.startSocket(this.$domainName)
				this.$user.checkAvatar(this.$domain)
			}
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
	word-break: break-word;
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