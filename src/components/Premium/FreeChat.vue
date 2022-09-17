<template>
	<div class="square">
        <h2>{{ lang.title }}</h2>
        <span>{{ lang.text }}</span>
    </div>
</template>

<script scoped>
export default {
	name: "FreeChat",
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
    text-align: center;
    font-size: 18px;

    display: inline-block;
}
</style>
