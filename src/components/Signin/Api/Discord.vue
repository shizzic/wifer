<template>
    <div @click="popup()">
        <img src="/images/apis/discord.webp">
    </div>
</template>

<script scoped>
export default {
    props: ['terms', 'redirect_uri'],
    beforeMount() {
        if (this.$route.query.method === 'Discord' && this.$route.query.code)
            this.$emit("signin", { "token": this.$route.query.code, "method": this.$route.query.method, redirect_uri: this.redirect_uri + '?method=Discord' })
    },
    methods: {
        popup() {
            window.open('https://discord.com/oauth2/authorize?response_type=code&scope=email&client_id=' + import.meta.env.VITE_DISCORD_ID + '&redirect_uri=' + this.redirect_uri + '?method=Discord', '_self')
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