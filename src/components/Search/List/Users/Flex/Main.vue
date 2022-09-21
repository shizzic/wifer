<template>
	<div class="wrapper">
		<router-link v-for="(user, index) in users" :key="index" class="user" :to="{ name : 'profile', params : { id : user._id } }">
			<img v-if="user.avatar" :src="$ip + user._id + '/avatar.webp?' + Date.now()" />
			<div v-else class="no"><img src="/images/avatar.webp" /></div>
			<Info :user="user" :photos="photos" />
		</router-link>
	</div>
</template>

<script scoped>
import Info from "@/components/Search/List/Users/Flex/Info.vue"
export default {
	name: "Flex",
	props: ["users", "photos"],
	components: {
		Info
	}
}
</script>

<style scoped>
.wrapper {
    width: 100%;

	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.user {
	text-decoration: none;
	border-radius: 8px;

	display: flex;
	flex-direction: column;

	margin-bottom: 15px;
}

img {
	width: 100%;
	height: 70%;

	border-top-left-radius: 8px;
	border-top-right-radius: 8px;

	object-fit: cover;
}

.no {
	background-color: #556080;
	width: 100%;
	height: 70%;

	border-top-left-radius: 8px;
	border-top-right-radius: 8px;

	display: flex;
	align-items: center;
}

.no img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@media screen and (max-width: 400px) {
	.wrapper {
		justify-content: center;
	}

    .user {
		width: 100%;
		height: 400px;
    }
}

@media screen and (min-width: 401px) and (max-width: 700px) {
    .user {
        width: 48.5%;
		height: 400px;
    }
}

@media screen and (min-width: 701px) and (max-width: 790px) {
	.wrapper {
		justify-content: space-between;
	}

    .user {
        width: 32.5%;
		height: 400px;
    }
}

@media screen and (min-width: 790px) and (max-width: 1150px) {
    .user {
        width: 48.5%;
		height: 420px;
    }
}

@media screen and (min-width: 1150px) and (max-width: 1500px) {
    .user {
        width: 32.5%;
		height: 420px;
    }
}

@media screen and (min-width: 1500px) and (max-width: 2000px) {
    .user {
        width: 32.5%;
		height: 480px;
    }
}
</style>
