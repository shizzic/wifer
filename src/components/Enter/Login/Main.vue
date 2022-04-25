<template>
	<div class="wrap">
		<Title :l="l" :lang="lang['title']" />

		<Form name="login" @submit="onSubmit">
			<Email :title="lang['input'][l]['email']" :error="lang['error'][l]['email']" />
			<!-- <button>submit</button> -->
		</Form>
	</div>
</template>

<script scoped>
import { LoginJS } from "@/store/Langs/Login";
import Title from "@/components/Enter/Login/Title"
import Email from "@/components/Enter/Login/Form/Email"
import { Form } from 'vee-validate';
export default {
	name: "Login",
	props: ["l"],
	components: {
		Title,
		Form,
		Email
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
		},
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
	justify-content: center;

	margin: 0 auto;
	padding: 0 20px;
}

form {
	width: 35%;
	min-width: 320px;
}
</style>
