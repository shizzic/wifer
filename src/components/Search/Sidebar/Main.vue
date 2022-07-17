<template>
	<div class="wrapper scroll">
		<button class="accordion" :class="{ active : expanded[0] }" @click="show(0)">{{ titles.locations }}</button>
		<Locations v-show="expanded[0]" :lang="titles" />

		<template v-for="(options, index) in slider" :key="index">
			<button class="accordion" :class="{ active : expanded[index] }" @click="show(index)">{{ titles[index] }}</button>
			<Slider v-show="expanded[index]" :title="titles[index]" :data="data" :index="index" :options="options" />
		</template>

		<template v-for="(elem, index) in checkbox" :key="index">
			<button class="accordion" :class="{ active : expanded[elem] }" @click="show(elem)">{{ titles[elem] }}</button>
			<Checkbox v-show="expanded[elem]" :lang="values[elem]" :data="data" :title="elem" />
		</template>

		<button class="accordion" :class="{ active : expanded[1] }" @click="show(1)">{{ text.title }}</button>
		<About v-show="expanded[1]" :data="data" :full="data.about.full" :lang="text" />

		<div class="button-wrap">
			<button class="btn">{{ search }}</button>
		</div>
	</div>
</template>

<script scoped>
import Locations from "@/components/Search/Sidebar/Locations/Main.vue"
import Slider from "@/components/Search/Sidebar/Slider.vue"
import Checkbox from "@/components/Search/Sidebar/Checkbox.vue"
import About from "@/components/Search/Sidebar/About.vue"
export default {
	name: "Sidebar",
	props: ["titles", "values", "text", "search"],
	components: {
		Locations,
		Slider,
		Checkbox,
		About
	},
	data() {
		return {
			checkbox: ["sex", "body", "smokes", "drinks", "ethnicity", "income", "industry", "search", "prefer"],
			slider: {
				age: { min: 18, max: 80 },
				weight: { min: 35, max: 220 },
				height: { min: 140, max: 220 }
			},
			expanded: {},
			data: {
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
	height: 100%;
	
	overflow-y: auto;
	overflow-x: hidden;
}

@media screen and (min-width: 730px) {
    .wrapper {
		min-width: 350px;

		margin-right: 25px;
    }
}

@media screen and (max-width: 730px) {
    .wrapper {
		width: 100%;
		min-width: none;

		margin: 0;
        /* position: absolute;
        left: -500px;
        top: 0; */
    }
}

.accordion {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  	-webkit-tap-highlight-color: transparent;

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

.button-wrap {
	background-color: #5d5d5d;

	display: flex;
	justify-content: center;
	align-items: center;

	padding: 20px 0;
}

.btn {
	font-size: 16px;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  	-webkit-tap-highlight-color: transparent;
	background-color: #fff;
	border-radius: 50px;
	border: none;
	cursor: pointer;
	color: #4d4d4d;

	padding: 15px 30px;
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
</style>
