<template>
	<div class="header">
        <Avatar :avatar="data.avatar" />
        <div class="right">
            <Username :username="data.username" :title="data.title" :online="data.online" />
            <Icons 
                :time="{ created_at: data.created_at, last_time: data.last_time }" 
                :text="{ age: data.age, sex: data.sex }"
                :place="{ country: data.country_id, city: data.city_id }"
            />
        </div>
    </div>
</template>

<script scoped>
import Avatar from "@/components/Profile/Header/Avatar.vue"
import Username from "@/components/Profile/Header/Username.vue"
import Icons from "@/components/Profile/Header/Icons.vue"
export default {
	name: "Header",
    props: ["data"],
    components: {
        Avatar,
        Username,
        Icons
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
}

.right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

@media screen and (max-width: 768px) {
    .header {
        flex-direction: column;
        align-items: center;

        padding: 30px;
    }
}
</style>
