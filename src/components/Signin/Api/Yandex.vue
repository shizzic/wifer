<template>
    <div @click="terms ? popup() : null">
        <img src="/images/apis/yandex.webp">
    </div>
</template>

<script scoped>
export default {
    props: ['terms', 'redirect_uri'],
    beforeMount() {
        if (this.$route.query.method === 'Yandex' && this.$route.query.code)
            this.$emit("signin", { "token": this.$route.query.code, "method": this.$route.query.method })
    },
    methods: {
        popup() {
            window.open('https://oauth.yandex.ru/authorize?response_type=code&client_id=' + import.meta.env.VITE_YANDEX_ID + '&display=popup&redirect_uri=' + this.redirect_uri + '?method=Yandex', '_self')
        }
    }
}
</script>

<style scoped>
div {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 7px;
}

div:hover {
    background-color: #ededed;
}

img {
    width: 100%;
}
</style>