<template>
    <div class="header">
        <img src="/images/back.webp" class="back" @click="$chat.set({ field: 'show', value: null })" />
        <div class="elem pointer" @click="$router.push({ name: 'profile', params: { id: target.id } })"
            style="width: 100%;">
            <div class="avatar-wrapper">
                <Image v-if="target.avatar" :src="$file('images', target.id, 'avatar.webp')" class="avatar" />
                <img v-else src="/images/avatar.webp" class="avatar" />
                <div v-show="rooms[target.id] && rooms[target.id].online" class="online" />
            </div>

            <span>{{ target.username }}</span>
        </div>

        <div v-if="access" class="elem">
            <div class="btn" @click="accessHandle">
                <div class="fill" :class="{ checked: access.user, unchecked: !access.user }"
                    style="background-color: #EB9532;" />
                <img src="/images/access.webp" class="icon">
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
    name: "Header",
    props: ["target", "access", "rooms"],
    methods: {
        accessHandle() {
            let access = Object.assign({}, this.access)
            access.user = !access.user
            this.$chat.setMessages({ id: +this.target.id, access: access })

            if (this.$chat.server)
                this.$chat.sendMessage({ target: +this.target.id, user: +this.$user.id, api: "access", access: access.user })
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
    justify-content: space-between;
    align-items: center;

    overflow: hidden;
}

.elem {
    height: 100%;

    display: flex;
    align-items: center;
}

.avatar-wrapper {
    position: relative;
    width: 42px;
    height: 42px;
    border-radius: 50%;

    margin-right: 15px;
    margin-left: 20px;
}

.avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.online {
    border: 2px solid #fff;
    border-radius: 50%;
    background-color: rgb(75, 179, 75);

    padding: 4px;

    position: absolute;
    right: 0;
    bottom: 0;
}

span {
    color: #5C5C5C;
    letter-spacing: 1.1px;
    font-size: 18px;
    font-weight: 700;
}

.btn {
    position: relative;
    cursor: pointer;
    background-color: #6a6161;
    border-radius: 50%;

    display: flex;
    align-items: center;

    padding: 9.5px;
    margin: 0 20px;

    overflow: hidden;
}

.icon {
    width: 23px;
    filter: invert(100%) sepia(6%) saturate(0%) hue-rotate(115deg) brightness(108%) contrast(108%);
}

.fill {
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    transition: width .2s linear;
}

.checked {
    width: 100%;
}

.unchecked {
    width: 0;
}

.pointer {
    cursor: pointer;
}

.back {
    cursor: pointer;
    width: 34px;

    display: none;
    margin: 0 15px;
}

@media screen and (max-width: 700px) {
    .back {
        display: block;
    }

    .avatar-wrapper {
        margin-left: 0;
    }
}
</style>
