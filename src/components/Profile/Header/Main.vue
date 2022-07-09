<template>
	<div class="header">
        <Avatar :avatar="data.avatar" @avatar="$emit('avatar')" />
        <div class="right">
            <Username :username="data.username" :title="data.title" :online="data.online" />
            <Icons 
                :time="{ created_at: data.created_at, last_time: data.last_time }" 
                :text="{ age: data.age, sex: data.sex }"
                :place="{ country: data.country_id, city: data.city_id }"
            />
        </div>
        <Buttons @settings="$emit('settings')" />
    </div>
</template>

<script scoped>
import Avatar from "@/components/Profile/Header/Avatar.vue"
import Username from "@/components/Profile/Header/Username.vue"
import Icons from "@/components/Profile/Header/Icons.vue"
import Buttons from "@/components/Profile/Header/Buttons.vue"
export default {
	name: "Header",
    props: ["data"],
    components: {
        Avatar,
        Username,
        Icons,
        Buttons
    }
}
</script>

<style scoped>
.header {
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 16px;

    display: flex;

    padding: 30px;
    margin-bottom: 30px;
}

.right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-right: 25px;
}

@media only screen and (max-width : 800px) {
    .header {
        align-items: center;
    }
}

@media screen and (max-width: 600px) {
    .header {
        flex-direction: column;
        align-items: center;

        padding: 30px;
    }
}
</style>
