<template>
	<div class="wrap">
		<Sidebar :titles="titles[l]" :values="values[l]" :text="text[l]" :search="search[l]" :template="template[l]" :data="data"
		:filters="filters" :create="createTemplate" @filters="filters = null" />
		<List v-show="!filters" :l="l" :data="data" :sort="sort[l]" :filters="filter[l]" :create="createTemplate"
		@filters="filters = true" />
	</div>
</template>

<script scoped>
import { InfoJS } from "@/store/Langs/Info"
import { SearchJS } from "@/store/Langs/Search"
import Sidebar from "@/components/Search/Sidebar/Main.vue"
import List from "@/components/Search/List/Main.vue"
export default {
	name: "Search",
	props: ["l"],
	components: {
		Sidebar,
		List
	},
	setup() {
		const titles   = InfoJS().keys
		const values   = InfoJS().values
		const text     = SearchJS().text
		const search   = SearchJS().search
		const sort     = SearchJS().sort
		const filter  = SearchJS().filters
		const template = SearchJS().template

		return {
			titles,
			values,
			text,
			search,
			sort,
			filter,
			template
		}
	},
	data() {
		return {
			filters: null,
			data: {
				active: 1,
				data: {
					1: {
						mode: true,
						limit: 25,
						skip: 0,
						sort: "last_time",
						countries: {},
						cities: {},
						expanded: {},
						age: [18, 80],
						weight: [35, 220],
						height: [140, 220],
						sex: [],
						body: [],
						smokes: [],
						drinks: [],
						ethnicity: [],
						income: [],
						industry: [],
						search: [],
						prefer: [],
						about: {
							full: false,
							value: ""
						}
					}
				}
			}
		}
	},
	beforeMount() {
		this.getTemplates()
	},
	methods: {
		createTemplate() {
			if (this.$user.id) {
				let form = new FormData()
				form.append("text", JSON.stringify(this.data))

				fetch(this.$domain + "templates", {
					method: "POST",
					credentials: 'include',
					body: form
				})
			} else
				this.$user.setTemplates(JSON.stringify(this.data))
		},

		getTemplates() {
			if (this.$user.id)
				fetch(this.$domain + "templates", {
					method: "GET",
					credentials: 'include'
				})
					.then(data => { return data.json() })
					.then(data => {
						if (data) {
							this.data = JSON.parse(data.data)
							this.$user.setTemplates(data.data)
						} else {
							if (this.$user.templates)
								this.data = Object.assign({}, JSON.parse(this.$user.templates))
							else
								this.$user.setTemplates(JSON.stringify(this.data))

							let form = new FormData()
							form.append("text", JSON.stringify(this.data))

							fetch(this.$domain + "templates", {
								method: "POST",
								credentials: 'include',
								body: form
							})
						}
					})
			else
				if (this.$user.templates)
					this.data = Object.assign({}, JSON.parse(this.$user.templates))
				else
					this.$user.setTemplates(JSON.stringify(this.data))
		}
	}
}
</script>

<style scoped>
.wrap {
	background-color: #2a3d39;
	word-break: break-all;

	width: 100%;
	height: 100%;
	padding: 25px;

	display: flex;
	
	overflow: hidden;
}

.wrap::before, .wrap::after {
  content: '';
  margin: auto;
}

@media screen and (max-width: 730px) {
    .wrap {
        padding: 15px;
    }
}
</style>
