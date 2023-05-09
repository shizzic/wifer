<template>
    <div class="images" :id="'gallery'"
        :class="{ expand: data && (data.public > 0 || (data.private > 0 && $user.id && (data._id == $user.id || data._id != $user.id && priv.access)) || data._id == $user.id) }">
        <div class="images-wrapper">
            <div v-show="opened && data._id == $user.id" class="dots" @click="showButtons"
                v-click-outside="() => { buttons = null }">
                <div v-for="(_, index) in 3" :key="index" class="dot" />
            </div>

            <div v-show="buttons" class="buttons">
                <img v-show="params.mode !== null" class="button" src="/images/profile.webp" @click="makeProfile" />
                <img v-show="params.mode !== true && params.mode !== null" class="button" src="/images/public.webp"
                    @click="dir('public')" />
                <img v-show="params.mode !== false" class="button" src="/images/private.webp" @click="dir('private')" />
                <img class="button" src="/images/delete.webp" @click="deleteImg" />
            </div>

            <input type="file" style="display: none;" ref="input" @change="load($event)" accept="image/*">
            <Cropper v-if="image.src && image.type" :image="image" :lang="lang" :l="l" @clear="clear" />

            <div v-show="$user.id && data._id == $user.id" class="image file" style="border: 1px solid;"
                @click="$refs.input.click()">
                <div class="plus" />
            </div>

            <div v-if="data.avatar === true" class="image" style="display: none;">
                <a ref="avatar" :href="$file('images', $route.params.id, 'avatar.webp')" target="_blank" rel="noreferrer">
                    <img :src="$file('images', $route.params.id, 'avatar.webp')" alt="" />
                </a>
            </div>

            <div v-for="(num, index) in data.public" :key="index" class="image-wrap">
                <a :href="$file('images', $route.params.id, num + '.webp', 'public')" target="_blank" rel="noreferrer">
                    <img :src="$file('images', $route.params.id, num + '.webp', 'public')" alt="" class="image" />
                </a>

                <div class="icon-wrap"><img src="/images/public.webp" alt="" class="icon" /></div>
            </div>

            <template v-if="$user.id && (data._id == $user.id || data._id != $user.id && (priv.access || premium > 0))">
                <div v-for="(num, index) in data.private" :key="index" class="image-wrap">
                    <a :href="$file('images', $route.params.id, num + '.webp', 'private')" target="_blank" rel="noreferrer">
                        <img :src="$file('images', $route.params.id, num + '.webp', 'private')" alt="" class="image" />
                    </a>

                    <div class="icon-wrap"><img src="/images/private.webp" alt="" class="icon" /></div>
                </div>
            </template>

            <template v-else>
                <router-link v-if="data.private > 0 && (!$user.id || $user.id && $user.id < 1)" class="image"
                    style="margin-right: 20px; margin-bottom: 20px;" :to="{ name: 'signin' }">
                    <div class="private">
                        <span>{{ data.private }}</span>
                        <img src="/images/private.webp" />
                    </div>
                </router-link>

                <div v-else-if="data.private > 0 && ($user.id && $user.id > 0 && !priv.access && !(premium > 0))"
                    class="image" style="margin-right: 20px; margin-bottom: 20px;" @click="$emit('modal', 'private')">
                    <div class="private">
                        <span>{{ data.private }}</span>
                        <img src="/images/private.webp" />
                    </div>
                </div>
            </template>
        </div>
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
    props: ["data", "lang", "l", "avatar", "priv"],
    setup() {
        const del = ImageJS()["delete"]
        const error = ImageJS()["error"]

        return {
            del,
            error
        }
    },
    components: {
        Cropper
    },
    computed: {
        premium() {
            return this.$user.premium
        }
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

            this.lightbox.addFilter('itemData', (itemData, index) => {
                itemData.w = itemData.element.firstChild.naturalWidth
                itemData.h = itemData.element.firstChild.naturalHeight
                return itemData
            })

            this.lightbox.on("afterInit", () => { this.opened = true })
            this.lightbox.on("close", () => { this.close() })
            this.lightbox.on("change", () => {
                this.buttons = null
                let query = new URLSearchParams(this.lightbox.pswp.currSlide.content.element.src)
                
                if (query) {
                    this.params.dir = query.get("dir")
                    this.params.number = query.get("filename").split(".")[0]

                    if (this.params.dir === "")
                        this.params.mode = null
                    else
                        this.params.dir === "public" ? this.params.mode = true : this.params.mode = false
                }
            })

            this.lightbox.init()
        }
    },
    unmounted() {
        if (this.lightbox) {
            this.lightbox.destroy()
            this.lightbox = null
            this.close()
        }
    },
    methods: {
        makeProfile() {
            fetch(this.$domain + "replaceAvatar?dir=" + this.params.dir + "&number=" + this.params.number, {
                method: "PUT",
                credentials: "include"
            })
                .then(data => {
                    if (data.status === 401) {
                        this.$user.logout(this.$domain)
                        this.$router.push({ name: "search" })
                    } else
                        return data.json()
                })
                .then(() => {
                    this.$user.set({ field: "avatar", value: null })
                    location.reload()
                })
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
                .then(data => {
                    if (data.status === 401) {
                        this.$user.logout(this.$domain)
                        this.$router.push({ name: "search" })
                    } else
                        return data.json()
                })
                .then(() => {
                    this.$user.set({ field: "avatar", value: null })
                    location.reload()
                })
                .catch(() => { this.$toast.error(this.error[this.l]) })
        },

        deleteImg() {
            let isAvatar = 0
            if (this.params.mode === null)
                isAvatar = 1

            fetch(this.$domain + "deleteImage?isAvatar=" + isAvatar + "&dir=" + this.params.dir + "&number=" + this.params.number, {
                method: "DELETE",
                credentials: "include"
            })
                .then(data => {
                    if (data.status === 401) {
                        this.$user.logout(this.$domain)
                        this.$router.push({ name: "search" })
                    } else
                        return data.json()
                })
                .then(() => {
                    this.$user.set({ field: "avatar", value: null })
                    location.reload()
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

        showButtons() {
            if (this.buttons)
                this.buttons = null
            else
                this.buttons = true
        },

        close() {
            this.buttons = null
            this.opened = null
            this.first = true
            this.last = true
        },

        clear() {
            this.image = { src: null, type: null }
            this.$refs.input.value = ''

            if (this.$refs.avatar)
                this.$refs.avatar.value = ""
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

.images-wrapper {
    display: flex;
    flex-wrap: wrap;
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

.file {
    margin-right: 20px;
    margin-bottom: 20px;
}

.image {
    text-decoration: none;
    cursor: pointer;
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

@media only screen and (max-width : 584px) {
    .images {
        justify-content: center;
    }

    .image {
        width: 130px;
        min-width: 130px;
        height: 150px;
        min-height: 150px;
    }
}

@media only screen and (max-width : 520px) {
    .image {
        width: 175px;
        min-width: 175px;
        height: 200px;
        min-height: 200px;
    }
}

@media only screen and (max-width : 460px) {
    .image {
        width: 150px;
        min-width: 150px;
        height: 175px;
        min-height: 175px;
    }
}

@media only screen and (max-width : 410px) {
    .image {
        width: 130px;
        min-width: 130px;
        height: 150px;
        min-height: 150px;
    }
}

@media only screen and (max-width : 370px) {
    .expand {
        padding-top: 15px;
        padding-left: 15px;
        padding-bottom: 0;
        padding-right: 0;
    }

    .images-wrapper {
        justify-content: center;
    }

    .image-wrap {
        margin-right: 15px;
        margin-bottom: 15px;
    }

    .file {
        margin-right: 15px;
        margin-bottom: 15px;
    }

    .image {
        width: 110px;
        min-width: 110px;
        height: 140px;
        min-height: 140px;
    }
}

@media only screen and (max-width : 295px) {
    .image {
        width: 150px;
        min-width: 150px;
        height: 175px;
        min-height: 175px;
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
    transform: translateY(-50%);
}

.dots {
    z-index: 2147483647;
    cursor: pointer;
    width: 25px;

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

.private {
    color: #000;
    background-color: #b2b2b2;
    border-radius: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px 30px;
}

.private span {
    font-weight: 700;
}

.private img {
    width: 22px;
}

@media screen and (max-width: 529px) {
    .dots {
        top: 21px;
    }

    .buttons {
        top: 15px;
    }
}

.icon-wrap {
    background-color: #686868;
    border-radius: 50%;

    position: absolute;
    left: 3px;
    bottom: 3px;

    display: flex;
    align-items: center;
    padding: 4px 5px;
}

.icon {
    width: 20px;
    filter: invert(100%) sepia(3%) saturate(7472%) hue-rotate(50deg) brightness(108%) contrast(108%);
}

a {
    margin-left: 0;
}
</style>

<style>
.pswp {
    z-index: 2147483645;
}
</style>
