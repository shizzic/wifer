<template>
	<h3>{{ title }}</h3>
	<div>
        <Field name="confirm" :rules="rules" maxlength="128" v-slot="{ field, errorMessage }">
			<input v-bind="field" type="password" v-model="value" />

			<span v-show="!errorMessage && value" style="color: #40e64e;">&#10004;</span>
			<span v-show="errorMessage" style="font-size: 12px;">&#10060;</span>
		</Field>
	</div>
	<ErrorMessage name="confirm" class="error" />
</template>

<script scoped>
import { Field, ErrorMessage  } from 'vee-validate';
import * as yup from 'yup';
export default {
	name: "Confirm",
	props: ["title", "error", "password"],
	components: {
		Field,
		ErrorMessage 
	},
	watch: {
		password(n) {
			this.rules = yup.string().required(this.error["required"]).oneOf([n], this.error["match"])
		}
	},
	data() {
		return {
			rules: yup.string().required(this.error["required"]).oneOf([this.password], this.error["match"]),
			value: null
		}
	}
}
</script>

<style scoped>
h3 {
	font-size: 20px;
	color: #aeacd8;

    margin-top: 50px;
	margin-bottom: 10px;
}

div {
	border-bottom: 2px solid #ffffff;

	display: flex;
	margin-bottom: 10px;
}

input {
	color: #ffffff;
	font-size: 22px;
	font-weight: 400;
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

input[type='password'] {
    letter-spacing: 0.150em;
}

.error {
	font-size: 15px;
	font-weight: 600;
	color: #fd8692;
}
</style>
