<template>
	<Nav id="menu" />
	<div id="wrap"><router-view /></div>
</template>

<script scoped>
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
	methods: {
	}
}
</script>

<style scoped>
#app {
	position: relative;
}

#wrap {
	height: calc(100% - 50px);
	position: absolute;
	top: 50px;
	left: 0;
}

@media screen and (max-width: 600px) {
    #menu {
		bottom: 0;
    }

	#wrap {
		top: 0;
	}
  }
</style>
