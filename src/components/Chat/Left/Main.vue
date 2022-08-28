<template>
	<div class="left" :class="{ show: !show, hide: show }">
		<Hat :search="search" :getRooms="getRooms" @top="++changeTop" />
		<Rooms v-if="order.length > 0" :order="order" :rooms="rooms" :target="target" :getRooms="getRooms" :changeTop="changeTop" />
		<None v-else :lang="chats" />
	</div>
</template>

<script scoped>
import Hat from "@/components/Chat/Left/Hat.vue"
import Rooms from "@/components/Chat/Left/Rooms.vue"
import None from "@/components/Chat/Left/None.vue"
export default {
	name: "Left",
	props: ["search", "order", "rooms", "target", "getRooms", "chats", "show"],
	components: {
		Hat,
		Rooms,
		None
	},
	data() {
		return {
			changeTop: 0
		}
	},
}
</script>

<style scoped>
.left {
	width: 25%;
	min-width: 300px;
	height: 100%;
	border-right: 1px solid #b0b5b8;

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
