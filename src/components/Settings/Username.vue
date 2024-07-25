<template>
	<h3>{{ title }}</h3>
	<div style="margin-bottom: 20px;">
		<Field name="username" :rules="rules" v-slot="{ field, errorMessage }" :modelValue="value"
			@update:modelValue="value = $event">
			<input v-bind="field" maxlength="20" :placeholder="holder" :modelValue="value"
				@update:modelValue="value = $event" @input="error = errorMessage; get($event.target.value);" />
		</Field>
		<div>
			<ErrorMessage name="username" class="error" />
			<template v-if="!error && fetched">
				<span v-show="!available" class="error">{{ lang.taken }}</span>
				<span v-show="available" class="success">{{ lang.available }}</span>
			</template>
			<div class="count">
				<span>{{ value.length }}</span>
				<span> / 20</span>
			</div>
		</div>
	</div>
</template>

<script scoped>
import { Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
export default {
	name: "Title",
	props: ["title", "holder", "lang", "value"],
	emits: ["value"],
	components: {
		Field,
		ErrorMessage
	},
	data() {
		return {
			rules: yup.string().matches(/^[\S]+$/, this.lang.space).required(this.lang.required),
			fetched: false,
			available: false,
			error: null,
			timeout: null,
			oldUsername: null
		}
	},
	beforeMount() {
		this.oldUsername = this.value
	},
	methods: {
		get(username) {
			this.fetched = false
			this.$emit('value', username)

			if (this.timeout)
				clearTimeout(this.timeout)

			this.timeout = setTimeout(() => {
				this.check(username)
			}, 850)
		},

		check(username) {
			if (!this.error && username !== "")
				fetch(this.$domain + "checkUsername?username=" + username, {
					method: "GET",
					credentials: 'include'
				})
					.then(data => {
						if (data.status === 401) {
							this.$user.logout(this.$domain)
							this.$router.push({ name: "search" })
						} else
							return data.json()
					})
					.then(data => {
						if (data === true || data === false) {
							this.available = data
							if (this.oldUsername === this.value)
								this.available = true
							this.fetched = true
						}
					})
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

.error {
	font-size: 15px;
	font-weight: 600;
	color: #ff6b7a;
}

.success {
	font-size: 15px;
	font-weight: 600;
	color: #10b981;
}
</style>