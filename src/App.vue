<template>
	<Nav id="menu" :l="l" />
	<main id="wrap"><router-view :l="l" /></main>
</template>

<script scoped>
import { langJS } from "@/store/lang"
import Nav from "@/components/Nav.vue"

export default {
	name: 'App',
	components: {
		Nav
	},
	setup() {
		const language = langJS()

		return {
			language,
			scroll_positions: {},
      		remember: []
		}
	},
	computed: {
        l() {
            return this.language["lang"]
        },
		id() {
			return this.$user.id
		}
    },
	watch: {
		id() {
			this.makeOnline(true)
		}
	},
	beforeMount() {
		if (!this.l)
			this.language.autoLang(navigator.language)
		else
			this.language.correctLang(this.l)
		
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