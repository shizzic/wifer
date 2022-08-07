<template>
	<div class="wrapper">
		<router-link v-for="(user, index) in users" :key="index" class="user" :to="{ name : 'profile', params : { id : user._id } }">
			<img v-if="user.avatar" :src="$ip + user._id + '/avatar.webp?' + Date.now()" class="avatar" />
			<div v-else class="no"><img src="/avatar.webp" /></div>

            <div class="flex">
                <Info :user="user" :photos="photos" />
                <Params :user="user" :titles="titles" :values="values" />
            </div>
		</router-link>
	</div>
</template>

<script scoped>
import Info from "@/components/Search/List/Users/Line/Info.vue"
import Params from "@/components/Search/List/Users/Line/Params.vue"
export default {
	name: "Line",
	props: ["users", "photos", "titles", "values"],
	components: {
		Info,
        Params
	}
}
</script>

<style scoped>
.wrapper {
    width: 100%;

	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

    overflow: hidden;
}

.user {
    position: relative;
    width: 100%;
	text-decoration: none;

	display: flex;
    padding: 15px 0;
}

.user:not(:last-of-type) {
    border-bottom: 1.5px solid #bcbcbc;
}

.flex {
    width: 100%;
    
    display: flex;
    flex-direction: column;
}

.avatar {
	width: 150px;
    min-width: 150px;
    height: 190px;
    min-height: 190px;
	border-radius: 8px;
	object-fit: cover;
}

.no {
    width: 150px;
    min-width: 150px;
    height: 190px;
    min-height: 190px;
	background-color: #556080;
    border-radius: 8px;

	display: flex;
	align-items: center;
}

.no img {
    width: 100%;
	height: 100%;
	object-fit: cover;
}

@media screen and (max-width: 450px) {
	.user {
        align-items: center;
        flex-direction: column;
    }

    .avatar, .no {
        margin-bottom: 10px;
    }
}
</style>
