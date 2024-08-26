<template>
    <div @click="terms ? popup() : null" class="btn_wrap">
        <div class="btn" :data-title="'Mail.ru'"><img src="/images/apis/mail.webp"></div>
    </div>
</template>

<script scoped>
export default {
    props: ['terms', 'redirect_uri'],
    beforeMount() {
        if (this.$route.params.method === 'Mail' && this.$route.query.code)
            this.$emit("signin", { 
                token: this.$route.query.code, 
                method: this.$route.params.method, 
                redirect_uri: this.redirect_uri
            })
    },
    methods: {
        popup() {
            window.open('https://oauth.mail.ru/login?client_id=' + import.meta.env.VITE_MAIL_ID + '&response_type=code&scope=userinfo&state=' + Date.now() + '&redirect_uri=' + this.redirect_uri, '_self')
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

    padding: 7px;
}

.btn:hover {
    background-color: #ededed;
}

img {
    width: 100%;
    filter: invert(74%) sepia(57%) saturate(1036%) hue-rotate(333deg) brightness(101%) contrast(101%);
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