<template>
    <div>
        <input type="file" style="display: none;" ref="avatar" @change="loadImage($event)" accept="image/*">
        <Cropper v-if="image.src && image.type" :image="image" @clear="clear" />

        <img v-if="avatar === false" src="/avatar.webp" class="no" @click="$refs.avatar.click()">
        <img v-else :src="$ip + $domain.id + '/avatar.webp'" class="avatar">
    </div>
</template>

<script scoped>
import Cropper from "@/components/Profile/Cropper.vue"

function getMimeType(file, fallback = null) {
	const byteArray = (new Uint8Array(file)).subarray(0, 4)
    let header = ''
    for (let i = 0; i < byteArray.length; i++) {
       header += byteArray[i].toString(16)
    }
	switch (header) {
        case "89504e47":
            return "image/png"
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
        case "ffd8ffe3":
        case "ffd8ffe8":
            return "image/jpeg"
        default:
            return fallback
    }
}

export default {
	name: "Avatar",
    props: ["avatar"],
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
    methods: {
        loadImage(event) {
			const { files } = event.target
		
			if (files && files[0] && files[0].size < 2000001) {
				const blob = URL.createObjectURL(files[0])
				const reader = new FileReader()

				reader.onload = (e) => {
					this.image = {
						src: blob,
						type: getMimeType(e.target.result, files[0].type),
					}
				}

				reader.readAsArrayBuffer(files[0])
			} else
                this.$toast.error("max size is 2 mb")
		},

        clear() {
            this.image = { src : null, type : null }
            this.$refs.avatar.value = ""
        }
    }
}
</script>

<style scoped>
div {
    width: 168.75px;
    min-width: 168.75px;
    height: 225px;
    min-height: 225px;

    display: flex;
    align-items: center;
    margin-right: 50px;

    border-radius: 12px;
}

img {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
}

.no {
    width: 100%;
}

.avatar {
    width: 100%;
    min-width: 100%;
    max-width: 100%;

    height: 100%;
    min-height: 100%;
    max-height: 100%;
}

@media screen and (max-width: 600px) {
    div {
        margin: 0 auto;
    }
}
</style>
