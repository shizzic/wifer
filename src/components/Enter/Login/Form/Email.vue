<template>
	<h3>{{ title }}</h3>
	<div>
        <Field name="email" type="email" :rules="rules" maxlength="255" v-slot="{ valid }" @input="good = valid" />
		<i v-show="!good">&#10003;</i>
	</div>
	<ErrorMessage name="email" />
</template>

<script scoped>
import { Field, ErrorMessage  } from 'vee-validate';
import * as yup from 'yup';
export default {
	name: "Email",
	props: ["title", "error"],
	components: {
		Field,
		ErrorMessage 
	},
	data() {
		return {
			rules: yup.string().email(this.error["email"]).required(this.error["required"]),
			good: null
		}
	}
}
</script>

<style scoped>
h3 {
	color: #aeacd8;
	margin-bottom: 10px;
}

div {
	display: flex;
	border-bottom: 2px solid #ffffff;
}

input {
	color: #ffffff;
	font-size: 16px;
	letter-spacing: 1px;
	outline: none;
	border: none;
	background: none;
	width: 100%;
}

i {
	font-weight: 600;
	color: #40e64e;
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
