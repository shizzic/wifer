<template>
	<div class="wrap">
        <router-link :to="{ name: 'settings'}" class="button">
            <img src="/settings.webp">
        </router-link>
        <div class="button">
            <img src="/favorite.webp">
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Header",
    props: ["data"]
}   
</script>

<style scoped>
.button {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;
    margin-bottom: 20px;
    
    box-shadow: 0 5px #999;
    border-radius: 12px;
}

.button:active {
    box-shadow: 0 1px #666;
    transform: translateY(4px);
}

img {
    width: 35px;
}
</style>
