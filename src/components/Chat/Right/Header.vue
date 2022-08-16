<template>
	<div class="header">
		<img v-if="target.avatar"
            :src="$ip + target.id + '/avatar.webp?' + Date.now()" 
            @click="$router.push({ name: 'profile', params: { id : target.id } })"
        />
        <img v-else src="/avatar.webp" @click="$router.push({ name: 'profile', params: { id : target.id } })" />
        <span>{{ target.username }}</span>
	</div>
</template>

<script scoped>
export default {
	name: "Header",
    props: ["target"],
	data() {
		return {
		}
	}
}
</script>

<style scoped>
.header {
	width: 100%;
    min-height: 60px;
    border-bottom: 1px solid #b0b5b8;

    display: flex;
    align-items: center;
    padding: 0 20px;
	
	overflow: hidden;
}

img {
    cursor: pointer;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;

    margin-right: 15px;
}

span {
    color: #5C5C5C;
    letter-spacing: 1.1px;
    font-size: 18px;
    font-weight: 700;
}
</style>
