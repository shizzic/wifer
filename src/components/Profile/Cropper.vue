<template>
	<div class="wrap">
		<div class="wrapper scroll">
			<cropper
				ref="cropper"
				class="cropper"
				:src="image.src"
				:debounce="false"
			/>

			<div class="right">
				<div class="buttons">
					<div class="button" @click="upload">{{ lang[l].upload }}</div>
					<div class="button" :class="{ 'active' : mode, 'inactive' : !mode }" @click="mode = true">{{ lang[l].public }}</div>
					<div class="button" :class="{ 'active' : !mode, 'inactive' : mode }" @click="mode = null">{{ lang[l].private }}</div>
					<div class="button" @click="rotate(90)">
						<img src="/rotate.webp" />
					</div>
					<div class="button" @click="$emit('clear'); mode = true">{{ lang[l].cancel }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script scoped>
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'

export default {
	name: 'Copper',
	props: ["image", "lang", "l"],
	components: {
		Cropper
	},
	data() {
		return {
			result: {
				coordinates: null,
				image: null
			},
			mode: true
		};
	},
	methods: {
		upload() {
			const { canvas } = this.$refs.cropper.getResult()

			if (canvas) {
				let mode = "public"
				if (!this.mode)
					mode = "private"
				
				const form = new FormData();
				form.append("dir", mode);
				canvas.toBlob(blob => {
					form.append("file", blob);
					fetch(this.$domain + "upload", {
						method: "POST",
						credentials: "include",
						body: form,
					})
						.then(data => { return data.json() })
						.then(data => { this.$emit("clear")
							if ("error" in data)
								this.$toast.error(this.lang[this.l].error)
							else {
								location.reload()
								// this.$toast.success(this.lang[this.l].success)
							}
						})
				}, 'image/*');
			}
		},

		rotate(angle) {
			this.$refs.cropper.rotate(angle)
		}
	}
}
</script>

<style scoped>
.wrap {
    z-index: 999999999;
	border-radius: 0;
	backdrop-filter: blur(5px);

    width: 100%;
    height: 100%;
	margin: 0 auto;

    position: absolute;
    top: 0;
    left: 0;

	display: flex;
	justify-content: center;
	align-items: center;

	overflow: hidden;
}

.wrap::before, .wrap::after {
	content: '';
	margin: auto;
}

.wrapper {
	width: 50%;
	min-width: 450px;
	height: 70%;
	border-radius: 12px;

	background: rgb(2,0,36);
	background: linear-gradient(278deg, rgba(2,0,36,1) 0%, rgba(177,177,191,1) 91%, rgba(136,164,170,1) 100%);

	display: flex;
	flex-wrap: wrap;
	padding: 25px;
}

.cropper {
    width: 65%;
    height: 100%;
	border-radius: 12px;

	margin-right: 25px;
}

.right {
	width: calc(35% - 25px);

	display: flex;
	flex-direction: column;
	align-items: center;
}

.buttons {
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.button {
	cursor: pointer;
	color: #fff;
	background-color: #6d7b88;
	border-radius: 4px;

	width: 100%;
	max-width: 150px;

	display: flex;
	justify-content: center;
	padding: 7px;
	margin-bottom: 10px;
}

.button:last-child {
	margin-bottom: 0;
}

.active {
	background-color: #1CCC4D;;
}

.inactive {
	background-color: #EB3636;;
}

img {
	width: 16px;
	filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
	border-radius: 12px;
}

@media screen and (max-width: 450px) {
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 5px;
	}

	.wrapper {
		width: 95%;
		min-width: 100px;
		height: auto;

		overflow-y: auto;
	}

    .cropper {
		width: 100%;
		height: auto;
		margin-right: 0;
		margin-bottom: 25px;
	}

	.right {
		width: 100%;
	}
}
</style>

<style>
.vue-advanced-cropper *, cropper * {
	border-radius: 12px;
}
</style>
