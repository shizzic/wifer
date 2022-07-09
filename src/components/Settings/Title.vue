<template>
	<h3>Title</h3>
	<Field name="title" v-slot="{ field }">
		<input v-bind="field" maxlength="254" v-model="value" />
	</Field>
</template>

<script scoped>
import { Field } from 'vee-validate';
export default {
	name: "Title",
	props: ["title"],
	components: {
		Field
	},
	data() {
		return {
			value: null
		}
	}
}
</script>

<style scoped>
h3 {
	color: #4d4d4d;
	font-size: 20px;

	margin-bottom: 10px;
}

input {
	color: #4d4d4d;
	font-size: 20px;
	letter-spacing: 1px;
	outline: none;
	border: none;
	background: none;

	width: 100%;
	max-width: 400px;
	padding: 10px 15px;
	margin-bottom: 30px;

	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  	-webkit-tap-highlight-color: transparent;

	border-radius: 6px;
	background-color: #e0e5ec;
	background-color: #ededed;

  	box-shadow:
	-7px -7px 20px 0px #fff9,
	-4px -4px 5px 0px #fff9,
	7px 7px 20px 0px #0002,
	4px 4px 5px 0px #0001;

 	transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
}

input:focus {
	box-shadow:
	4px 4px 6px 0 rgba(255,255,255,.5),
  	-4px -4px 6px 0 rgba(116, 125, 136, .2), 
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active
{
	transition: background-color 5000s ease-in-out 0s;
	color: #ffffff;
	-webkit-text-fill-color: #ffffff;
	caret-color: #ffffff;
}
</style>
