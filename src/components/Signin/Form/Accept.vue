<template>
    <div class="wrapper" @click="set">
        <label for="accept">
            <input type="checkbox" id="accept" name="accept" v-model="terms" @change="set" />
            {{ lang }}
            <a href="https://app.termly.io/document/terms-of-use-for-website/6bcad083-6995-488c-afa5-34cb4a635dfc" target="_blank">Terms and Conditions</a>
        </label>
    </div>
</template>

<script scoped>
export default {
	name: "Accept",
    props: ["terms", "lang"],
    methods: {
        set() {
            if (this.terms)
                this.$user.set({ field: "terms", value: false })
            else
                this.$user.set({ field: "terms", value: true })
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 100%;

    margin-top: 40px;
}

label {
    cursor: pointer;
    width: 100%;
    color: #fff;
    font-size: 19px;

    display: flex;
    align-items: center;
    justify-content: center;
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