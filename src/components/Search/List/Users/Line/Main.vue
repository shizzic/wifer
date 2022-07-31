<template>
	<div class="wrapper">
		<router-link v-for="(user, index) in users" :key="index" class="user" :to="{ name : 'profile', params : { id : user._id } }">
			<img v-if="user.avatar" :src="$ip + user._id + '/avatar.webp?' + Date.now()" class="avatar" />
			<div v-else class="no"><img src="/avatar.webp" /></div>

            <div class="flex">
                <Info :user="user" :photos="photos" />
                <Params :user="user" :titles="titles" :values="values" />
            </div>

            <img v-if="user.premium > 0" src="/premium.webp" class="premium" />
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
	width: 125px;
    min-width: 125px;
    height: 165px;
    min-height: 165px;
	border-radius: 8px;
	object-fit: cover;
}

.no {
    width: 125px;
    min-width: 125px;
    height: 165px;
    min-height: 165px;
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

.premium {
    width: 28px;

    position: absolute;
    right: 10px;
    top: -2px;

    object-fit: cover;
}

@media screen and (max-width: 400px) {
	.premium {
        width: 22px;
    }
}
</style>
