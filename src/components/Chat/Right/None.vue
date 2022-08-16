<template>
	<div class="none">
        <span>{{ lang }}</span>
	</div>
</template>

<script scoped>
export default {
	name: "None",
    props: ["lang"]
}
</script>

<style scoped>
.none {
	width: 75%;
	min-width: 300px;
	height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
	
	overflow: hidden;
}

span {
    color: #5C5C5C;
    letter-spacing: 1.1px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
}
</style>
