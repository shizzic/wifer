<template>
	<div class="about">
		<div class="header">
			<h3><span>{{ title }}</span><span>{{ username }}</span></h3>
			<img v-show="about.length > 0" src="/translation.webp" @click="translate" />

			<template v-if="about.length > 0">
				<span v-show="mode">{{ about }}</span>
				<span v-show="!mode">{{ translated }}</span>
			</template>
			<span v-else>{{ blank }}</span>
		</div>
	</div>
</template>

<script scoped>
import { ImageJS } from "@/store/Langs/Image"

export default {
	name: "About",
	props: ["title", "username", "about", "l", "blank"],
	setup() {
		const errors = ImageJS().error

		return {
            errors
		}
	},
	data() {
		return {
			translated: null,
			mode: true
		}
	},
	watch: {
		about() {
			this.mode       = true
			this.translated = null
		}
	},
	methods: {
		translate() {
			if (!this.translated && this.original !== "") {
				let form = new FormData()
				form.append("text", this.about)
				form.append("lang", this.l)

				fetch(this.$domain + "translate", {
					method: "PUT",
					credentials: "include",
					body: form
				})
					.then(data => { return data.json() })
					.then(data => {
						if (data)
							if ("error" in data)
								this.$toast.error(this.errors[this.l])
							else {
								this.translated = data.text
								this.mode = null
							}
					})
					.catch(() => { this.$toast.error(this.errors[this.l]) })
			} else
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
    border-radius: 8px;

    display: flex;
    flex-wrap: wrap;

    padding: 20px 25px;
	margin-bottom: 30px;

	box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 1);
}

.header {
	width: 100%;

	display: flex;
	flex-direction: column;
	margin-bottom: 0;
}

h3 {
	color: #4d4d4d;
	font-weight: 600;
    font-size: 18px;
    
    margin-bottom: 10px;
}

h3 span {
	display: inline-block;
}

h3 span:first-of-type {
	margin-right: 10px;
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
	word-break: break-all;
}
</style>
