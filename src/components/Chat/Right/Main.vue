<template>
	<div class="right">
		<Header :target="target" :access="messages.access" />
		<template v-if="'access' in messages && messages.access.target">
			<Messages :messages="messages" :getMessages="getMessages" />
			<Footer :input="input" />
		</template>
		<Blur v-else :lang="blur" />
	</div>
</template>

<script scoped>
import Header from "@/components/Chat/Right/Header.vue"
import Messages from "@/components/Chat/Right/Messages.vue"
import Blur from "@/components/Chat/Right/Blur.vue"
import Footer from "@/components/Chat/Right/Footer.vue"
export default {
	name: "Right",
	props: ["target", "input", "messages", "blur", "getMessages"],
	components: {
		Header,
		Messages,
		Blur,
		Footer
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
