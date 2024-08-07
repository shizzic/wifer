<template>
    <div @click="terms ? popup() : null">
        <img src="/images/apis/mail.webp">
    </div>
</template>

<script scoped>
export default {
    props: ['terms', 'redirect_uri'],
    beforeMount() {
        if (this.$route.query.method === 'Mail' && this.$route.query.code)
            this.$emit("signin", { "token": this.$route.query.code, "method": this.$route.query.method, redirect_uri: this.redirect_uri + '?method=Mail' })
    },
    methods: {
        popup() {
            window.open('https://oauth.mail.ru/login?client_id=' + import.meta.env.VITE_MAIL_ID + '&response_type=code&scope=userinfo&state=' + Date.now() + '&redirect_uri=' + this.redirect_uri + '?method=Mail', '_self')
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

    padding: 7px;
}

div:hover {
    background-color: #ededed;
}

img {
    width: 100%;
    filter: invert(74%) sepia(57%) saturate(1036%) hue-rotate(333deg) brightness(101%) contrast(101%);
}
</style>