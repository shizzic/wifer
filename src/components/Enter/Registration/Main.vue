<template>
	<div class="wrap">
		<router-link class="link" :to="{ name: 'login' }">{{ link[l] }}</router-link>
		<Title :l="l" :lang="lang['title']" />
		<Api />

		<Form name="registration" @submit="login">
			<Email :title="lang['input'][l]['email']" :error="lang['error'][l]['email']" />
			<Password :title="lang['input'][l]['password']" :error="lang['error'][l]['password']" @password="password = $event" />
			<Confirm :title="lang['input'][l]['confirm']" :error="lang['error'][l]['confirm']" :password="password" />
			<button>{{ lang['button'][l] }}</button>
		</Form>
	</div>
</template>

<script scoped>
import { RegistrationJS } from "@/store/Langs/Enter/Registration";
import Title from "@/components/Enter/Registration/Title.vue"
import Api from "@/components/Enter/Registration/Api.vue"
import Email from "@/components/Enter/Registration/Form/Email.vue"
import Password from "@/components/Enter/Registration/Form/Password.vue"
import Confirm from "@/components/Enter/Registration/Form/Confirm.vue"
import { Form } from 'vee-validate';
export default {
	name: "Registration",
	props: ["l"],
	components: {
		Title,
		Api,
		Form,
		Email,
		Password,
		Confirm
	},
	setup() {
        const lang 	   = RegistrationJS();
		const response = RegistrationJS()["response"];
		const success  = RegistrationJS()["success"];
		const link 	   = RegistrationJS()["link"];

		return {
            lang,
			response,
			success,
			link
		}
	},
	data() {
		return {
			password: null
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

.wrap::-webkit-scrollbar {
  width: 3px;
}

.wrap:hover .wrap::-webkit-scrollbar {
    width: 7px;
    height: 7px;
}
.wrap::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 15px;
}
</style>
