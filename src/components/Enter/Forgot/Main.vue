<template>
	<div class="wrap">
		<Title :l="l" :lang="lang['title']" />

		<Form name="login" @submit="send">
			<Email :title="lang['input'][l]" :error="lang['error'][l]" />
			<button>{{ lang['button'][l] }}</button>
		</Form>
	</div>
</template>

<script scoped>
import { ForgotJS } from "@/store/Langs/Enter/Forgot";
import Title from "@/components/Enter/Forgot/Title.vue"
import Email from "@/components/Enter/Forgot/Form/Email.vue"
import { Form } from 'vee-validate';
export default {
	name: "Forgot",
	props: ["l"],
	components: {
		Title,
		Form,
		Email
	},
	setup() {
        const lang 	   = ForgotJS();
		const response = ForgotJS()["response"];
		const success  = ForgotJS()["success"];

		return {
            lang,
			response,
			success
		}
	},
	data() {
		return {
		}
	},
	methods: {
		send(values) {
			let form = new FormData()
			form.append("email", values["email"])

			fetch(this.$domain + "forgotPassword", {
				method: "POST",
				credentials: 'include',
				body: form
			})
				.then(data => { return data.json() })
				.then(data => {
					if ("error" in data)
						this.$toast.error(this.response[this.l][data["error"]])
					else
						this.$toast.success(this.success[this.l])
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

.wrap::-webkit-scrollbar {
  width: 8px;
}

.wrap::-webkit-scrollbar-thumb {
  background-color: #999;
  border-radius: 15px;
}
</style>
