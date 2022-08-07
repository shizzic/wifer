<template>
	<div class="wrap">
		<div v-if="users" class="content scroll">
			<Hat
				:what="what[l]" :which="which" :limit="limit" :founded="founded[l]" :mode="mode" :all="all"
				@set="mode = $event.mode; which = $event.which; count = true; get();" 
				@limit="limit = $event; get();" @mode="mode = $event; count = true; get();" 
			/>
			<Users v-if="users" 
				:users="users" :time="time" :viewed="viewed" :notes="notes" :photos="photos[l]" :titles="titles[l]" 
				:values="values[l]" :mode="mode" :which="which" @modal="modal = $event.modal; index = $event.index; id = $event.id"
			/>
			<Pagination :count="all" :limit="limit" :skip="skip" @skip="skip = $event; get();" />
			<Modal v-if="modal" 
				:users="users" :modal="modal" :text="text[modal][l]" :submit="submit[l]" :index="index" :id="id"
				@users="users = $event" @close="modal = null; index = null; id = null;"
			/>
		</div>
	</div>
</template>

<script scoped>
import { HeartJS } from "@/store/Langs/Heart"
import { InfoJS } from "@/store/Langs/Info"
import { SearchJS } from "@/store/Langs/Search"
import Hat from "@/components/Heart/Hat/Main.vue"
import Users from "@/components/Heart/Users/Main.vue"
import Pagination from "@/components/Heart/Pagination.vue"
import Modal from "@/components/Heart/Modal.vue"
export default {
	name: "Heart",
	props: ["l"],
	components: {
		Hat,
		Users,
		Pagination,
		Modal
	},
	setup() {
		const what    = HeartJS().what
		const text    = HeartJS().text
		const submit  = HeartJS().submit
		const titles  = InfoJS().keys
		const values  = InfoJS().values
		const founded = SearchJS().founded
		const photos  = SearchJS().photos

		return {
            what,
			text,
			submit,
			titles,
			values,
			founded,
			photos
		}
	},
	data() {
		return {
			which: 0,
			mode: null,
			limit: 25,
			skip: 0,
			count: true,

			users: null,
			notes: {},
			time: {},
			viewed: {},
			all: 0,

			modal: null,
			index: null,
			id:    null
		}
	},
	beforeMount() {
		if (!this.$user.id || this.$user.id && this.$user.id < 1)
			this.$router.push({ name : "search" })
		else
			this.get()
	},
	methods: {
		get() {
			let data = {}
			data.which = +this.which
			data.mode  = this.mode
			data.limit = this.limit
			data.skip  = this.skip

			if (this.count)
				data.count = true

			fetch(this.$domain + "targets", {
				method: "POST",
				credentials: "include",
				body: JSON.stringify(data)
			})
				.then(data => { return data.json() })
				.then(data => {
					if (data.count && data.count > -1)
						this.all = data.count

					if (data.data.users && data.data.users.length > 0) {
						this.users  = data.data.users
						this.time   = {}
						this.viewed = {}
						this.notes  = {}

						let hearts   = 0
						let messages = 0
						let key = "target"
						if (!this.mode)
							key = "user"

						for (let elem in data.data.targets) {
							this.time[data.data.targets[elem][key]] = data.data.targets[elem].created_at
							this.viewed[data.data.targets[elem][key]] = data.data.targets[elem].viewed

							if (!this.mode && data.data.targets[elem].viewed === false)
								hearts += 1

							if ("text" in data.data.targets[elem])
								this.notes[data.data.targets[elem][key]] = data.data.targets[elem].text
						}
						
						this.$nav.takeHearts(hearts)
					} else {
						this.users  = {}
						this.time   = {}
						this.viewed = {}
						this.notes  = {}
						this.all    = 0
					}
				})
			
			this.count = null
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

	overflow: hidden;
}

.content {
	width: 100%;
	height: 100%;
	background-color: #fff;
	border-radius: 4px;

	overflow-y: auto;
}

@media screen and (max-width: 768px) {
    .wrap {
        padding: 15px;
    }
}
</style>
