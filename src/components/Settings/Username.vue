<template>
	<h3>{{ title }}</h3>
	<div>
		<Field name="username" :rules="rules" v-slot="{ field }">
			<input v-bind="field" maxlength="20" :placeholder="holder" v-model="value" />
		</Field>
		<div>
			<ErrorMessage name="username" class="error" />
			<div class="count">
				<span>{{ value.length }}</span>
				<span> / 20</span>
			</div>
		</div>
	</div>
</template>

<script scoped>
import { Field, ErrorMessage   } from 'vee-validate'
import * as yup from 'yup'
export default {
	name: "Title",
	props: ["title", "holder", "value", "lang"],
	components: {
		Field,
		ErrorMessage
	},
	data() {
		return {
			rules: yup.string().matches(/^[\S]+$/, this.lang.space).required(this.lang.required)
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
input:-webkit-autofill:active
{
	transition: background-color 5000s ease-in-out 0s;
}

.count {
    font-weight: 700;
    color: #4d4d4d;
    margin-bottom: 30px;

    float: right;
}

.error {
	font-size: 15px;
	font-weight: 600;
	color: #fd8692;
}
</style>