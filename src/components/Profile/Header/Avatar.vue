<template>
    <div>
        <img v-if="avatar === false" src="/avatar.webp" class="no">
        <img v-else :src="$ip + $domain.id + '/avatar.webp'" class="avatar">
    </div>
</template>

<script scoped>
export default {
	name: "Avatar",
    props: ["avatar"],
}
</script>

<style scoped>
div {
    width: 168.75px;
    min-width: 168.75px;
    height: 225px;
    min-height: 225px;

    display: flex;
    align-items: center;
    margin-right: 50px;

    border-radius: 12px;
}

.no {
    width: 100%;
}

.avatar {
    width: 100%;
    min-width: 100%;
    max-width: 100%;

    height: 100%;
    min-height: 100%;
    max-height: 100%;
}

@media screen and (max-width: 768px) {
    div {
        margin: 0 auto;
    }
}
</style>
