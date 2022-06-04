<template>
	<div class="wrap scroll">
		<div class="wrapper scroll">
			<cropper
				ref="cropper"
				class="cropper"
				:src="image.src"
				:debounce="false"
				@change="getPreview"
			/>

			<div class="right">
				<div class="preview-wrap">
					<preview
						:image="result.image"
						:coordinates="result.coordinates"
						class="preview"
					/>
				</div>

				<div class="buttons">
					<div class="button">Upload</div>
					<div class="button" @click="rotate(90)">
						<img src="/rotate.webp" />
					</div>
					<div class="button" @click="$emit('clear')">Cancel</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script scoped>
import { Cropper, Preview } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';

export default {
	name: 'Copper',
	props: ["image"],
	components: {
		Cropper,
		Preview
	},
	data() {
		return {
			result: {
				coordinates: null,
				image: null
			}
		};
	},
	methods: {
		uploadImage() {
			const { canvas } = this.$refs.cropper.getResult();

			if (canvas) {
				const form = new FormData();
				canvas.toBlob(blob => {
					form.append('file', blob);
					fetch('https://wifer-test.ru/upload', {
						method: 'POST',
						body: form,
					})
						.then(data => { return data.text() })
						.then(data => { console.log(data) })
				}, 'image/*');
			}
		},

		getPreview({ coordinates, image }) {
			this.result = {
				coordinates,
				image
			}
		},

		rotate(angle) {
			this.$refs.cropper.rotate(angle);
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

	/* display: flex;
	justify-content: center;
	align-items: center; */

    position: absolute;
    top: 0;
    left: 0;

	overflow: hidden;
}

.wrap::before, .wrap::after {
  content: '';
  margin: auto;
}


.wrapper {
	width: 50%;
	min-width: 450px;
	border-radius: 12px;

	background: rgb(2,0,36);
	background: linear-gradient(278deg, rgba(2,0,36,1) 0%, rgba(177,177,191,1) 91%, rgba(136,164,170,1) 100%);

	display: flex;
	flex-wrap: wrap;
	padding: 25px;
}

.cropper {
    width: 55%;
    height: 100%;
	border-radius: 12px;

	margin-right: 25px;
}

.right {
	width: calc(45% - 25px);

	display: flex;
	flex-direction: column;
	align-items: center;
}

.preview-wrap {
	width: 100%;
	border-radius: 12px;

	display: flex;
	justify-content: center;

	margin-bottom: 25px;
}

.preview {
	width: 150px;
	height: 150px;
	border-radius: 12px;
}

.buttons {
	width: 70%;
	height: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
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

img {
	width: 16px;
	filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
	border-radius: 12px;
}

@media screen and (max-width: 450px) {
	.wrap {
		/* display: flex;
		flex-direction: column; */
		/* align-items: center; */

		overflow-y: auto;
	}

	.wrapper {
		width: 100%;
		min-width: 100px;
	}

    .cropper {
		width: 100%;
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
