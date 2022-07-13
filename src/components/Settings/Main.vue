<template>
	<div class="wrapper" :class="{ none: !settings, visible: settings }">
		<Form class="form scroll" name="settings" @submit="change">
			<Username :title="titles[l].username" :holder="lang.placeholder[l].username" :lang="lang.username[l]" :value="data.username"
			@value="data.username = $event" />
			<Title :title="titles[l].title" :holder="lang.placeholder[l].title" :value="data.title" @value="data.title = $event" />

			<Sex :title="titles[l].sex" :value="data.sex" @value="data.sex = $event" />

			<Age :title="titles[l].age" :value="data.age" @value="data.age = $event" />
			<Height :title="titles[l].height" :value="data.height" @value="data.height = $event" />
			<Weight :title="titles[l].weight" :value="data.weight" @value="data.weight = $event" />

			<div class="block">
				<Smoke :title="titles[l].smokes" :list="info.smokes" :value="data.smokes" :blank="lang.blank[l]" 
				@value="data.smokes = $event" />
				<Drink :title="titles[l].drinks" :list="info.drinks" :value="data.drinks" :blank="lang.blank[l]" 
				@value="data.drinks = $event" />
			</div>

			<div class="block">
				<Body :title="titles[l].body" :list="info.body" :value="data.body" :blank="lang.blank[l]" 
				@value="data.body = $event" />
				<Ethnicity :title="titles[l].ethnicity" :list="info.ethnicity" :value="data.ethnicity" :blank="lang.blank[l]" 
				@value="data.ethnicity = $event" />
			</div>

			<div class="block">
				<Income :title="titles[l].income" :list="info.income" :value="data.income" :blank="lang.blank[l]" 
				@value="data.income = $event" />
				<Industry :title="titles[l].industry" :list="info.industry" :value="data.industry" :blank="lang.blank[l]" 
				@value="data.industry = $event" />
			</div>

			<Search :title="titles[l].search" :list="info.search" :value="data.search" :blank="lang.blank[l]" 
			@value="data.search = $event" />

			<About :title="titles[l].about" :holder="lang.placeholder[l].about" :value="data.about" @value="data.about = $event" />
			<Children :title="titles[l].children" :value="data.children" @value="data.children = $event" />

			<div class="buttons">
				<div @click="data = Object.assign({}, fields); $emit('settings');" class="btn">{{ lang.buttons[l].cancel }}</div>
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

import Smoke from "@/components/Settings/Smoke.vue"
import Drink from "@/components/Settings/Drink.vue"

import Body from "@/components/Settings/Body.vue"
import Ethnicity from "@/components/Settings/Ethnicity.vue"

import Income from "@/components/Settings/Income.vue"
import Industry from "@/components/Settings/Industry.vue"

import Search from "@/components/Settings/Search.vue"
import Children from "@/components/Settings/Children.vue"

import About from "@/components/Settings/About.vue"
export default {
	name: "Settings",
	props: ["settings", "l", "lang", "titles", "fields", "info"],
	components: {
    Form,
	Username,
    Title,
    Sex,
    Age,
    Height,
    Weight,
    Smoke,
    Drink,
	Body,
	Ethnicity,
	Income,
	Industry,
	Search,
	Children,
    About
},
	data() {
		return {
			data: null
		}
	},
	beforeMount() {
		this.data = Object.assign({}, this.fields)
	},
	methods: {
		change() {
			let form = new FormData()
			for (let key in this.data)
				form.append(key, this.data[key])

			fetch(this.$domain + "change", {
				method: "PUT",
				credentials: 'include',
				body: form
			})
				.then(data => { return data.json() })
				.then(data => {
					if ("error" in data)
						this.$toast.error(this.lang.response[this.l][data.error])
					else {
						this.$emit('settings')
						this.$emit("data", this.data)
						this.$toast.success(this.lang.success[this.l])
					}
				})
		}
	}
}
</script>

<style scoped>
.wrapper {
	background-color: rgba(0, 0, 0, 0.6);
	
	width: 100%;
	height: 100%;
	padding: 30px;

	position: absolute;
	top: 0;
	left: 0;

	display: flex;
	justify-content: center;

	transition: visibility 0s, opacity 0.2s linear;
}

.form {
	height: 100%;
	height: auto;
	width: 50%;
	min-width: 500px;

	background-color: #fff;
	border-radius: 10px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	
	padding: 30px;

	overflow-y: auto;
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

 	transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
}
.btn:hover {
  	color: rgba(102, 102, 102, .8); 
  	animation: colorchange 3s linear infinite;
}
.btn:active {
  	box-shadow:
	4px 4px 6px 0 rgba(255,255,255,.5),
  	-4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
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


.visible {
	visibility: visible;
  	opacity: 1;
}

.none {
	visibility: hidden;
  	opacity: 0;
}

button {
	outline: none;
	border: none;

	font-family: 'PT Sans';
}
</style>
