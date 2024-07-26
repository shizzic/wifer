<template>
	<div class="square">
        <h1>{{ $app_name }}</h1>

        <div class="block">
            <span>{{ lang.text }}</span>
            <span> {{ lang.reasons }}</span>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "About",
    props: ["lang"]
}
</script>

<style scoped>
h1 {
    font-size: 28px;
    text-align: center;

    margin-bottom: 12px;
}

.block {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.block span {
    text-align: center;
    font-size: 18px;

    display: inline-block;
}

.block span:first-child {
    margin-bottom: 15px;
}

.block span:last-child {
    font-weight: 700;
}
</style>
