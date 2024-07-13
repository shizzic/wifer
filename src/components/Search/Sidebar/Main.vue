<template>
	<div class="wrapper hideScroll" ref="sidebar" @touchend="saveScroll">
		<button class="accordion" :class="{ active : data.data[data.active].expanded[2] }" @click="show(2)">{{ titles.templates }}</button>
		<Templates v-show="data.data[data.active].expanded[2]" :lang="template" :data="data" :create="create" />

		<button class="accordion" :class="{ active : data.data[data.active].expanded[0] }" @click="show(0)">
			{{ titles.locations }}
			<span v-show="
				Object.keys(data.data[data.active].countries).length > 0 || 
				Object.keys(data.data[data.active].cities).length > 0
			">*</span>
		</button>
		<Locations v-show="data.data[data.active].expanded[0]" :lang="titles" :data="data" />

		<button class="accordion" :class="{ active : data.data[data.active].expanded[3] }" @click="show(3)">
			{{ titles.images }}
			<span v-show="
				data.data[data.active].images[0] > 0 || 
				data.data[data.active].images[1] < 20 ||
				data.data[data.active].avatar === true
			">*</span>
		</button>
		<Images v-show="data.data[data.active].expanded[3]" :data="data" :avatar="data.data[data.active].avatar" :lang="images" :title="titles.images" />

		<template v-for="(options, index) in slider" :key="index">
			<button class="accordion" :class="{ active : data.data[data.active].expanded[index] }" @click="show(index)">
				{{ titles[index] }}
				<span v-show="data.data[data.active][index][0] > options.min || data.data[data.active][index][1] < options.max">*</span>
			</button>
			<Slider v-show="data.data[data.active].expanded[index]" :title="titles[index]" :data="data" :index="index" :options="options" />
		</template>

		<template v-for="(elem, index) in checkbox" :key="index">
			<button class="accordion" :class="{ active : data.data[data.active].expanded[elem] }" @click="show(elem)">
				{{ titles[elem] }} <span v-show="data.data[data.active][elem].length > 0">*</span>
			</button>
			<Checkbox v-show="data.data[data.active].expanded[elem]" :lang="values[elem]" :data="data" :title="elem" />
		</template>

		<button class="accordion" :class="{ active : data.data[data.active].expanded[1] }" @click="show(1)">
			{{ text.title }}
			<span v-show="
				data.data[data.active].about.is === true || 
				data.data[data.active].about.full === true || 
				data.data[data.active].about.value.length > 0"
			>*</span>
		</button>
		<About v-show="data.data[data.active].expanded[1]" :data="data" :full="data.data[data.active].about.full" :is="data.data[data.active].about.is" 
		:lang="text" />

		<div class="button-wrap">
			<button class="btn" @click="clearFilters">{{ clear }}</button>
			<button class="btn" @click="get">{{ search }}</button>
		</div>
	</div>
</template>

<script scoped>
import Templates from "@/components/Search/Sidebar/Templates/Main.vue"
import Locations from "@/components/Search/Sidebar/Locations/Main.vue"
import Images from "@/components/Search/Sidebar/Images.vue"
import Slider from "@/components/Search/Sidebar/Slider.vue"
import Checkbox from "@/components/Search/Sidebar/Checkbox.vue"
import About from "@/components/Search/Sidebar/About.vue"
export default {
	name: "Sidebar",
	props: ["titles", "values", "text", "images", "search", "data", "template", "filters", "create", "slider", "checkbox", "getUsers", "clear"],
	components: {
		Templates,
		Locations,
		Images,
		Slider,
		Checkbox,
		About
	},
	data() {
		return {
			clearness: {
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
	mounted() {
		setTimeout(this.scroll, 25)
		
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
		get() {
			this.$emit("filters")
			this.updateTemplate()
			this.getUsers(true)
		},

		updateTemplate() {
			if (this.$user.id) {
				fetch(this.$domain + "templates", {
					method: "POST",
					credentials: 'include',
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						text: JSON.stringify(this.data)
					})
				})
					.then(data => {
						if (data.status === 401) {
							this.$user.logout(this.$domain)
							this.$router.push({ name: "search" })
						}
					})
			} else
				this.$user.setTemplates(JSON.stringify(this.data))
		},

		show(row) {
			if (row in this.data.data[this.data.active].expanded)
				delete this.data.data[this.data.active].expanded[row]
			else
				this.data.data[this.data.active].expanded[row] = true
		},

		clearFilters() {
			for (let key in this.clearness)
				this.data.data[this.data.active][key] = this.clearness[key]

			this.get()
		},

		saveScroll() {
			if (this.$refs.sidebar)
				this.$scroll.set({ field: "sidebar", value: this.$refs.sidebar.scrollTop })
		},
		
		scroll() {
			if (this.$refs.sidebar)
				this.$refs.sidebar.scrollTop = this.$scroll.sidebar
		}
	}
}
</script>

<style scoped>
.wrapper {
    width: 100%;
	height: 100%;
	border-radius: 4px;

	overflow-x: hidden;
}

.accordion {
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  	-webkit-tap-highlight-color: transparent;

	background-color: #E3E3E3;
	color: #5C5C5C;
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

	padding: 12px 25px;
}

.btn:first-of-type {
	margin-right: 20px;
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
