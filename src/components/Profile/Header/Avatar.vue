<template>
    <div>
        <img v-if="avatar === false" src="/images/avatar.webp" class="no">
        <img v-else :src="$ip + $route.params.id + '/avatar.webp?' + Date.now()" class="avatar" @click="$emit('avatar')">
    </div>
</template>

<script scoped>
export default {
	name: "Avatar",
    props: ["avatar"]
}
</script>

<style scoped>
div {
    width: 168.75px;
    min-width: 168.75px;
    height: 225px;
    min-height: 225px;
    border-radius: 8px;

    display: flex;
    align-items: center;
    margin-right: 50px;
}

img {
    object-fit: cover;
}

.no {
    width: 100%;
}

.avatar {
    cursor: pointer;
    
    width: 100%;
    min-width: 100%;
    max-width: 100%;

    height: 100%;
    min-height: 100%;
    max-height: 100%;

    border-radius: 8px;
}

@media screen and (max-width: 700px) {
    div {
        margin: 0 auto;
        margin-bottom: 25px;
    }
}
</style>
