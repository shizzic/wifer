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
	beforeMount() {
		this.$router.push({ name: "search" })
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
