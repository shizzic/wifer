<template>
    <Form name="contact" class="square" style="background-color: #272a34;" @submit="contact">
        <h2>{{ lang.title }}</h2>

        <Field name="name" :rules="message_rules" v-slot="{ field }" v-model="name">
            <input v-bind="field" v-model="name" :placeholder="lang.name" maxlength="254" />
        </Field>
        <ErrorMessage name="name" class="error" />
        
        <Field name="email" :rules="email_rules" v-slot="{ field }" v-model="email">
            <input v-bind="field" type="email" v-model="email" :placeholder="lang.email" maxlength="254" />
        </Field>
        <ErrorMessage name="email" class="error" />

        <input type="text" name="subject" v-model="subject" :placeholder="lang.subject" />

        <Field name="message" :rules="message_rules" v-slot="{ field }" v-model="message">
            <textarea v-bind="field" v-model="message" :placeholder="lang.message" maxlength="1500" />
        </Field>
        <ErrorMessage name="message" class="error" style="margin-top: -12px;" />

        <input type="submit" :value="lang.send" />
    </Form>
</template>

<script scoped>
import { SigninJS } from "@/store/Langs/Signin"
import { Form } from "vee-validate"
import { Field, ErrorMessage } from "vee-validate"
import * as yup from "yup"
export default {
    name: "Contact",
    props: ["lang", "response", "l"],
    components: {
        Form,
        Field,
        ErrorMessage
    },
    setup() {
        const error = SigninJS().error

        return {
            error,
        }
    },
    data() {
        return {
            email_rules: yup.string().email(this.error[this.l]["email"]).required(this.error[this.l]["required"]),
            message_rules: yup.string().required(this.error[this.l]["required"]),

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

input:focus,
input:active,
textarea:focus,
textarea:active {
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

.error {
    color: rgb(228, 96, 96);
    font-size: 13px;

    margin-top: -18px;
    margin-bottom: 15px;
}
</style>
