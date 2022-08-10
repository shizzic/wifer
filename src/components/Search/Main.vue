<template>
	<div class="wrap" :class="{ column : filters }">
		<div class="side-wrap" :class="{ shown : filters }">
			<div v-show="filters" class="close"><span @click="filters = null">&#10060;</span></div>
			<Sidebar 
				:titles="titles[l]" :values="values[l]" :text="text[l]" :search="search[l]" :template="template[l]" :data="data"
				:filters="filters" :create="createTemplate" :slider="slider" :checkbox="checkbox" :getUsers="getUsers" 
				:images="images[l]" :clear="clear[l]"
				@filters="filters = null" 
			/>
		</div>

		<List v-show="!filters"
			:l="l" :data="data" :sort="sort[l]" :create="createTemplate" :users="users" :mode="data.data[data.active].mode" 
			:photos="photos[l]" :count="count" :founded="founded[l]" :getUsers="getUsers" :titles="titles[l]" :values="values[l]"
			@filters="filters = true" @moved="moved = true"
		/>
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
		const images   = SearchJS().images
		const search   = SearchJS().search
		const clear    = SearchJS().clear
		const sort     = SearchJS().sort
		const template = SearchJS().template
		const photos   = SearchJS().photos
		const founded  = SearchJS().founded

		return {
			titles,
			values,
			text,
			images,
			search,
			clear,
			sort,
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
						images: [0, 20],
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
						},
						avatar: false
					}
				}
			},

			users: null,
			count: 0,

			moved: null
		}
	},
	beforeMount() {
		this.getTemplates()
	},
	beforeUnmount() {
		if (this.moved)
			this.createTemplate()
	},
	methods: {
		getUsers(count = false) {
			let data   	   = {}
			data.skip  	   = this.data.data[this.data.active].skip
			data.limit 	   = this.data.data[this.data.active].limit
			data.sort      = this.data.data[this.data.active].sort

			for (let elem in this.slider) {
				data[elem + "Min"] = this.data.data[this.data.active][elem][0]
				data[elem + "Max"] = this.data.data[this.data.active][elem][1]
			}

			data["imagesMin"] = this.data.data[this.data.active].images[0]
			data["imagesMax"] = this.data.data[this.data.active].images[1]
			data["imagesMin"] = this.data.data[this.data.active].images[0]
			data["avatar"] 	  = this.data.data[this.data.active].avatar

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

			for (let country in this.data.data[this.data.active].countries)
				data.country.push(+country)

			for (let country in this.data.data[this.data.active].cities) {
				if (Object.keys(this.data.data[this.data.active].cities[country]).length > 0) {
					let index = data.country.indexOf(+country)
					data.country.splice(index, 1)
				}
				
				for (let city in this.data.data[this.data.active].cities[country])
					data.city.push(+city)
			}
			
			data.count = count

			fetch(this.$domain + "getUsers", {
				method: "POST",
				credentials: "include",
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

			this.moved = null
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
	z-index: 10;
	position: relative;
	background-color: #2a3d39;
	word-break: break-all;

	width: 100%;
	height: 100%;

	display: flex;
	padding: 25px;
}

.side-wrap {
	width: 25%;
	border-radius: 4px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	overflow: hidden;
}

@media screen and (max-width: 730px) {
    .wrap {
        padding: 15px;
    }
}

@media screen and (min-width: 790px) {
    .side-wrap {
		min-width: 350px;
		margin-right: 25px;
    }
}

@media screen and (max-width: 790px) {
    .side-wrap {
		width: 100%;
		min-width: none;

		margin: 0;
        position: absolute;
        left: 0;
        top: -3000px;
    }
}

.close {
	width: 100%;
	background-color: #2a3d39;

	display: flex;
	justify-content: center;
	align-items: center;

	margin-bottom: 15px;
}

.close span {
	font-size: 11px;
	cursor: pointer;
	border-radius: 50%;
	background-color: #fff;

	padding: 8px;
}

.close span:hover {
  transition-duration: 0.1s;
  background-color: #dadada;
}

.close span:active {
  transition-duration: 0.1s;
  background-color: #c2c2c2;
}

.column {
	flex-direction: column;
}

.shown {
	position: static;
	height: 100%;
}
</style>
