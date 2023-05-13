<template>
	<h3>{{ title }}</h3>
	<div>
        <Field name="email" :rules="rules" v-slot="{ field, errorMessage }" v-model="value">
			<input v-bind="field" type="email" v-model="value" maxlength="254" />

			<span v-show="!errorMessage && value" style="color: #40e64e;">&#10004;</span>
			<span v-show="errorMessage" style="font-size: 12px;">&#10060;</span>
		</Field>
	</div>
	<ErrorMessage name="email" class="error" />
</template>

<script scoped>
import { Field, ErrorMessage  } from 'vee-validate'
import * as yup from 'yup'
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
			value: ""
		}
	}
}
</script>

<style scoped>
h3 {
	font-size: 20px;
	color: #aeacd8;

	margin-bottom: 10px;
}

div {
	border-bottom: 2px solid #ffffff;

	display: flex;
	margin-bottom: 10px;
}

input {
	color: #ffffff;
	font-size: 18px;
	letter-spacing: 1px;
	outline: none;
	border: none;
	background: none;
	width: 100%;

	padding-bottom: 5px;
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

.error {
	font-size: 15px;
	font-weight: 600;
	color: #fd8692;
}
</style>
