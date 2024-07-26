<template>
	<h3>{{ title }}</h3>
	<div style="margin-bottom: 20px;">
		<Field name="title" v-slot="{ field }" v-model="input_value">
			<input v-bind="field" maxlength="150" :placeholder="holder" v-model="input_value" @input="$emit('value', $event.target.value)" />
		</Field>
		<div class="count">
			<span>{{ value.length }}</span>
			<span> / 150</span>
		</div>
	</div>
</template>

<script scoped>
import { Field } from 'vee-validate';
export default {
	name: "Title",
	props: ["title", "holder", "value"],
	emits: ["value"],
	components: {
		Field
	},
	data() {
		return {
			input_value: ''
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
	opacity: 1;
	visibility: visible;
	color: #000;
	font-size: 20px;
	letter-spacing: 1px;
	outline: none;
	border: none;
	background: none;

	width: 100%;
	max-width: 400px;
	padding: 10px 15px;
	margin-bottom: 5px;

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
input:-webkit-autofill:active {
	transition: background-color 5000s ease-in-out 0s;
}

.count {
	font-weight: 700;
	color: #4d4d4d;

	float: right;
}
</style>