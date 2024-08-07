<template>
    <div @click="popup()">
        <img src="/images/apis/twitter.webp">
    </div>
</template>

<script scoped>
export default {
    props: ['terms', 'redirect_uri'],
    beforeMount() {
        // curl - X POST https://api.twitter.com/2/oauth2/token -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic btoa(key:secret)" -d "redirect_uri=http://localhost:8080/signin?method=Twitter&client_id=TC1PVEVkTEI0TzBfbkdKRzhDSEY6MTpjaQ&code_verifier=challenge&grant_type=authorization_code&code=code"

        // if (this.$route.query.method === 'Twitter' && this.$route.query.code)
        //     this.$emit("signin", { "token": this.$route.query.code, "method": this.$route.query.method })
    },
    methods: {
        popup() {
            window.open('https://twitter.com/i/oauth2/authorize?response_type=code&client_id=TC1PVEVkTEI0TzBfbkdKRzhDSEY6MTpjaQ&scope=tweet.read%20users.read%20follows.read&state=state&code_challenge=challenge&code_challenge_method=plain&redirect_uri=' + this.redirect_uri + '?method=Twitter', '_self')
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
}
</style>