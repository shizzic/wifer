<template>
    <div id="smart-button-container">
        <div style="text-align: center;">
            <div id="paypal-button-container"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PayPal",
    props: ["response", "price"],
    mounted() {
        this.initPayPalButton()
    },
    methods: {
        initPayPalButton() {
            paypal.Buttons({
                style: {
                    shape: 'pill',
                    color: 'blue',
                    layout: 'vertical',
                    label: 'paypal',
                },
                createOrder: this.createOrder,
                onApprove: this.onApprove,
                onError: this.onError
            })
                .render('#paypal-button-container');
        },

        createOrder(data, actions) {
            return actions.order.create({
                purchase_units: [{ "description": "premium for 30 days", "amount": { "currency_code": "USD", "value": this.price } }]
            });
        },

        onApprove(data, actions) {
            return actions.order.capture().then(orderData => {
                fetch(this.$domain + "checkPayment", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        orderID: orderData.id
                    })
                })
                    .then(res => {
                        if (res.status === 401)
                            this.logout(this.$domain)
                        else
                            return res.json()
                    })
                    .then(res => {
                        if (res.error) {
                            this.$toast.error(this.response.payError)
                        } else {
                            this.$toast.success(this.response.payed)
                            this.$user.premium = res.premium
                        }
                    })

                // Show a success message within this page, e.g.
                const element = document.getElementById('paypal-button-container');
                element.innerHTML = '';
                element.innerHTML = '<h3>Thank you for your payment!</h3>';
            });
        },

        onError(err) {
            // console.log(err);
            this.$toast.error(this.response.payError)
        }
    }
}
</script>