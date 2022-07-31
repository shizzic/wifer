<template>
	<div class="wrap" :class="{ column : filters }">
		<div v-show="filters" class="close"><span @click="filters = null">&#10060;</span></div>
		<Sidebar :titles="titles[l]" :values="values[l]" :text="text[l]" :search="search[l]" :template="template[l]" :data="data"
		:filters="filters" :create="createTemplate" :slider="slider" :checkbox="checkbox" :getUsers="getUsers" 
		@filters="filters = null" />
		<List v-show="!filters" :l="l" :data="data" :sort="sort[l]" :filters="filter[l]" :create="createTemplate" :users="users"
		:mode="data.data[data.active].mode" :photos="photos[l]" :count="count" :founded="founded[l]" :getUsers="getUsers"
		:titles="titles[l]" :values="values[l]"
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
		const filter   = SearchJS().filters
		const template = SearchJS().template
		const photos   = SearchJS().photos
		const founded  = SearchJS().founded

		return {
			titles,
			values,
			text,
			search,
			sort,
			filter,
			template,
			photos,
			founded
		}
	},
	data() {
		return {
			checkbox: ["premium", "sex", "body", "smokes", "drinks", "ethnicity", "income", "industry", "search", "prefer"],
			slider: {
				age: { min: 18, max: 80 },
				weight: { min: 35, max: 220 },
				height: { min: 140, max: 220 },
				children: { min: 0, max: 9 }
			},

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
						height: [140, 220],
						children: [0, 9],
						premium: [],
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
							is: false,
							full: false,
							value: ""
						}
					}
				}
			},

			users: null,
			count: 0
		}
	},
	beforeMount() {
		this.getTemplates()
	},
	methods: {
		getUsers(count = false) {
			let data   	   = {}
			data.skip  	   = this.data.data[this.data.active].skip
			data.limit 	   = this.data.data[this.data.active].limit
			data.sortField = this.data.data[this.data.active].sort

			if (data.sortField === "created_at")
				data.sortValue = 1
			else
				data.sortValue = -1

			for (let elem in this.slider) {
				data[elem + "Min"] = this.data.data[this.data.active][elem][0]
				data[elem + "Max"] = this.data.data[this.data.active][elem][1]
			}

			for (let elem of this.checkbox)
				data[elem] = this.data.data[this.data.active][elem]

			if (this.data.data[this.data.active].about.is)
				data.is_about = true
			else
				data.is_about = false

			if (this.data.data[this.data.active].about.full && this.data.data[this.data.active].about.value.length > 0)
				data.text = "\"" + this.data.data[this.data.active].about.value + "\""
			else
				data.text = this.data.data[this.data.active].about.value

			data.country = []
			data.city    = []

			for (let country in this.data.data[this.data.active].cities)
				if (Object.keys(this.data.data[this.data.active].cities[country]).length === 0)
					data.country.push(country)
				else
					for (let city in this.data.data[this.data.active].cities[country])
						data.city.push(+city)

			if (count === true)
				data.count = true

			fetch(this.$domain + "getUsers", {
				method: "POST",
				credentials: 'include',
				body: JSON.stringify(data)
			})
				.then(data => { return data.json() })
				.then(data => {
					if ("count" in data)
						this.count = data.count

					if ("users" in data)
						this.users = data.users 
				})
	},

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

						this.getUsers(true)
					})
			else {
				if (this.$user.templates)
					this.data = Object.assign({}, JSON.parse(this.$user.templates))
				else
					this.$user.setTemplates(JSON.stringify(this.data))

				this.getUsers(true)
			}
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

.close {
	display: flex;
	justify-content: center;
	align-items: center;

	margin-bottom: 15px;
}

.close span {
	cursor: pointer;
	border-radius: 50%;
	background-color: #fff;

	padding: 10px;
}

.close span:hover {
  transition-duration: 0.1s;
  background-color: #dadada;
}

.column {
	flex-direction: column;
}
</style>
