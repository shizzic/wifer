<template>
	<div class="wrap scroll">
		<Title :l="l" :lang="lang['title']" />
		<Api />

		<Form name="signin" @submit="signin">
			<Email :title="lang['input'][l]['email']" :error="lang['error'][l]['email']" />
			<Code :title="lang['input'][l]['email']" :error="lang['error'][l]['email']" />
			<button>{{ lang['button'][l] }}</button>
		</Form>
	</div>
</template>

<script scoped>
import { SigninJS } from "@/store/Langs/Signin";
import Title from "@/components/Signin/Title.vue"
import Api from "@/components/Signin/Api/Main.vue"
import Email from "@/components/Signin/Form/Email.vue"
import Code from "@/components/Signin/Form/Code.vue"
import { Form } from 'vee-validate';
export default {
	name: "Signin",
	props: ["l"],
	components: {
		Title,
		Api,
		Form,
		Code,
		Email
	},
	setup() {
        const lang 	   = SigninJS();
		const response = SigninJS()["response"];
		const success  = SigninJS()["success"];
		const link 	   = SigninJS()["link"];

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
		signin(values) {
			let form = new FormData()
			form.append("email", values["email"])

			fetch(this.$domain + "signin", {
				method: "POST",
				credentials: 'include',
				body: form
			})
				.then(data => { return data.json() })
				.then(data => { console.log(data)
					if ("error" in data)
						this.$toast.error(this.response[this.l][data["error"]])
					// else {
					// 	this.$user.setID(data["id"])
					// 	this.$router.push({ name: "search" })
					// 	this.$toast.success(this.success[this.l])
					// }
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
