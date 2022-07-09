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
	color: #000;
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

	border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
}

input:focus {
	border-color: #000;
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
