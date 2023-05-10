<template>
    <div>
        <img v-if="avatar === false" src="/images/avatar.webp" class="no round" :class="{ premium: premium }">
        <img v-else :src="$file('images', $route.params.id, 'avatar.webp')" class="avatar" :class="{ premium: premium }" @click="$emit('avatar')">
    </div>
</template>

<script scoped>
export default {
	name: "Avatar",
    props: ["avatar", "premium"]
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

.round {
    border-radius: 50%;
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

.premium {
    border: 3px solid #cdbe1e;
}

@media screen and (max-width: 700px) {
    div {
        margin: 0 auto;
        margin-bottom: 25px;
    }
}
</style>
