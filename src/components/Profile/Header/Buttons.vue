<template>
    <div class="wrap">
        <div class="wrapper">
            <template v-if="data._id == $user.id">
                <div class="elem">
                    <div class="popover">
                        <div class="popover_text" :data-title="popover.premium">
                            <div class="btn">
                                <div class="fill" :class="{ checked: premium > 0, unchecked: premium === 0 }"
                                    style="background-color: #EB9532;" />
                                <img src="/images/trial.webp">
                            </div>
                        </div>
                    </div>

                    <div class="popover">
                        <div class="popover_text" :data-title="popover.deactivate">
                            <div class="btn" @click="$emit('modal', 'deactivate')">
                                <img src="/images/deactivate.webp">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="elem">
                    <div class="popover">
                        <div class="popover_text" :data-title="popover.settings">
                            <div class="btn" @click="$emit('settings')">
                                <img src="/images/settings.webp">
                            </div>
                        </div>
                    </div>

                    <div class="popover">
                        <div class="popover_text" :data-title="popover.logout">
                            <div class="btn" @click="$emit('modal', 'logout')">
                                <img src="/images/logout.webp">
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-else-if="$user.id && data._id != $user.id">
                <div class="elem">
                    <div class="popover">
                        <div class="popover_text" :data-title="popover.like">
                            <div class="btn" @click="like()">
                                <div class="fill" :class="{ checked: checked.like.is, unchecked: !checked.like.is }"
                                    style="background-color: #DD2647;" />
                                <img src="/images/like.webp">
                            </div>

                        </div>
                    </div>

                    <div class="popover">
                        <div class="popover_text" :data-title="popover.private">
                            <div class="btn" @click="privateHandle()">
                                <div class="fill"
                                    :class="{ checked: checked.private.is, unchecked: !checked.private.is }"
                                    style="background-color: #16AE85;" />
                                <img src="/images/private.webp">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="elem">
                    <div class="popover">
                        <div class="popover_text" :data-title="popover.access">
                            <div class="btn" @click="access()">
                                <div class="fill" :class="{ checked: checked.access.is, unchecked: !checked.access.is }"
                                    style="background-color: #EB9532;" />
                                <img src="/images/access.webp">
                            </div>
                        </div>
                    </div>

                    <div class="popover">
                        <div class="popover_text" :data-title="popover.chat">
                            <div class="btn" @click="chat()">
                                <img src="/images/chat.webp">
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script scoped>
export default {
    name: "Header",
    props: ["data", "checked", "add", "del", 'popover', "l"],
    computed: {
        premium() {
            return this.$user.premium
        }
    },
    methods: {
        like() {
            let method = "POST"

            if (this.checked.like.is) {
                this.checked.like.is = false
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
                .then(data => {
                    if (data.status === 401) {
                        this.$user.logout(this.$domain)
                        this.$router.push({ name: "search" })
                    }
                })
        },

        privateHandle() {
            let method = "POST"

            if (this.checked.private.is) {
                this.checked.private.is = false
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
                .then(data => {
                    if (data.status === 401) {
                        this.$user.logout(this.$domain)
                        this.$router.push({ name: "search" })
                    }
                })
        },

        access() {
            let method = "POST"

            if (this.checked.access.is) {
                this.checked.access.is = false
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
                .then(data => {
                    if (data.status === 401) {
                        this.$user.logout(this.$domain)
                        this.$router.push({ name: "search" })
                    }
                })

            if (this.$chat.server)
                this.$chat.sendMessage({ target: this.data._id, user: +this.$user.id, api: "access", access: this.checked.access.is })
        },

        chat() {
            if (this.premium > 0 || this.checked.access.access
                && (
                    !(this.data._id in this.$chat.messages) ||
                    this.data._id in this.$chat.messages && (!("access" in this.$chat.messages[this.data._id]) ||
                        "access" in this.$chat.messages[this.data._id] && this.$chat.messages[this.data._id].access.target)
                )
                || !this.checked.access.access
                && (
                    this.data._id in this.$chat.messages && "access" in this.$chat.messages[this.data._id]
                    && this.$chat.messages[this.data._id].access.target
                )
            ) {
                this.$chat.set({ field: "show", value: true })
                this.$chat.set({ field: "target", value: { id: this.data._id, avatar: this.data.avatar, username: this.data.username } })
                this.$chat.setMessages({ id: this.data._id })
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

.popover:hover [data-title]::after {
    content: attr(data-title);
    font-size: 15px;
    z-index: 100;
    background-color: rgb(199, 199, 199);
    border-radius: 2px;
    word-break: normal;

    position: absolute;
    right: 0;
    bottom: 0;

    padding: 1px 6px;
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
