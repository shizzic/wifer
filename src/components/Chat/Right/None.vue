<template>
	<div class="none" :class="{ show: show, hide: !show }">
        <img src="/back.webp" class="back" @click="$chat.set({ field: 'show', value: null })" />
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

img {
    cursor: pointer;
    width: 38.4px;

    position: absolute;
    left: 15px;
    top: 15px;

    display: none;
}

@media screen and (max-width: 700px) {
    .none {
        width: 100%;
        min-width: 0;
    }
    
    .hide {
        display: none;
    }

    .show {
        width: 100%;
        min-width: 0;
    }

    .back {
        display: block;
    }
}
</style>
