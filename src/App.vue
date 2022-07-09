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
			language
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
		id(id) {
			if (id)
				this.makeOnline(true)
			else
				this.makeOnline(false)
		}
	},
	beforeMount() {
		if (this.id)
			this.makeOnline(true)

		window.addEventListener('beforeunload', (e) => {
			e.preventDefault()
			this.makeOnline(false)
		})
	},
	methods: {
		makeOnline(value) {
			fetch(this.$domain + "online?id=" + this.id + "&online=" + value, {
				method: "PUT",
				headers: { "Access-Control-Max-Age": 600 },
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
	/* background-color: #286DA8; */
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