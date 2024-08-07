<template>
    <div @click="popup()">
        <img src="/images/apis/twitch.webp">
    </div>
</template>

<script scoped>
export default {
    props: ['terms', 'redirect_uri'],
    beforeMount() {
        if (this.$route.query.method === 'Twitch' && this.$route.query.code)
            this.$emit("signin", { "token": this.$route.query.code, "method": this.$route.query.method, redirect_uri: this.redirect_uri + '?method=Twitch' })
    },
    methods: {
        popup() {
            window.open('https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=' + import.meta.env.VITE_TWITCH_ID + '&scope=user%3Aread%3Aemail&redirect_uri=' + this.redirect_uri + '?method=Twitch', '_self')
        },
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

    padding: 7px;
}

div:hover {
    background-color: #ededed;
}

img {
    width: 100%;
}
</style>