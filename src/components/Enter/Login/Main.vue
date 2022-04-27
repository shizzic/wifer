<template>
	<div class="wrap">
		<Title :l="l" :lang="lang['title']" />

		<Form name="login" @submit="onSubmit">
			<Email :title="lang['input'][l]['email']" :error="lang['error'][l]['email']" />
			<Password :title="lang['input'][l]['password']" :error="lang['error'][l]['password']" />
			<button>{{ lang['button'][l] }}</button>
		</Form>

		<Forget :l="l" :lang="lang['reset']" />
	</div>
</template>

<script scoped>
import { LoginJS } from "@/store/Langs/Login";
import Title from "@/components/Enter/Login/Title"
import Email from "@/components/Enter/Login/Form/Email"
import Password from "@/components/Enter/Login/Form/Password"
import { Form } from 'vee-validate';
import Forget from "@/components/Enter/Login/Forget"
export default {
	name: "Login",
	props: ["l"],
	components: {
		Title,
		Form,
		Email,
		Password,
		Forget
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
	padding: 50px 20px;

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

	position: relative;
	display: block;
	margin: 0 auto;
	margin-top: 50px;
	margin-bottom: 20px;
	padding: 15px 40px;
}

button:hover {
  transition-duration: 0.1s;
  background-color: #dadada;
}

button:after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.5s;
  box-shadow: 0 0 10px 40px white;
}

button:active:after {
  box-shadow: 0 0 0 0 white;
  position: absolute;
  border-radius: 4em;
  left: 0;
  top:0;
  opacity: 1;
  transition: 0s;
}
</style>
