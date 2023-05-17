<template>
	<div class="wrap scroll">
		<h1>Subscription Fees, Cancellation and Refund Policy</h1>
		<h2>Subscription Fees</h2>
		<ul>
			<li>Credit card holder's account won't be charged on the same date as the original transaction date.</li>
			<li>Discounts, rebates or other special offers only valid for initial term; subscriptions won't be renew
				automatically.</li>
			<li>Right of access granted under these Terms is effective only upon payment of the subscription fees.</li>
		</ul>
		<h2>Cancelling Account</h2>
		<ul>
			<li>Your membership will continue through the end of your current charge cycle. For example: If your credit card
				is charged on the 10th of the month and you cancel on April 25th, you will not lose access until the May
				10th</li>
		</ul>
		<h2>Refunds</h2>
		<ul>
			<li>Subscription fees are non-refundable.</li>
		</ul>
	</div>
</template>

<script scoped>
export default {
	name: "RefundPolicy",
}
</script>

<style scoped>
.wrap {
	z-index: 10;
	width: 100%;
	height: 100%;
	background-color: #eaf4f1;
	position: relative;
	color: #333;

	padding: 3% 10%;

	overflow-x: hidden;
	overflow-y: auto;

	font-family: "Helvetica", Helvetica, Arial, sans-serif;
}

.wrap>* {
	margin-bottom: 20px;
}

h1 {
	font-size: 35px;
}

h2 {
	font-size: 25px;
}

p {
	font-size: 17px;
}

ul {
	margin-left: 4%;
}

li {
	font-size: 17px;

	margin-bottom: 2px;
}</style>