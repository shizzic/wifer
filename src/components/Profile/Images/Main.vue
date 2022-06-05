<template>
	<div class="images" v-viewer="options">
        <input type="file" style="display: none;" ref="avatar" @change="load($event)" accept="image/*">
        <Cropper v-if="image.src && image.type" :image="image" :lang="lang" :l="l" @clear="clear" @avatar="$emit('avatar')" />

        <div v-show="data._id == $user.id" class="image" :style="'border: 1px solid;'" @click="$refs.avatar.click()">
            <div class="plus" />
        </div>
        
        <img v-for="(num, index) in data.public" :key="index" :src="$ip + $route.params.id + '/public/' + num + '.webp'" class="image">
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
	name: "Images",
    props: ["data", "lang", "l"],
    components: {
        Cropper
    },
    data() {
		return {
			image: {
				src: null,
				type: null
			},
            options: {
                focus: false,
                toolbar: false,
                title: false,
                tooltip: false,
                shown: this.showButtons,
                view: this.currentImage,
                hide: this.hideButtons
            },
		}
	},
    methods: {
        load(event) {
			const { files } = event.target
		
			if (files && files[0] && files[0].size < 3000001) {
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
                this.$toast.error(this.lang[this.l].max_size)
		},

        clear() {
            this.image = { src : null, type : null }
            this.$refs.avatar.value = ""
        }
    }
}
</script>

<style scoped>
.images {
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px;

    display: flex;
    flex-wrap: wrap;
    
    padding-top: 30px;
    padding-left: 30px;
    padding-bottom: 10px;
    padding-right: 10px;

    border: 1px solid;
}

.image {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    width: 125px;
    min-width: 125px;
    height: 150px;
    min-height: 150px;
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-right: 20px;
    margin-bottom: 20px;

    border: 1px solid;
}

@media only screen and (max-width : 644px) {
    .images {
        justify-content: center;
    }
}

.plus {
    position: relative;
    width: 20px;
    height: 20px;
    background-color: rgb(200, 200, 200);
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;
}

.plus:before,
.plus:after {
    content: "";
    position: absolute;
    background-color: #000;
}

.plus:before {
    left: 50%;
    top: calc(50% - 10px);
    bottom: 4px;
    width: 2px;
    height: 20px;
    transform: translateX(-50%);
}

.plus:after {
    top: 50%;
    left: calc(50% - 10px);
    right: 4px;
    height: 2px;
    width: 20px;
    transform:translateY(-50%);
}
</style>
