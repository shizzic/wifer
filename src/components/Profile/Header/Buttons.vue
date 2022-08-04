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
            
            <div class="elem" v-show="data._id == $user.id">
                <div class="btn" @click="$emit('settings')">
                    <img src="/settings.webp">
                </div>

                <div class="btn" @click="$emit('modal', 'logout')">
                    <img src="/logout.webp">
                </div>
            </div>

            <div v-show="$user.id && data._id != $user.id" class="elem">
                <div class="btn" @click="like">
                    <div class="fill" :class="{ checked : checked.like.is, unchecked : !checked.like.is }" style="background-color: #C82647;" />
                    <img src="/like.webp">
                </div>

                <div class="btn" @click="privateHandle">
                    <div class="fill" :class="{ checked : checked.private.is, unchecked : !checked.private.is }" style="background-color: #7E3661;" />
                    <img src="/private.webp">
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
}

.elem:first-of-type {
    margin-bottom: 50px;
}

.btn {
    position: relative;
    cursor: pointer;
    background-color: #989898;
    border-radius: 50%;

    display: flex;
    align-items: center;
    padding: 12px;

    overflow: hidden;
}

.btn:not(:last-of-type) {
    margin-right: 50px;
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
    }

    .btn {
        margin-top: 30px;
    }

    .elem:first-of-type {
        margin-right: 10px;
        margin-bottom: 0;
    }

    .btn:not(:last-of-type) {
        margin-right: 10px;
    }
}
</style>
