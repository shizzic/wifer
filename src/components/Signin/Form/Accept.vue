<template>
    <label for="accept" :value="terms">
        <input type="checkbox" id="accept" name="accept" v-model="value" />
        {{ lang }}
        <router-link :to="{name: 'terms_and_conditions'}" target="_blank">Terms and Conditions</router-link>
    </label>
</template>

<script scoped>
export default {
    name: "Accept",
    props: ["terms", "lang"],
    data() {
        return {
            value: this.terms,
        }
    },
    watch: {
        value: {
            handler(value) {
                this.$user.set({ field: "terms", value: value })
            }
        }
    }
}
</script>

<style scoped>
label {
    cursor: pointer;
    width: 100%;
    color: #fff;
    font-size: 19px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
}

input {
    width: 15px;
    height: 15px;

    cursor: pointer;
    position: relative;
    border: none;
    border-radius: 6px;

    margin-right: 15px;
    transition: .3s;
}

input[type='checkbox']:checked {
    accent-color: rgb(73, 233, 91);
}

a {
    color: #ffa500;
    margin-left: 10px;
}

a:active {
    color: red;
}
</style>