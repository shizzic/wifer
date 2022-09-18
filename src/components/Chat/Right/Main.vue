<template>
	<div class="right" :class="{ show: show, hide: !show }">
		<Header :target="target" :access="messages.access" :rooms="rooms" />
		<template v-if="premium > 0 || 'access' in messages && messages.access.target">
			<Messages :target="target.id" :messages="messages" :getMessages="getMessages" :newMessages="newMessages" :show="show" />
			<Footer :input="input" :target="target.id" />
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
	props: ["target", "input", "messages", "blur", "getMessages", "rooms", "show", "newMessages"],
	components: {
		Header,
		Messages,
		Blur,
		Footer
	},
	computed: {
        premium() {
            return this.$user.premium
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

@media screen and (max-width: 700px) {
    .show {
		width: 100%;
		min-width: 0;
	}

	.hide {
		display: none;
	}
}
</style>
