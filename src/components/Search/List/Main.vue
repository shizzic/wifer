<template>
	<div class="wrapper scroll" ref="search" @touchend="saveScroll">
		<Hat :l="l" :data="data" :sort="sort" :create="create" :count="count" :founded="founded" :getUsers="getUsers"
		@filters="$emit('filters')" />
		<div v-if="isFetched" class="loader">
			<SyncLoader :loading="true" v-bind="settings" />
		</div>
		<Users v-else :users="users" :mode="mode" :photos="photos" :titles="titles" :values="values" @scroll="scroll" />
		<Pagination v-if="users && count > 0" 
			:data="data" :getUsers="getUsers" :count="count" 
			:limit="data.data[data.active].limit" :skip="data.data[data.active].skip" :sort="data.data[data.active].sort"
			@moved="$emit('moved'); $refs.search.scrollTop = 0; $scroll.set({ field: 'search', value: 0 });"
		/>
	</div>
</template>

<script scoped>
import { clearTimeout, setTimeout } from 'worker-timers'
import Hat from "@/components/Search/List/Hat/Main.vue"
import Users from "@/components/Search/List/Users/Main.vue"
import Pagination from "@/components/Search/List/Pagination.vue"
import { SyncLoader } from "vue-spinner/src"

export default {
	name: "List",
	props: ["l", "data", "sort", "create", "users", "mode", "photos", "count", "founded", "getUsers", "titles", "values", "first", 'isFetched'],
	components: {
		Hat,
		Users,
		Pagination,
		SyncLoader,
	},
	watch: {
		first() {
			setTimeout(this.scroll, 25)
		}
	},
	data() {
        return {
            settings: {
                size: "25px",
                color: "#2a3d39"
            },
        }
    },
	mounted() {
		function createWheelStopListener(element, callback, timeout) {
			var handle = null
			var onScroll = function() {
				if (handle)
					clearTimeout(handle)

				handle = setTimeout(callback, timeout || 200)
			}

			element.addEventListener("wheel", onScroll)
			return function() {
				element.removeEventListener("wheel", onScroll)
			}
		}

		createWheelStopListener(window, function() {
			this.saveScroll()
		}.bind(this))
	},
	methods: {
		saveScroll() {
			if (this.$refs.search)
				this.$scroll.set({ field: "search", value: this.$refs.search.scrollTop })
		},
		
		scroll() {
			if (this.$refs.search)
				this.$refs.search.scrollTop = this.$scroll.search
		}
	}
}
</script>

<style scoped>
.wrapper {
	background-color: #fff;
    border-radius: 4px;
    width: 100%;
	height: 100%;
}

.loader {
	width: 100%;
	height: calc(100% - 250px);

	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
}
</style>
