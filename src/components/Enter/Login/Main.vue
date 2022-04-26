<template>
	<div class="wrap">
		<Title :l="l" :lang="lang['title']" />

		<Form name="login" @submit="onSubmit">
			<Email :title="lang['input'][l]['email']" :error="lang['error'][l]['email']" />
			<Password :title="lang['input'][l]['password']" :error="lang['error'][l]['password']" />
			<button>{{ lang['button'][l] }}</button>
		</Form>
	</div>
</template>

<script scoped>
import { LoginJS } from "@/store/Langs/Login";
import Title from "@/components/Enter/Login/Title"
import Email from "@/components/Enter/Login/Form/Email"
import Password from "@/components/Enter/Login/Form/Password"
import { Form } from 'vee-validate';
export default {
	name: "Login",
	props: ["l"],
	components: {
		Title,
		Form,
		Email,
		Password
	},
	setup() {
        const lang  = LoginJS();

		return {
            lang
		}
	},
	data() {
		return {
		}
	},
	methods: {
		onSubmit(values) {
			console.log(values);
		}
	}
}
</script>

<style scoped>
.wrap {
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 0 auto;
	padding: 0 20px;

	overflow-y: auto;
}

.wrap::before, .wrap::after {
  content: '';
  margin: auto;
}

form {
	width: 100%;
	min-width: 200px;
	max-width: 550px;
}

button {
	cursor: pointer;
	font-size: 16px;
	font-weight: 600;
	background-color: #ffffff;
	border: none;
	outline: none;
	border-radius: 30px;
	-webkit-tap-highlight-color: transparent;

	display: block;
	margin: 0 auto;
	margin-top: 50px;
	padding: 15px 40px;
}
</style>
