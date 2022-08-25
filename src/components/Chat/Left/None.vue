<template>
	<div class="none" :class="{ show: !show, hide: show }">
        <img src="/back.webp" class="back" @click="$chat.set({ field: 'show', value: true })" />
        <span>{{ lang }}</span>
	</div>
</template>

<script scoped>
export default {
	name: "None",
    props: ["lang", "show"]
}
</script>

<style scoped>
.none {
    position: relative;
	width: 25%;
	min-width: 300px;
	height: 100%;
    border-right: 1px solid #b0b5b8;

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

img {
    cursor: pointer;
    width: 38.4px;
    transform: rotate(180deg);

    position: absolute;
    right: 15px;
    top: 15px;

    display: none;
}

@media screen and (max-width: 700px) {
    .show {
		width: 100%;
		min-width: 0;
	}

	.hide {
		display: none;
	}

    .back {
        display: block;
    }
}
</style>