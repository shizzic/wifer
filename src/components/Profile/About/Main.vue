<template>
	<div class="about">
		<img src="/translation.webp" @click="translate">
		<span v-show="mode">{{ original }}</span>
		<span v-show="!mode">{{ translated }}</span>
	</div>
</template>

<script scoped>
import { ImageJS } from "@/store/Langs/Image"

export default {
	name: "About",
	props: ["about", "l"],
	setup() {
		const errors = ImageJS().error

		return {
            errors
		}
	},
	data() {
		return {
			original: null,
			translated: null,
			mode: true
		}
	},
	beforeMount() {
		this.original = this.about
	},
	methods: {
		translate() {
			if (!this.translated && this.original !== "")
				fetch(this.$domain + "translate?text=" + this.original + "&lang=" + this.l, {
					method: "GET",
					credentials: "include"
				})
					.then(data => { return data.json() })
					.then(data => {
						if ("error" in data)
							this.$toast.error(this.errors[this.l])
						else {
							this.translated = data.text
							this.mode = null
						}
					})
					.catch(() => { this.$toast.error(this.errors[this.l]) })
			else
				if (this.mode)
					this.mode = null
				else
					this.mode = true
		}
	}
}
</script>

<style scoped>
.about {
	position: relative;

	width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px;

    display: flex;
    flex-wrap: wrap;

    padding: 30px;
	margin-top: 30px;
}

img {
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
	width: 28px;

	position: absolute;
	right: 10px;
	top: 10px;
}

span {
	font-size: 18px;
	color: #4d4d4d;
}
</style>
