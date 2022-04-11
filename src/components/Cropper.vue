<template>
  <div class="upload-example">
		<cropper
			ref="cropper"
			class="upload-example-cropper"
			:src="image.src"
			:debounce="false"
			:stencil-props="{
				aspectRatio: 12/15
			}"
		/>
		<input type="file" ref="file" @change="loadImage($event)" accept="image/*">
	</div>

  <button @click="uploadImage">sas;sdlfk</button>
</template>

<script scoped>
import { test } from '@/store/test'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';

// This function is used to detect the actual image type, 
function getMimeType(file, fallback = null) {
	const byteArray = (new Uint8Array(file)).subarray(0, 4);
    let header = '';
    for (let i = 0; i < byteArray.length; i++) {
       header += byteArray[i].toString(16);
    }
	switch (header) {
        case "89504e47":
            return "image/png";
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
        case "ffd8ffe3":
        case "ffd8ffe8":
            return "image/jpeg";
        default:
            return fallback;
    }
}

export default {
	name: 'Copper',
	components: {
		Cropper
	},
	data() {
		return {
			image: {
				src: null,
				type: null
			}
		}
	},
	setup() {
		const store = test();

		return {
			store
		}
	},
	mounted() {
		this.store.test();
	},
	unmounted() {
		if (this.image.src)
			URL.revokeObjectURL(this.image.src)
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

		reset() {
			this.image = {
				src: null,
				type: null
			}
		},

		loadImage(event) {
			const { files } = event.target;
		
			if (files && files[0] && files[0].size < 1000001) {
				if (this.image.src)
					URL.revokeObjectURL(this.image.src)
		
				const blob = URL.createObjectURL(files[0]);
				const reader = new FileReader();

				reader.onload = (e) => {
					this.image = {
						src: blob,
						type: getMimeType(e.target.result, files[0].type),
					};
				};

				reader.readAsArrayBuffer(files[0]);
			}
		}
	}
}
</script>

<style scoped>

</style>
