<template>
	<form name="contact" class="square" style="background-color: #272a34;" @submit.prevent="contact">
        <h2>{{ lang.title }}</h2>

        <input type="text" name="name" v-model="name" :placeholder="lang.name" />
        <input type="text" name="email" v-model="email" :placeholder="lang.email" />
        <input type="text" name="subject" v-model="subject" :placeholder="lang.subject" />
        <textarea v-model="message" maxlength="1500" :placeholder="lang.message" />

        <input type="submit" :value="lang.send" />
    </form>
</template>

<script scoped>
export default {
	name: "Contact",
    props: ["lang", "response"],
    data() {
		return {
			name: "",
            email: "",
            subject: "",
            message: ""
		}
	},
    methods: {
        contact() {
            let form = new FormData()
            form.append("name", this.name)
            form.append("email", this.email)
            form.append("subject", this.subject)
            form.append("message", this.message)

            fetch(this.$domain + "contact", {
                method: "POST",
                body: form
            })
                .then(data => { return data.json() })
                .then(data => {
                    if (!data)
                        this.$toast.success(this.response.success)
                    else
                        this.$toast.console.error();(this.response.success)
                })
        }
    }
}
</script>

<style scoped>
h2 {
    color: #fff;
    font-size: 28px;
    text-align: center;

    margin-bottom: 20px;
}

input {
    font-size: 17px;
    border: none;
    outline: none;
    background-color: #272a34;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: #8c9392;

    margin-bottom: 20px;
    padding-bottom: 8px;
}

input:focus, input:active, textarea:focus, textarea:active {
    background: transparent;
    border-color: rgba(255, 255, 255, 0.5) !important;
}

textarea {
    resize: vertical;
    font-size: 17px;
    border: none;
    outline: none;
    background-color: #272a34;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    color: #8c9392;

    margin-bottom: 15px;
}

input[type="submit"] {
    cursor: pointer;
    width: 120px;
    background-color: #f39422;
    color: #fff;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px 15px;
    margin: 0 auto;

    transition: background-color .1s linear;
}

input[type="submit"]:hover {
    background-color: #d67a0c;
}
</style>
