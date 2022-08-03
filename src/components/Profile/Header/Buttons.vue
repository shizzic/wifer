<template>
	<div class="wrap">
        <div class="wrapper">
            <div v-show="data._id == $user.id" class="btn" @click="$emit('settings')">
                <img src="/settings.webp">
            </div>
            <div v-show="data._id != $user.id" class="btn">
                <img src="/favorite.webp">
            </div>
            <div v-show="data._id == $user.id" class="btn" @click="$emit('modal', 'deactivate')">
                <img src="/deactivate.webp">
            </div>
            <div v-show="data._id == $user.id" class="btn" @click="$emit('modal', 'logout')">
                <img src="/logout.webp">
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

.btn {
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

.btn:active {
    border-width: 2px;
    background-color: #F7F7F7;
    transition: all 0.1s ease-out;
}

.btn:active img {
    width: 26px;
    transition: all 0.1s linear;
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

    .btn {
        margin-bottom: 0;
    }

    .btn:not(:last-child) {
        margin-right: 30px;
    }
}

@media screen and (min-width: 601px) {
    .btn:not(:last-child) {
        margin-bottom: 30px;
    }
}
</style>
