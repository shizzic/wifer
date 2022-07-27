<template>
	<div class="wrapper scroll">
		<button class="accordion" :class="{ active : data.data[data.active].expanded[2] }" @click="show(2)">{{ titles.templates }}</button>
		<Templates v-show="data.data[data.active].expanded[2]" :lang="template" :data="data" />

		<button class="accordion" :class="{ active : data.data[data.active].expanded[0] }" @click="show(0)">{{ titles.locations }}</button>
		<Locations v-show="data.data[data.active].expanded[0]" :lang="titles" :data="data" />

		<template v-for="(options, index) in slider" :key="index">
			<button class="accordion" :class="{ active : data.data[data.active].expanded[index] }" @click="show(index)">{{ titles[index] }}</button>
			<Slider v-show="data.data[data.active].expanded[index]" :title="titles[index]" :data="data" :index="index" :options="options" />
		</template>

		<template v-for="(elem, index) in checkbox" :key="index">
			<button class="accordion" :class="{ active : data.data[data.active].expanded[elem] }" @click="show(elem)">{{ titles[elem] }}</button>
			<Checkbox v-show="data.data[data.active].expanded[elem]" :lang="values[elem]" :data="data" :title="elem" />
		</template>

		<button class="accordion" :class="{ active : data.data[data.active].expanded[1] }" @click="show(1)">{{ text.title }}</button>
		<About v-show="data.data[data.active].expanded[1]" :data="data" :full="data.data[data.active].about.full" :lang="text" />

		<div class="button-wrap">
			<button class="btn" @click="get">{{ search }}</button>
		</div>
	</div>
</template>

<script scoped>
import Templates from "@/components/Search/Sidebar/Templates/Main.vue"
import Locations from "@/components/Search/Sidebar/Locations/Main.vue"
import Slider from "@/components/Search/Sidebar/Slider.vue"
import Checkbox from "@/components/Search/Sidebar/Checkbox.vue"
import About from "@/components/Search/Sidebar/About.vue"
export default {
	name: "Sidebar",
	props: ["titles", "values", "text", "search", "data", "template"],
	components: {
		Templates,
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
			}
		}
	},
	methods: {
		get() {
			this.updateTemplate()
		},

		updateTemplate() {
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

		show(row) {
			if (row in this.data.data[this.data.active].expanded)
				delete this.data.data[this.data.active].expanded[row]
			else
				this.data.data[this.data.active].expanded[row] = true
		}
	}
}
</script>

<style scoped>
.wrapper {
	background-color: #fff;
	word-break: break-all;
    border-radius: 8px;

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

	background-color: #E3E3E3;
	color: #5C5C5C;;
	cursor: pointer;
	padding: 18px;
	width: 100%;
	border: none;
	text-align: left;
	outline: none;
	font-size: 17px;
	font-weight: 700;
	transition: 0.4s;
}

.accordion:hover, .active {
  background-color: rgb(188, 188, 188); 
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
	background-color: #808080;

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
