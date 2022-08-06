<template>
	<div class="wrap scroll">
		<div class="content">
			<Hat :what="what[l]" :which="which" :limit="limit" :get="get" :founded="founded[l]" :mode="mode"
			@set="mode = $event.mode; which = $event.which;" @limit="limit = $event" @mode="mode = $event" />
		</div>
	</div>
</template>

<script scoped>
import { HeartJS } from "@/store/Langs/Heart"
import { SearchJS } from "@/store/Langs/Search"
import Hat from "@/components/Heart/Hat/Main.vue"
export default {
	name: "Heart",
	props: ["l"],
	components: {
		Hat
	},
	setup() {
		const what     = HeartJS().what
		const founded  = SearchJS().founded

		return {
            what,
			founded
		}
	},
	data() {
		return {
			data: null,
			which: 0,
			mode: true,
			limit: 25
		}
	},
	methods: {
		get() {

		}
	}
}
</script>

<style scoped>
.wrap {
	width: 100%;
	height: 100%;
	background-color: #CD5360;

	padding: 25px;

	overflow-y: auto;
}

.content {
	width: 100%;
	height: 100%;
	background-color: #fff;
	border-radius: 4px;
}

@media screen and (max-width: 768px) {
    .wrap {
        padding: 15px;
    }
}
</style>
