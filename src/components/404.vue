<template>
	<div class="wrap scroll">
		<span>404</span>
		<img :src="'/images/404.gif'" />
	</div>
</template>

<script scoped>
export default {
	name: "404",
}
</script>

<style scoped>
.wrap {
	width: 100%;
	height: 100%;
	background-color: #eadede;

	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 0 auto;
	padding: 50px 20px;

	overflow-x: hidden;
}

.wrap::before, .wrap::after {
  content: '';
  margin: auto;
}

span {
	font-weight: 700;
	font-size: 50px;
}
</style>