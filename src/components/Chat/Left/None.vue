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
	width: 100%;
	height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
	
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