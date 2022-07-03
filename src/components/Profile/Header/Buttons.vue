<template>
	<div class="wrap">
        <div class="wrapper">
            <router-link :to="{ name: 'settings'}" class="button">
                <img src="/settings.webp">
            </router-link>
            <div class="button">
                <img src="/favorite.webp">
            </div>
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
.wrap {
    flex: 1;

    display: flex;
    justify-content: flex-end;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.button {
    flex: 0;
    
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    border: 1px solid #000;
    border-radius: 6px;

    display: flex;
    justify-content: right;
    align-items: center;

    padding: 5px;
}

.button:active {
    border-width: 2px;
    background-color: #F7F7F7;
    transition: all 0.1s ease-out;
}

.button:active img {
    width: 26px;
    transition: all 0.1s linear;
}

.button:not(:last-child) {
    margin-bottom: 30px;
}

img {
    width: 32px;
}

@media screen and (max-width: 600px) {
    .wrap {
        margin-top: 30px;
    }
    
    .wrapper {
        flex-direction: row;
    }

    .button {
        margin-bottom: 0;
        margin-right: 30px;
    }

    .button:last-child {
        margin-right: 0;
    }
}
</style>
