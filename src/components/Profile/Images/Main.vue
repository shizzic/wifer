<template>
	<div class="images" :id="'gallery'" :class="{ expand : data && (data.public > 0 || data.private > 0 || data._id == $user.id) }">
        <div v-show="opened && data['_id'] == $user.id" class="dots" @click="showButtons" v-click-outside="() => { buttons = null }">
            <div v-for="(_, index) in 3" :key="index" class="dot" />
        </div>

        <div v-show="buttons" class="buttons">
            <img v-show="params.mode !== null" class="button" src="/profile.webp" @click="makeProfile" />
            <img v-show="params.mode !== true && params.mode !== null" class="button" src="/public.webp" @click="dir('public')" />
            <img v-show="params.mode !== false" class="button" src="/private.webp" @click="dir('private')" />
            <img class="button" src="/delete.webp" @click="deleteImg" />
        </div>

        <input type="file" style="display: none;" ref="input" @change="load($event)" accept="image/*">
        <Cropper v-if="image.src && image.type" :image="image" :lang="lang" :l="l" @clear="clear" />

        <div v-show="data._id == $user.id" class="image" :style="'border: 1px solid; margin-right: 20px; margin-bottom: 20px;'" 
            @click="$refs.input.click()"
        >
            <div class="plus" />
        </div>

        <div v-if="data.avatar === true" class="image" style="display: none;">
            <a
                ref="avatar"
                :href="$ip + $route.params.id + '/avatar.webp?' + Date.now()"
                target="_blank"
                rel="noreferrer"
            >
                <img :src="$ip + $route.params.id + '/avatar.webp?' + Date.now()" alt="" />
            </a>
        </div>
        
        <div v-for="(num, index) in data.public" :key="index" class="image-wrap">
            <a
                :href="$ip + $route.params.id + '/public/' + num + '.webp?' + Date.now()"
                target="_blank"
                rel="noreferrer"
            >
                <img :src="$ip + $route.params.id + '/public/' + num + '.webp?' + Date.now()" alt="" class="image" />
            </a>
            
            <img v-show="$user.id == data._id" src="/public.webp" alt="" class="icon" />
        </div>

        <template v-if="true">
            <div v-for="(num, index) in data.private" :key="index" class="image-wrap">
                <a
                    :href="$ip + $route.params.id + '/private/' + num + '.webp?' + Date.now()"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img :src="$ip + $route.params.id + '/private/' + num + '.webp?' + Date.now()" alt="" class="image" />
                </a>

                <img v-show="$user.id == data._id" src="/private.webp" alt="" class="icon" />
            </div>
        </template>
    </div>
</template>

<script scoped>
import { ImageJS } from "@/store/Langs/Image"
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
    setup() {
		const del   = ImageJS()["delete"]
        const error = ImageJS()["error"]

		return {
            del,
            error
		}
	},
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
            buttons: null,
            opened: null,

            params: {
                mode: null,
                dir: "public",
                number: 1
            }
		}
	},
    watch: {
        avatar(n) {
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

            this.lightbox.on("afterInit", () => { this.opened = true })

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

            this.lightbox.on("close", () => { this.close() })

            this.lightbox.on("change", () => {
                this.buttons = null
                let src = this.lightbox.pswp.options.dataSource.items[this.lightbox.pswp.currIndex].src

                if (src) {
                    let arr  = this.lightbox.pswp.options.dataSource.items[this.lightbox.pswp.currIndex].src.split("/")
                    let mode = arr[arr.length - 2]
                    
                    this.params.dir    = mode
                    this.params.number = arr[arr.length - 1].split(".")[0]

                    if (isNaN(mode) === false)
                        this.params.mode = null
                    else
                        if (mode === "public")
                            this.params.mode = true
                        else
                            this.params.mode = false
                }
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
        makeProfile() {
            fetch(this.$domain + "replaceAvatar?dir=" + this.params.dir + "&number=" + this.params.number, {
                method: "PUT",
				credentials: "include"
            })
                .then(data => { return data.json() })
                .then(() => { location.reload() })
                .catch(() => { this.$toast.error(this.error[this.l]) })
        },

        dir(newDir) {
            let isAvatar = "0"
            if (this.params.mode === null)
                isAvatar = "1"

            fetch(this.$domain + "changeImageDir?isAvatar=" + isAvatar + "&dir=" + this.params.dir + "&number=" + this.params.number + "&new=" + newDir, {
                method: "PUT",
				credentials: "include"
            })
                .then(data => { return data.json() })
                .then(() => { location.reload() })
                .catch(() => { this.$toast.error(this.error[this.l]) })
        },

        deleteImg() {
            let isAvatar = 0
            if (this.params.mode === null)
                isAvatar = 1
            
            fetch(this.$domain + "deleteImage?isAvatar=" + isAvatar + "&dir=" + this.params.dir +"&number=" + this.params.number, {
                method: "DELETE",
				credentials: "include"
            })
                .then(data => { return data.json() })
                .then(() => {
                    location.reload()
                    // this.$toast.success(this.del[this.l])
                })
                .catch(() => { this.$toast.error(this.error[this.l]) })
        },

        load(event) {
            let avatar = 0
            if (this.data.avatar === true)
                avatar = 1

            let all = this.data.public + this.data.private + avatar

            if (all < 20) {
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
                    this.$toast.error(this.lang[this.l].max_size)
            } else {
                this.clear()
                this.$toast.error(this.lang[this.l].max_image)
            }
		},

        clear() {
            this.image = { src : null, type : null }

            if (this.$refs.avatar)
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
        },

        close() {
            this.buttons = null
            this.opened  = null
            this.first   = true
            this.last    = true
        }
    }
}
</script>

<style scoped>
.images {
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 8px;

    display: flex;
    flex-wrap: wrap;

    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 1);
}

.expand {
    padding-top: 30px;
    padding-left: 30px;
    padding-bottom: 10px;
    padding-right: 10px;
    margin-bottom: 30px;
}

.image-wrap {
    position: relative;
    border-radius: 8px;

    margin-right: 20px;
    margin-bottom: 20px;
}

.image {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    object-fit: cover;

    width: 150px;
    min-width: 150px;
    height: 175px;
    min-height: 175px;
    border-radius: 8px;

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
}

.button {
    cursor: pointer;
    width: 25px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(331deg) brightness(101%) contrast(102%);
    padding: 5px 2px;
    border-radius: 2px;
    -webkit-tap-highlight-color: transparent;
    margin-right: 20px;
}

.button:hover {
    background-color: #b2b2b2;
}

@media screen and (max-width: 529px) {
    .dots {
        top: 21px;
    }

    .buttons {
        top: 15px;
    }
}

.icon {
    width: 20px;

    position: absolute;
    left: 5px;
    bottom: 2.5px;

    filter: invert(100%) sepia(3%) saturate(7472%) hue-rotate(50deg) brightness(108%) contrast(108%);
}
</style>

<style>
.pswp {
    z-index: 2147483646;
}
</style>
