<template>
	<div class="wrapper">
		<router-link v-for="(user, index) in users" :key="index" class="user" :to="{ name : 'profile', params : { id : user._id } }">
			<img v-if="user.avatar" :src="$file('images', user._id, 'avatar.webp')" />
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

	margin: 5px;
	margin-bottom: 10px;
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

		margin: 0;
		margin-bottom: 10px;
    }
}

@media screen and (min-width: 400px) and (max-width: 558px) {
    .user {
        width: 47%;
		height: 400px;
    }
}

@media screen and (min-width: 558px) and (max-width: 700px) {
    .user {
        width: 48%;
		height: 400px;
    }
}

@media screen and (min-width: 701px) and (max-width: 790px) {
	.wrapper {
		justify-content: space-between;
	}

    .user {
        width: 48%;
		height: 400px;
    }
}

@media screen and (min-width: 790px) and (max-width: 953px) {
    .user {
        width: 47%;
		height: 420px;
    }
}

@media screen and (min-width: 953px) and (max-width: 1204px) {
    .user {
        width: 48%;
		height: 420px;
    }
}

@media screen and (min-width: 1204px) and (max-width: 1500px) {
    .user {
        width: 32%;
		height: 420px;
    }
}

@media screen and (min-width: 1500px) {
    .user {
        width: 32%;
		height: 480px;
    }
}
</style>
