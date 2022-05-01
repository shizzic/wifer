<template>
	<Nav id="menu" :l="l" />
	<div id="wrap"><router-view :l="l" /></div>
</template>

<script scoped>
import { langJS } from "@/store/lang"
import Nav from "@/components/Nav"
export default {
	name: 'App',
	components: {
		Nav
	},
	setup() {
		const language = langJS();

		return {
			language
		}
	},
	computed: {
        l() {
            return this.language["lang"];
        }
    },
	data() {
		return {
		}
	},
	beforeMount() {
		this.check()
	},
	methods: {
		check() {
			fetch(this.$domain + "test", {
				method: "GET",
				credentials: 'include'
			})
				.then(data => { return data.text() })
				.then(data => { console.log(data) })
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
	background-color: #286DA8;
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
