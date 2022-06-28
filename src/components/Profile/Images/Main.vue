<template>
	<div class="images" :id="'gallery'">
        <div v-show="icons" class="dots" @click="showButtons" v-click-outside="() => { buttons = null }">
            <div v-for="(_, index) in 3" :key="index" class="dot" />
        </div>

        <div v-show="buttons" class="buttons">
            <img class="button" src="/public.webp" />
            <img class="button" src="/private.webp" />
        </div>

        <input type="file" style="display: none;" ref="input" @change="load($event)" accept="image/*">
        <Cropper v-if="image.src && image.type" :image="image" :lang="lang" :l="l" @clear="clear" @avatar="$emit('avatar')" />

        <div v-show="data._id == $user.id" class="image" :style="'border: 1px solid; margin-right: 20px;'" 
            @click="$refs.input.click()"
        >
            <div class="plus" />
        </div>

        <a v-show="null"
            ref="avatar"
            :href="$ip + $route.params.id + '/avatar.webp?' + Date.now()"
            target="_blank"
            rel="noreferrer"
        >
            <img :src="$ip + $route.params.id + '/avatar.webp?' + Date.now()" alt="" class="image" />
        </a>
        
        <a
            v-for="(num, index) in data.public"
            :key="index"
            :href="$ip + $route.params.id + '/public/' + num + '.webp?' + Date.now()"
            target="_blank"
            rel="noreferrer"
            :style="'margin-right: 20px; margin-bottom: 20px;'"
        >
            <img :src="$ip + $route.params.id + '/public/' + num + '.webp?' + Date.now()" alt="" class="image" />
        </a>

        <a
            v-for="(num, index) in data.private"
            :key="index"
            :href="$ip + $route.params.id + '/private/' + num + '.webp?' + Date.now()"
            target="_blank"
            rel="noreferrer"
            :style="'margin-right: 20px; margin-bottom: 20px;'"
        >
            <img :src="$ip + $route.params.id + '/private/' + num + '.webp?' + Date.now()" alt="" class="image" />
        </a>
    </div>
</template>

<script scoped>
import Cropper from "@/components/Profile/Cropper.vue"

import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

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
    props: ["data", "lang", "l", "avatar"],
    components: {
        Cropper
    },
    data() {
		return {
			image: {
				src: null,
				type: null
			},
            lightbox: null,
            first: true,
            last: true,
            icons: null,
            buttons: null
		}
	},
    watch: {
        avatar() {
            this.$refs.avatar.click()
        }
    },
    mounted() {
        if (!this.lightbox) {
            this.lightbox = new PhotoSwipeLightbox({
                gallery: '#' + "gallery",
                children: 'a',
                pswpModule: () => import('photoswipe'),
                wheelToZoom: true,
                loop: true,
                pinchToClose: false,
                clickToCloseNonZoomable: false,
                modal: false
            })

            this.lightbox.on("afterInit", () => {
                let length = this.lightbox.pswp.options.dataSource.items.length - 1

                if (this.lightbox.pswp.options.dataSource.items[length].firstChild.naturalHeight > 0) {
                    this.first = null
                    this.resize()
                }
            })

            this.lightbox.on("contentAppend", () => {
                if (this.last && this.lightbox.pswp && this.lightbox.pswp.options.dataSource.items[this.lightbox.pswp.options.dataSource.items.length - 1].height) {
                    this.last = null
                    this.lightbox.pswp.refreshSlideContent(this.lightbox.pswp.options.dataSource.items.length - 1)
                }

                if (this.first) {
                    this.first = null
                    this.resize()
                }
            })

            this.lightbox.on("contentResize", (e) => {
                e.content.height = e.content.element.naturalHeight
                e.content.width  = e.content.element.naturalWidth
            })

            this.lightbox.on("close", () => {
                this.icons   = null
                this.buttons = null
                this.first   = true
                this.last    = true
            })

            this.lightbox.on("beforeOpen", () => {
                this.icons = true
            })

            this.lightbox.init()
        }
    },
    unmounted() {
        if (this.lightbox) {
            this.lightbox.destroy()
            this.lightbox = null
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
        },

        resize() {
            let length = this.lightbox.pswp.options.dataSource.items.length - 1

            if (this.lightbox.pswp.options.dataSource.items[length].firstChild.naturalHeight)
                for (let key in this.lightbox.pswp.options.dataSource.items) {
                    if (this.lightbox.pswp.options.dataSource.items[key].firstChild.naturalHeight > 0)
                        this.lightbox.pswp.options.dataSource.items[key] = { 
                            src: this.lightbox.pswp.options.dataSource.items[key].href,
                            width: this.lightbox.pswp.options.dataSource.items[key].firstChild.naturalWidth,
                            height: this.lightbox.pswp.options.dataSource.items[key].firstChild.naturalHeight
                        }
                }
            else
                for (let key in this.lightbox.pswp.options.dataSource.items) {
                    if (this.lightbox.pswp.options.dataSource.items[key].height > 0)
                        this.lightbox.pswp.options.dataSource.items[key] = { 
                            src: this.lightbox.pswp.options.dataSource.items[key].src,
                            width: this.lightbox.pswp.options.dataSource.items[key].width,
                            height: this.lightbox.pswp.options.dataSource.items[key].height
                        }
                }
        },

        showButtons() {
            if (this.buttons)
                this.buttons = null
            else
                this.buttons = true
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

.dots {
    z-index: 2147483647;
    cursor: pointer;
    width: 25px;
    -webkit-tap-highlight-color: transparent;

    position: absolute;
    top: -29px;
    left: 62.5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.dot {
    padding: 2px;
    background-color: #fff;
    border-radius: 50%;
}

.dot:not(:last-of-type) {
    margin-bottom: 3px;
}

.buttons {
    z-index: 2147483647;
    list-style-type: none;
    cursor: default;
    -webkit-tap-highlight-color: transparent;

    position: absolute;
    top: -35px;
    left: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* border: 1px solid white; */
}

.button {
    cursor: pointer;
    width: 25px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(331deg) brightness(101%) contrast(102%);
    padding: 5px 2px;
    border-radius: 50%;
    -webkit-tap-highlight-color: transparent;
}

.button:hover {
    background-color: #b2b2b2;
}

.button:first-of-type {
    margin-right: 20px;
}

@media screen and (max-width: 529px) {
    .dots {
        top: 21px;
    }

    .buttons {
        top: 15px;
    }
}
</style>

<style>
.pswp {
    z-index: 2147483646;
}
</style>
