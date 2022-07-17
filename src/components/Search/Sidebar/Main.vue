<template>
	<div class="wrapper scroll">
		<button class="accordion" :class="{ active : expanded[0] }" @click="show(0)">{{ titles.locations }}</button>
		<Locations v-show="expanded[0]" :lang="titles" />

		<template v-for="(elem, index) in checkbox" :key="index">
			<button class="accordion" :class="{ active : expanded[elem] }" @click="show(elem)">{{ titles[elem] }}</button>
			<Checkbox v-show="expanded[elem]" :lang="values[elem]" :data="data" :title="elem" />
		</template>
	</div>
</template>

<script scoped>
import Locations from "@/components/Search/Sidebar/Locations/Main.vue"
import Checkbox from "@/components/Search/Sidebar/Checkbox.vue"
export default {
	name: "Sidebar",
	props: ["titles", "values"],
	components: {
		Locations,
		Checkbox
	},
	data() {
		return {
			checkbox: ["sex", "body", "smokes", "drinks", "ethnicity", "income", "industry", "search", "prefer"],
			expanded: {},
			data: {
				sex: [],
				body: [],
				smokes: [],
				drinks: [],
				ethnicity: [],
				income: [],
				industry: [],
				search: [],
				prefer: []
			}
		}
	},
	methods: {
		show(row) {
			if (row in this.expanded)
				delete this.expanded[row]
			else
				this.expanded[row] = true
		}
	}
}
</script>

<style scoped>
.wrapper {
	background-color: #fff;
	word-break: break-all;
    border-radius: 4px;

    width: 25%;
	min-width: 300px;
	height: 100%;
    margin-right: 25px;
	
	overflow-y: auto;
	overflow-x: hidden;
}

@media screen and (max-width: 730px) {
    .wrapper {
        position: absolute;
        left: -500px;
        top: 0;
    }
}

.accordion {
	background-color: #eee;
	color: #4d4d4d;
	cursor: pointer;
	padding: 18px;
	width: 100%;
	border: none;
	text-align: left;
	outline: none;
	font-size: 17px;
	transition: 0.4s;
}

.accordion:hover, .active {
  background-color: #ccc; 
}

.accordion:after {
  content: '\02795';
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2796";
}
</style>
