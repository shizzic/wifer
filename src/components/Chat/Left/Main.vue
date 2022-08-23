<template>
	<div class="left">
		<template v-if="order.length > 0">
			<Hat :search="search" />
			<Rooms :order="order" :rooms="rooms" :target="target" :getRooms="getRooms" />
		</template>
		<None v-else :lang="chats" />
	</div>
</template>

<script scoped>
import Hat from "@/components/Chat/Left/Hat.vue"
import Rooms from "@/components/Chat/Left/Rooms.vue"
import None from "@/components/Chat/Left/None.vue"
export default {
	name: "Left",
	props: ["search", "chats", "order", "rooms", "target", "getRooms"],
	components: {
		Hat,
		Rooms,
		None
	}
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
</style>
