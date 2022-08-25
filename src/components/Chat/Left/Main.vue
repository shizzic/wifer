<template>
	<div class="left" :class="{ show: !show, hide: show }">
		<Hat :search="search" />
		<Rooms :order="order" :rooms="rooms" :target="target" :getRooms="getRooms" />
	</div>
</template>

<script scoped>
import Hat from "@/components/Chat/Left/Hat.vue"
import Rooms from "@/components/Chat/Left/Rooms.vue"
export default {
	name: "Left",
	props: ["search", "order", "rooms", "target", "getRooms", "show"],
	components: {
		Hat,
		Rooms
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
