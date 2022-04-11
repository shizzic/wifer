<template>
	<Nav />
</template>

<script scoped>
import { langJS } from "@/store/lang"
import { navJS } from "@/store/nav"
import Nav from "@/components/Nav"
export default {
	name: 'App',
	components: {
		Nav
	},
	data() {
		return {
		}
	},
	setup() {
		const lang = langJS()["lang"];
		const nav = navJS()["list"][lang];

		return {
			lang,
			nav
		}
	},
	mounted() {
		console.log(this.lang);
		console.log(this.nav);
	},
	methods: {
	}
}
</script>

<style scoped>
</style>
