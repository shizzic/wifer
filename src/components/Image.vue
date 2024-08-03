<template>
    <img v-if="media && isFetched" :src="media" :key="key" loading="lazy" />
    <Skeletor v-else-if="!media && !isFetched" class="skeletor" />
</template>

<script scoped>
import 'vue-skeletor/dist/vue-skeletor.css'
import { Skeletor } from "vue-skeletor"

export default {
    name: "Media",
    props: ["src"],
    components: {
        Skeletor
    },
    data() {
        return {
            media: null,
            key: 0,
            isFetched: false,
        }
    },
    watch: {
        src: {
            handler(value) {
                this.media = null
                this.isFetched = false
                ++this.key
                this.get_media(value)
            }
        }
    },
    beforeMount() {
        this.src ? this.get_media(this.src) : this.isFetched = true
    },
    methods: {
        async get_media(src) {
            if (src.search("https") !== -1) {
                fetch(src, {
                    headers: {
                        "Content-Type": "raw"
                    },
                    credentials: "include",
                })
                    .then(res => { return res.blob(); })
                    .then(blob => {
                        this.media = URL.createObjectURL(blob)
                        this.isFetched = true
                    })
            } else {
                this.media = src
                this.isFetched = true
            }
        }
    }
}
</script>

<style scoped>
img {
    object-fit: cover;
}

.skeletor {
    border-radius: inherit;
}
</style>