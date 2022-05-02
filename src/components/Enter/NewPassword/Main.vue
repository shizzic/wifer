<template>
	<div class="wrap">
		<Title :l="l" :lang="lang['title']" />

		<Form name="login" @submit="change">
			<Password :title="lang['input'][l]['password']" :error="lang['error'][l]['password']" @password="password = $event" />
			<Confirm :title="lang['input'][l]['confirm']" :error="lang['error'][l]['confirm']" :password="password" />
			<button>{{ lang['button'][l] }}</button>
		</Form>
	</div>
</template>

<script scoped>
import { NewPasswordJS } from "@/store/Langs/Enter/NewPassword";
import Title from "@/components/Enter/NewPassword/Title"
import Password from "@/components/Enter/NewPassword/Form/Password"
import Confirm from "@/components/Enter/NewPassword/Form/Confirm"
import { Form } from 'vee-validate';
export default {
	name: "NewPassword",
	props: ["l"],
	components: {
		Title,
		Form,
		Password,
		Confirm
	},
	setup() {
        const lang 	   = NewPasswordJS();
		const response = NewPasswordJS()["response"];
		const success  = NewPasswordJS()["success"];

		return {
            lang,
			response,
			success
		}
	},
	data() {
		return {
			password: null
		}
	},
	methods: {
		change(values) {
			let form = new FormData()
			form.append("password", values["password"])
			form.append("token", this.$route.params.token)

			fetch(this.$domain + "changePasswordByToken", {
				method: "PUT",
				credentials: 'include',
				body: form
			})
				.then(data => { return data.json() })
				.then(data => {
					if ("error" in data)
						this.$toast.error(this.response[this.l][data["error"]])
					else {
						this.$toast.success(this.success[this.l])
						this.$router.push({ name: "login" })
					}
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
