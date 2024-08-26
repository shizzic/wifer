<template>
    <div @click="terms ? popup() : null" class="btn_wrap">
        <div class="btn" :data-title="'Vkontakte'"><img src="/images/apis/vk.webp"></div>
    </div>
</template>

<script scoped>
export default {
    props: ['redirect_uri', 'terms'],
    beforeMount() {
        if (this.$route.params.method === 'VK' && this.$route.query.code && this.$route.query.device_id && this.$route.query.state)
            this.$emit("signin", {
                token: this.$route.query.code,
                method: this.$route.params.method,
                state: this.$route.query.state,
                device_id: this.$route.query.device_id,
                redirect_uri: this.redirect_uri
            })
    },
    methods: {
        popup() {
            window.open('https://id.vk.com/authorize?scope=email&response_type=code&state=' + Date.now() +
                '&code_challenge=' + import.meta.env.VITE_VK_SECRET + '&code_challenge_method=s256' +
                '&client_id=' + import.meta.env.VITE_VK_ID + '&redirect_uri=' + this.redirect_uri + "/VK", '_self')
        }
    }
}
</script>

<style scoped>
.btn {
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

.btn:hover {
    background-color: #ededed;
}

img {
    width: 100%;
}

.btn_wrap:hover [data-title]::after {
  content: attr(data-title);
  font-size: 15px;
  z-index: 100;
  background-color: rgb(199, 199, 199);
  border-radius: 2px;
  word-break: normal;

  position: absolute;
  left: 0;
  bottom: 0;

  padding: 1px 6px;
}
</style>