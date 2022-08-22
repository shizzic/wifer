<template>
	<div class="rooms">
		<div v-for="(user_id, index) in order" :key="index" class="room" 
            :class="{ active: target && target.id == user_id, inactive: !target || target && target.id != user_id }"
        >
            <img v-if="rooms[user_id].avatar" :src="$ip + user_id + '/avatar.webp?' + Date.now()" class="icon" />
            <img v-else src="/avatar.webp" class="icon">
            <div class="right-wrapper">
                <div class="top-wrapper">
                    <span class="username">{{ rooms[user_id].username }}</span>
                    <span class="date">{{ getDate(rooms[user_id].created_at) }}</span>
                </div>
                <div class="message">
                    <img src="/readed.webp" class="view" :class="{ unseen: !rooms[user_id].viewed, seen: rooms[user_id].viewed }" />
                    {{ rooms[user_id].text }}
                </div>
            </div>
        </div>
	</div>
</template>

<script scoped>
export default {
	name: "Rooms",
	props: ["order", "rooms", "target"],
    methods: {
        getDate(time) {
            let today = new Date(time * 1000).getDate()
            let date = new Date(time * 1000)
            let dateDay = date.getDate()

            if (today === dateDay)
                return date.getHours() + ":" + ("0" + date.getMinutes()).substr(-2)
            else
                return dateDay + "." + (date.getMonth() + 1) + "." + date.getFullYear()
        }
    }
}
</script>

<style scoped>
.rooms {
	width: 100%;
	height: 100%;

    display: flex;
    flex-direction: column;
    padding: 0 10px;

    overflow-x: hidden;
    overflow-y: auto;
}

.room {
    cursor: pointer;
    width: 100%;
    border-radius: 4px;

    display: flex;
    align-items: center;

    padding: 10px;
    margin-bottom: 5px;

    transition: background-color .2s linear;
}

.icon {
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
    border-radius: 50%;
    object-fit: cover;

    margin-right: 12px;
}

.right-wrapper {
    width: 100%;
    min-width: 0;
    height: 100%;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.top-wrapper {
    width: 100%;

    display: flex;
    justify-content: space-between;
}

.username {
    color: #0a0a0a;
    font-size: 19px;
     
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.date {
    color: #a2aeb8;
    font-size: 11px;

    margin-left: 5px;
}

.message {
    position: relative;
    color: #67717a;
    font-size: 12px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    padding-left: 18px;
}

.view {
	width: 12px;

    position: absolute;
    left: 0;
    top: 3px;
}

.unseen {
	filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(160deg) brightness(100%) contrast(102%);
}

.seen {
	filter: invert(34%) sepia(59%) saturate(1893%) hue-rotate(219deg) brightness(99%) contrast(99%);
}

.active {
    background-color: #e5effa !important;
}

.inactive:hover {
    background-color: #f0f2f3;
}
</style>
