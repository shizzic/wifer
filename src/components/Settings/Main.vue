<template>
	<div class="wrapper" :class="{ none: !settings, visible: settings }">
		<Form class="form scroll" name="settings" @submit="change">
			<Title />
			<Smoke />
			<About />
			<div class="buttons">
				<div @click="$emit('settings')" class="btn">Cancel</div>
				<button class="btn">Save</button>
			</div>
		</Form>
	</div>
</template>

<script scoped>
import { Form } from "vee-validate"
import Title from "@/components/Settings/Title.vue"
import Smoke from "@/components/Settings/Smoke.vue"
import About from "@/components/Settings/About.vue"
export default {
	name: "Settings",
	props: ["settings"],
	components: {
		Form,
		Title,
		Smoke,
		About
	},
	data() {
		return {
		}
	},
	methods: {
		change(values) {
			console.log(values)
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
	width: 50%;
	min-width: 500px;

	background-color: #fff;
	border-radius: 16px;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	
	padding: 30px;

	overflow-y: auto;
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
