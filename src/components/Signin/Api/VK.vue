<template>
    <div @click="terms ? popup() : null">
        <img src="/images/apis/vk.webp">
    </div>
</template>

<script scoped>
export default {
    props: ['redirect_uri', 'terms'],
    beforeMount() {
        if (this.$route.query.method === 'VK' && this.$route.query.code && this.$route.query.device_id && this.$route.query.state)
            this.$emit("signin", {
                "token": this.$route.query.code, 
                "method": this.$route.query.method,
                "state": this.$route.query.state,
                "device_id": this.$route.query.device_id,
                redirect_uri: this.redirect_uri + '?method=VK'
            })
    },
    methods: {
        popup() {
            window.open('https://id.vk.com/authorize?scope=email&response_type=code&state=' + Date.now() +
                '&code_challenge=' + import.meta.env.VITE_VK_SECRET + '&code_challenge_method=s256' +
                '&client_id=' + import.meta.env.VITE_VK_ID + '&redirect_uri=' + this.redirect_uri + '?method=VK', '_self')
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