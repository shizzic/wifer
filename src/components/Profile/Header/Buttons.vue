<template>
	<div class="wrap">
        <div class="wrapper">
            <div v-show="data._id == $user.id" class="elem">
                <div class="btn">
                    <img src="/trial.webp">
                </div>
                <div class="btn" @click="$emit('modal', 'deactivate')">
                    <img src="/deactivate.webp">
                </div>
            </div>
            
            <div v-show="data._id == $user.id" class="elem">
                <div class="btn" @click="$emit('settings')">
                    <img src="/settings.webp">
                </div>

                <div class="btn" @click="$emit('modal', 'logout')">
                    <img src="/logout.webp">
                </div>
            </div>

            <div v-show="$user.id && data._id != $user.id" class="elem">
                <div class="btn" @click="like">
                    <div class="fill" :class="{ checked : checked.like.is, unchecked : !checked.like.is }" style="background-color: #DD2647;" />
                    <img src="/like.webp">
                </div>

                <div class="btn" @click="privateHandle">
                    <div class="fill" :class="{ checked : checked.private.is, unchecked : !checked.private.is }" style="background-color: #16AE85;" />
                    <img src="/private.webp">
                </div>
            </div>

            <div v-show="$user.id && data._id != $user.id" class="elem">
                <div class="btn" @click="access">
                    <div class="fill" :class="{ checked : checked.access.is, unchecked : !checked.access.is }" style="background-color: #EB9532;" />
                    <img src="/access.webp">
                </div>

                <div class="btn" @click="chat">
                    <img src="/chat.webp">
                </div>
            </div>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Header",
    props: ["data", "checked", "add", "del", "l"],
    methods: {
        like() {
            let method = "POST"

            if (this.checked.like.is) {
                this.checked.like.is   = null
                this.checked.like.text = ""
                method = "DELETE"
                this.$toast.show(this.del.like[this.l])
            } else {
                this.checked.like.is = true
                this.$toast.success(this.add.like[this.l])
            }

            fetch(this.$domain + "like?target=" + this.$route.params.id, {
				method: method,
				credentials: "include"
			})
        },

        privateHandle() {
            let method = "POST"

            if (this.checked.private.is) {
                this.checked.private.is = null
                method = "DELETE"
                this.$toast.show(this.del.private[this.l])
            } else {
                this.checked.private.is = true
                this.$toast.success(this.add.private[this.l])
            }

            fetch(this.$domain + "private?target=" + this.$route.params.id, {
				method: method,
				credentials: "include"
			})
        },

        access() {
            let method = "POST"

            if (this.checked.access.is) {
                this.checked.access.is = null
                method = "DELETE"
                this.$toast.show(this.del.access[this.l])
            } else {
                this.checked.access.is = true
                this.$toast.success(this.add.access[this.l])
            }

            fetch(this.$domain + "access?target=" + this.$route.params.id, {
				method: method,
				credentials: "include"
			})
        },

        chat() {
            if (!this.checked.access.access) {
                this.$chat.set({ field: "target", value: { id: this.data._id, avatar: this.data.avatar, username: this.data.username } })
                this.$router.push({ name: "chat" })
            } else
                this.$emit("modal", "chat")
        }
    }
}   
</script>

<style scoped>
.wrap {
    flex: 1;

    display: flex;
    justify-content: flex-end;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.elem {
    width: 100%;

    display: flex;
    align-items: center;

    margin: 20px 0;
}

.btn {
    position: relative;
    cursor: pointer;
    background-color: #6a6161;
    border-radius: 50%;

    display: flex;
    align-items: center;

    padding: 12px;
    margin: 0 20px;

    overflow: hidden;
}

img {
    width: 24px;
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

@media screen and (max-width: 700px) {
    .wrapper {
        flex-direction: row;
        justify-content: center;
    }

    .elem {
        margin: 0;
    }

    .btn {
        margin: 0 5px;
        margin-top: 30px;
    }
}
</style>
