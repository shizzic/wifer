<template>
	<div class="wrapper">
		<Form class="form scroll" name="settings" @submit="change" @mousedown="() => { up = true }"
			@mouseup="() => { up = null }" v-click-outside="close">
			<Username :title="titles[l].username" :holder="lang.placeholder[l].username" :lang="lang.username[l]"
				:value="data.username" @value="data.username = $event" />
			<Title :title="titles[l].title" :holder="lang.placeholder[l].title" :value="data.title"
				@value="data.title = $event" />

			<Sex :title="titles[l].sex" :value="data.sex" @value="data.sex = $event" />

			<Age :title="titles[l].age" :value="data.age" @value="data.age = $event" />
			<Height :title="titles[l].height" :value="data.height" @value="data.height = $event" />
			<Weight :title="titles[l].weight" :value="data.weight" @value="data.weight = $event" />

			<div class="block">
				<Country :title="titles[l].country" :id="data.country_id" @value="data.country_id = $event" />
				<City :key="data.country_id" :title="titles[l].city" :id="data.city_id" :country="data.country_id"
					@value="data.city_id = $event" />
			</div>

			<div v-for="(row, index) in selects" :key="index" class="block">
				<Select v-for="(elem, key) in row" :key="key" :title="titles[l][key]" :list="info[key]"
					:value="data[key]" :blank="lang.blank[l]" :index="elem" @value="data[key] = $event" />
			</div>

			<About :title="titles[l].about" :holder="lang.placeholder[l].about" :value="data.about"
				@value="data.about = $event" />

			<div class="block">
				<Search :title="titles[l].search" :list="info.search" :value="data.search"
					@value="data.search.push($event)" @clear="data.search.splice($event, 1)" />
			</div>

			<Children :title="titles[l].children" :value="data.children" @value="data.children = $event" />

			<div class="buttons">
				<div @click="data = Object.assign({}, fields); $emit('close');" class="btn">{{ lang.buttons[l].cancel }}
				</div>
				<button class="btn">{{ lang.buttons[l].save }}</button>
			</div>
		</Form>
	</div>
</template>

<script scoped>
import { Form } from "vee-validate"
import Username from "@/components/Settings/Username.vue"
import Title from "@/components/Settings/Title.vue"

import Sex from "@/components/Settings/Sex.vue"

import Age from "@/components/Settings/Age.vue"
import Height from "@/components/Settings/Height.vue"
import Weight from "@/components/Settings/Weight.vue"

import Country from "@/components/Settings/Country.vue"
import City from "@/components/Settings/City.vue"

import Select from "@/components/Settings/Select.vue"
import Search from "@/components/Settings/Search.vue"

import About from "@/components/Settings/About.vue"
import Children from "@/components/Settings/Children.vue"
export default {
	name: "Settings",
	props: ["l", "lang", "titles", "fields", "info"],
	components: {
		Form,
		Username,
		Title,
		Sex,
		Age,
		Height,
		Weight,
		Country,
		City,
		Select,
		Search,
		About,
		Children
	},
	data() {
		return {
			data: null,
			selects: [
				{ smokes: 8, drinks: 7 },
				{ body: 6, ethnicity: 5 },
				{ income: 4, industry: 3 },
				{ prefer: 2 }
			],
			up: null
		}
	},
	beforeMount() {
		this.data = Object.assign({}, this.fields)
	},
	methods: {
		change() {
			this.data.about = this.data.about.trim()
			this.data.about = this.data.about.replaceAll(/(\n\n)\n*/g, "\n\n")

			fetch(this.$domain + "change", {
				method: "PUT",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(this.data)
			})
				.then(data => {
					if (data.status === 401) {
						this.$user.logout(this.$domain)
						this.$router.push({ name: "search" })
					} else
						return data.json()
				})
				.then(data => {
					if ("error" in data)
						this.$toast.error(this.lang.response[this.l][data.error])
					else {
						this.$emit("close")
						this.$emit("data", this.data)
						this.$toast.success(this.lang.success[this.l])
					}
				})
		},

		close() {
			if (!this.up)
				this.$emit('close')

			this.up = null
		}
	}
}
</script>

<style scoped>
.wrapper {
	z-index: 10;
	background-color: rgba(0, 0, 0, 0.6);

	width: 100%;
	height: 100%;
	padding: 30px;

	position: absolute;
	top: 0;
	left: 0;

	display: flex;
	justify-content: center;
}

.form {
	width: 50%;
	min-width: 500px;

	background-color: #fff;
	border-radius: 10px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;

	padding: 30px;
}

.block {
	width: 100%;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.buttons {
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: box-shadow 0.6s cubic-bezier(.79, .21, .06, .81);
}

.btn {
	cursor: pointer;
	font-size: 26px;
	color: #4d4d4d;

	border-radius: 6px;
	background-color: #ededed;

	display: flex;
	justify-content: center;
	align-items: center;

	height: 100%;
	padding: 8px 25px;
	margin: 0 5%;

	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;

	box-shadow:
		-7px -7px 20px 0px #fff9,
		-4px -4px 5px 0px #fff9,
		7px 7px 20px 0px #0002,
		4px 4px 5px 0px #0001;

	transition: box-shadow 0.6s cubic-bezier(.79, .21, .06, .81);
}

.btn:hover {
	color: rgba(102, 102, 102, .8);
	animation: colorchange 3s linear infinite;
}

.btn:active {
	box-shadow:
		4px 4px 6px 0 rgba(255, 255, 255, .5),
		-4px -4px 6px 0 rgba(116, 125, 136, .2),
		inset -4px -4px 6px 0 rgba(255, 255, 255, .5),
		inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
}

@media screen and (max-width: 528px) {
	.wrapper {
		padding: 20px;
	}

	.form {
		width: 100%;
		min-width: 100px;
	}

	.btn {
		font-size: 20px;
		padding: 8px 18px;
	}
}

@media screen and (max-width: 480px) {
	.block {
		flex-direction: column;
		flex-wrap: nowrap;
	}
}

button {
	outline: none;
	border: none;

	font-family: 'PT Sans';
}
</style>
