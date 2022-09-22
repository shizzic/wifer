<template>
	<main id="premium" class="scroll">
		<div class="squares">
			<Quantity :lang="quantity[l]" />
			<Pay :lang="pay[l]" :response="response[l]" />
			<Luckriza :lang="luckriza[l]" />
			<FreeChat :lang="freeChat[l]" />
			<Contact :lang="contact[l]" :response="response[l]" />
			<WorldWide :lang="worldWide[l]" />
		</div>

		<footer>
			<img src="/images/18+.webp">

			<div id="footer-wrap">
				<div id="terms">
					<a href="https://app.termly.io/document/terms-of-use-for-website/6bcad083-6995-488c-afa5-34cb4a635dfc" target="_blank">Terms and Conditions</a>
					<a href="https://app.termly.io/document/privacy-policy/af3f50ee-eb72-4321-9af6-f722baaa418e" target="_blank">Privacy Policy</a>
					<a href="https://app.termly.io/document/return-policy/19d7baaf-0369-4915-bc3f-86fa5ab78146" target="_blank">Return Policy</a>
				</div>

				<span>{{ age[l] }}</span>
			</div>
		</footer>
	</main>
</template>

<script scoped>
import { PremiumJS } from "@/store/Langs/Premium"
import Quantity from "@/components/Premium/Quantity.vue"
import Pay from "@/components/Premium/Pay.vue"
import Luckriza from "@/components/Premium/Luckriza.vue"
import FreeChat from "@/components/Premium/FreeChat.vue"
import WorldWide from "@/components/Premium/WorldWide.vue"
import Contact from "@/components/Premium/Contact.vue"
export default {
	name: "Premium",
	props: ["l"],
	components: {
		Quantity,
		Pay,
		Luckriza,
		FreeChat,
		WorldWide,
		Contact
	},
	setup() {
		const quantity  = PremiumJS().quantity
		const pay       = PremiumJS().pay
		const luckriza  = PremiumJS().luckriza
		const freeChat  = PremiumJS().freeChat
		const worldWide = PremiumJS().worldWide
		const contact   = PremiumJS().contact
		const response  = PremiumJS().response
		const age       = PremiumJS().age

		return {
			quantity,
			pay,
			luckriza,
			freeChat,
			worldWide,
			contact,
			response,
			age
		}
	}
}
</script>

<style scoped>
#premium {
	width: 100%;
	height: 100%;
	background-color: #dce5e3;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 25px;
	
	overflow-x: hidden;
	overflow-y: auto;
}

.squares {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}

.square {
	width: 31%;
	min-width: 250px;
	background-color: #fff;
	border-radius: 24px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 12px 20px;
	margin: 0 7.5px;
	margin-bottom: 15px;
}

footer {
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
}

img {
	width: 40px;
	margin-right: 20px;
}

#footer-wrap {
	display: flex;
	flex-direction: column;
	align-items: center;
}

#terms {
	margin-bottom: 3px;
}

a:active {
	color: blue;
	text-decoration: none;
}

a:not(:last-of-type) {
	margin-right: 10px;
}

@media screen and (max-width: 824px) {
    .square {
		width: 46%;
	}
}

@media screen and (max-width: 768px) {
    #premium {
		padding: 15px;
	}
}

@media screen and (max-width: 588px) {
    .square {
		margin-right: 0;
		margin-left: 0;
		width: 70%;
	}
}

@media screen and (max-width: 450px) {
	#premium {
		padding: 10px;
	}

    .square {
		width: 85%;
	}
}

@media screen and (max-width: 380px) {
    .square {
		width: 100%;
	}
}
</style>
