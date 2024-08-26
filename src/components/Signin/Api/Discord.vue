<template>
    <div @click="popup()" class="btn_wrap">
        <div class="btn" :data-title="'Discord'"><img src="/images/apis/discord.webp"></div>
    </div>
</template>

<script scoped>
export default {
    props: ['terms', 'redirect_uri'],
    beforeMount() {
        if (this.$route.params.method === 'Discord' && this.$route.query.code)
            this.$emit("signin", { 
                token: this.$route.query.code, 
                method: this.$route.params.method, 
                redirect_uri: this.redirect_uri + '/' + this.$route.params.method
            })
    },
    methods: {
        popup() {
            window.open('https://discord.com/oauth2/authorize?response_type=code&scope=email&client_id=' + import.meta.env.VITE_DISCORD_ID + '&redirect_uri=' + this.redirect_uri + '/Discord', '_self')
        },
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