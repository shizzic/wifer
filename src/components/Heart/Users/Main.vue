<template>
	<div class="wrapper">
		<div v-for="(user, index) in users" :key="index" class="user" :class="{ fresh : !mode && !viewed[user._id] }">
            <img v-if="user.avatar" 
                :src="$file('images', user._id, 'avatar.webp')" class="avatar" :class="{ premium: user.premium }"
                @click="$router.push({ name : 'profile', params : { id : user._id }})" 
            />
            <div v-else class="no" :class="{ premium: user.premium }" @click="$router.push({ name : 'profile', params : { id : user._id }})">
                <img src="/images/avatar.webp" />
            </div>

            <div class="body">
                <div class="flex">
                    <Info :user="user" :photos="photos" />
                    <Params :user="user" :titles="titles" :values="values" />
                    <Time :time="time[user._id]" />
                    <div v-show="notes[user._id]" class="text">
                        <img src="/images/note.webp" />
                        <span>{{ notes[user._id] }}</span>
                    </div>
                </div>

                <div v-show="mode && which > 0" class="btn-wrap"><div class="btn" @click="modal(index, user._id)">&#10006;</div></div>
            </div>
		</div>
	</div>
</template>

<script scoped>
import Info from "@/components/Heart/Users/Info.vue"
import Params from "@/components/Heart/Users/Params.vue"
import Time from "@/components/Heart/Users/Time.vue"
export default {
	name: "Users",
	props: ["users", "photos", "titles", "values", "notes", "time", "viewed", "mode", "which"],
	components: {
		Info,
        Params,
        Time
	},
    methods: {
        modal(index, id) {
            let modal = "like"
            
            if (this.which == 2)
                modal = "private"

            if (this.which == 3)
                modal = "access"

            this.$emit("modal", {modal: modal, index: index, id: id})
        }
    }
}
</script>

<style scoped>
.wrapper {
    width: 100%;

	display: flex;
    flex-direction: column;
    padding: 10px;
    
    overflow: hidden;
}

.user {
    position: relative;
    width: 100%;
	text-decoration: none;

	display: flex;
    padding: 10px;
}

.user:not(:last-of-type) {
    border-bottom: 1.5px solid #bcbcbc;
    margin-bottom: 5px;
}

.premium {
    border: 3px solid #cdbe1e;
}

.body {
    width: 100%;

    display: flex;
    justify-content: center;
}

.flex {
    width: 100%;
    
    display: flex;
    flex-direction: column;
}

.text {
    font-size: 22px;
    width: 100%;

    display: inline-block;
    padding-left: 15px;
}

.text img {
    width: 20px;
    height: 20px;

    margin-right: 10px;
}

.avatar {
    cursor: pointer;
	width: 150px;
    min-width: 150px;
    height: 190px;
    min-height: 190px;
	border-radius: 8px;
	object-fit: cover;
}

.no {
    cursor: pointer;
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

.fresh {
    background-color: #eaeaea;
    border-radius: 8px;
}

.btn-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn {
    position: relative;
	background-color: #ff6868;
	font-size: 20px;
	color: white;
	border-radius: 7px;
	box-shadow: 0 7px 0px #de4d4d;
	display: inline-block;
	transition: all .2s;
	padding: 8px 20px;
	padding-top: 10px;
	position: relative;
	top: -4px;
	cursor: pointer;
	margin-left: 10px;
}

 .btn:active {
	top: 3px;
	box-shadow: 0 2px 0px #de4d4d;
	transition: all .2s;
}

@media screen and (max-width: 550px) {
	.body {
        flex-wrap: wrap;
    }

    .btn-wrap {
        width: 100%;
        margin-top: 20px;
    }
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
