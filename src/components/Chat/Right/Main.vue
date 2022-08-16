<template>
	<div class="right">
		<Header :target="target" />
		<Messages />
		<Footer :input="input" />
	</div>
</template>

<script scoped>
import Header from "@/components/Chat/Right/Header.vue"
import Messages from "@/components/Chat/Right/Messages.vue"
import Footer from "@/components/Chat/Right/Footer.vue"
export default {
	name: "Right",
	props: ["target", "input"],
	components: {
		Header,
		Messages,
		Footer
	},
	data() {
		return {
		}
	}
}
</script>

<style scoped>
.right {
	width: 75%;
	min-width: 300px;
	height: 100%;

	display: flex;
	flex-direction: column;
	
	overflow: hidden;
}
</style>
