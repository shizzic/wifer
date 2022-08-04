<template>
	<div class="header">
        <Avatar :avatar="data.avatar" @avatar="$emit('avatar')" />
        <div class="right">
            <Username :username="data.username" :title="data.title" :online="data.online" :premium="data.premium" :live="live" />
            <Icons
                :lang="lang"
                :time="{ created_at: data.created_at, last_time: data.last_time }" 
                :text="{ age: data.age, sex: data.sex }"
                :place="{ country: data.country_id, city: data.city_id }"
            />
        </div>
        <Buttons 
            :data="data" :checked="checked" :add="add" :del="del" :l="l"
            @settings="$emit('settings')" @modal="$emit('modal', $event)"
        />
    </div>
</template>

<script scoped>
import Avatar from "@/components/Profile/Header/Avatar.vue"
import Username from "@/components/Profile/Header/Username.vue"
import Icons from "@/components/Profile/Header/Icons.vue"
import Buttons from "@/components/Profile/Header/Buttons.vue"
export default {
	name: "Header",
    props: ["data", "lang", "checked", "add", "del", "l", "live"],
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
    border-radius: 8px;

    display: flex;

    padding: 30px;
    margin-bottom: 30px;

    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 1);
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

@media screen and (max-width: 700px) {
    .header {
        flex-direction: column;
        align-items: center;

        padding: 30px;
    }
}
</style>
