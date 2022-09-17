<template>
	<div class="square">
        <h2>{{ lang.title }}</h2>
        <span>1. {{ lang.without }}</span>
        <span>2. {{ lang.multiple }}</span>
    </div>
</template>

<script scoped>
export default {
	name: "WorldWide",
    props: ["lang"]
}
</script>

<style scoped>
h2 {
    font-size: 28px;
    text-align: center;

    margin-bottom: 20px;
}

span {
    font-size: 18px;

    display: inline-block;
}

span:first-of-type {
    margin-bottom: 10px;
}
</style>
