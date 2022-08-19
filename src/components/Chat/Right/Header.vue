<template>
	<div class="header">
        <div class="elem pointer" @click="$router.push({ name: 'profile', params: { id : target.id } })" style="width: 100%;">
            <img v-if="target.avatar" :src="$ip + target.id + '/avatar.webp?' + Date.now()" class="avatar" />
            <img v-else src="/avatar.webp" class="avatar" />
            <span>{{ target.username }}</span>
        </div>

        <div v-if="access" class="elem">
            <div class="btn" @click="accessHandle">
                <div class="fill" :class="{ checked : access.user, unchecked : !access.user }" style="background-color: #EB9532;" />
                <img src="/access.webp" class="icon">
            </div>
        </div>
	</div>
</template>

<script scoped>
export default {
	name: "Header",
    props: ["target", "access"],
	data() {
		return {
		}
	},
    methods: {
        accessHandle() {
            let access = Object.assign({}, this.access)

            if (access.user)
                access.user = false
            else
                access.user = true
            
            this.$chat.setMessages({ id: +this.target.id, access: access })

            if (this.$chat.socket)
                this.$chat.sendMessage({ target: +this.target.id, user: +this.$user.id, api: "access", access: access.user  })
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

.avatar {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;

    margin-right: 15px;
    margin-left: 20px;
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
</style>
