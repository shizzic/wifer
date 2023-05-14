<template>
    <div @click="login()">twitter</div>
</template>

<script scoped>
export default {
    name: "Twitter",
    props: ["terms"],
    methods: {
        login() {
            
        },

        signin(response) {
            this.$emit("signin", { "token": response["credential"], "id": response["clientId"], "method": "Google" })
        }
    }
}
</script>

<style scoped>
.disabled {
    pointer-events: none;
}
</style>
