<template>
	<div class="wrap">
		<Sidebar :titles="titles[l]" :values="values[l]" :text="text[l]" :search="search[l]" :data="data" :templates="templates" 
		:template="template[l]" @data="data = $event" />
		<List />
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
		const template = SearchJS().template

		return {
			titles,
			values,
			text,
			search,
			template
		}
	},
	data() {
		return {
			templates: {
				active: null,
				data: {}
			},
			data: {
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
	},
	beforeMount() {
		this.getTemplates()
	},
	methods: {
		getTemplates() {
			fetch(this.$domain + "templates", {
				method: "GET",
				credentials: 'include'
			})
				.then(data => { return data.json() })
				.then(data => { console.log(JSON.parse(data.data))
					if (data)
						this.templates = JSON.parse(data.data)
				})
		}
	}
}
</script>

<style scoped>
.wrap {
	background-color: #daa77b;
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
