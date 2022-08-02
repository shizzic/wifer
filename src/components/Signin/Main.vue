<template>
	<div class="wrap scroll">
		<Title :l="l" :lang="lang.title" />
		<Api :success="success" :response="response" :l="l" />

		<Form name="signin" @submit="signin">
			<Email :title="lang.input[l]" :error="lang.error[l]" />
			<button>{{ lang.button[l] }}</button>
		</Form>
	</div>
</template>

<script scoped>
import { userJS } from "@/store/user"
import { SigninJS } from "@/store/Langs/Signin"
import Title from "@/components/Signin/Title.vue"
import Api from "@/components/Signin/Api/Main.vue"
import Email from "@/components/Signin/Form/Email.vue"
import { Form } from 'vee-validate'
export default {
	name: "Signin",
	props: ["l"],
	components: {
		Title,
		Api,
		Form,
		Email
	},
	setup() {
        const lang 	   = SigninJS()
		const response = SigninJS()["response"]
		const success  = SigninJS()["success"]
		const email    = SigninJS()["email"]

		return {
            lang,
			response,
			success,
			email
		}
	},
	beforeMount() {
		if (userJS().id)
			this.$router.push({ name: "search" })
	},
	methods: {
		signin(values) {
			let form = new FormData()
			form.append("email", values["email"])

			fetch(this.$domain + "signin", {
				method: "POST",
				credentials: 'include',
				body: form
			})
				.then(data => { return data.json() })
				.then(data => {
					if ("error" in data)
						this.$toast.error(this.response[this.l][data.error])
					else
						this.$toast.show(this.email[this.l])
				})
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
	font-family: 'PT Sans';
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
