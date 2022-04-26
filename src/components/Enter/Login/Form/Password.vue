<template>
	<h3>{{ title }}</h3>
	<div>
        <Field name="password" :rules="rules" maxlength="128" v-slot="{ field, errorMessage }">
			<input v-bind="field" type="password" v-model="value" />

			<span v-show="!errorMessage && value" style="color: #40e64e;">&#10004;</span>
			<span v-show="errorMessage" style="font-size: 12px;">&#10060;</span>
		</Field>
	</div>
	<ErrorMessage name="password" class="error" />
</template>

<script scoped>
import { Field, ErrorMessage  } from 'vee-validate';
import * as yup from 'yup';
export default {
	name: "Password",
	props: ["title", "error"],
	components: {
		Field,
		ErrorMessage 
	},
	data() {
		return {
			rules: yup.string().min(8, this.error["min"]).matches(/^[\S]+$/, this.error["space"]).required(this.error["required"]),
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

input[type='password'] {
    letter-spacing: 0.150em;
}

.error {
	font-size: 15px;
	font-weight: 600;
	color: #fd8692;
}
</style>
