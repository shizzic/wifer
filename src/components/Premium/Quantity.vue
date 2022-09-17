<template>
	<div class="square">
        <span class="text">{{ lang.text }}</span>
        <h2>{{ quantity }}</h2>
        <span class="text">{{ lang.users }}</span>
    </div>
</template>

<script scoped>
export default {
	name: "Quantity",
    props: ["lang"],
	data() {
		return {
            quantity: null
		}
	},
    beforeMount() {
        this.count()
    },
	methods: {
		count() {
            fetch(this.$domain + "count")
                .then(data => { return data.json() })
                .then(quantity => { this.quantity = quantity })
        }
	}
}
</script>

<style scoped>
.text {
    font-size: 18px;
    letter-spacing: 0.3px;
    width: 100%;
    text-align: center;

    display: inline-block;
}

h2 {
    font-size: 28px;
    text-align: center;

    margin: 12px 0;
}
</style>
