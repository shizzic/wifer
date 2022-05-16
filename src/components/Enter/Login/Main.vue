<template>
	<div class="wrap scroll">
		<router-link class="link" :to="{ name: 'registration' }">{{ link[l] }}</router-link>
		<Title :l="l" :lang="lang['title']" />

		<Form name="login" @submit="login">
			<Email :title="lang['input'][l]['email']" :error="lang['error'][l]['email']" />
			<Password :title="lang['input'][l]['password']" :error="lang['error'][l]['password']" />
			<button>{{ lang['button'][l] }}</button>
		</Form>

		<Forget :l="l" :lang="lang['reset']" />
	</div>
</template>

<script scoped>
import { LoginJS } from "@/store/Langs/Enter/Login";
import Title from "@/components/Enter/Login/Title.vue"
import Email from "@/components/Enter/Login/Form/Email.vue"
import Password from "@/components/Enter/Login/Form/Password.vue"
import Forget from "@/components/Enter/Login/Forget.vue"
import { Form } from 'vee-validate';
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
        const lang 	   = LoginJS();
		const response = LoginJS()["response"];
		const success  = LoginJS()["success"];
		const link 	   = LoginJS()["link"];

		return {
            lang,
			response,
			success,
			link
		}
	},
	data() {
		return {
		}
	},
	methods: {
		login(values) {
			let form = new FormData()
			form.append("email", values["email"])
			form.append("password", values["password"])

			fetch(this.$domain + "login", {
				method: "POST",
				credentials: 'include',
				body: form
			})
				.then(data => { return data.json() })
				.then(data => {
					if ("error" in data)
						this.$toast.error(this.response[this.l][data["error"]])
					else {
						this.$user.setID(data["id"])
						this.$router.push({ name: "search" })
						this.$toast.success(this.success[this.l])
					}
				})
		}
	}
}
</script>

<style scoped>
.link {
	cursor: pointer;
	color: #000;
	font-size: 17px;
	font-weight: 600;
	background-color: #ffffff;
	text-decoration: none;
	border-radius: 6px;
	
	display: block;
	padding: 10px 30px;
	margin-bottom: 50px;
}

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
