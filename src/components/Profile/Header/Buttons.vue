<template>
	<div class="wrap">
        <div class="wrapper">
            <div v-show="data._id == $user.id" class="btn" @click="$emit('settings')">
                <img src="/settings.webp">
            </div>
            <div v-show="data._id != $user.id" class="btn" :class="{ unborder: checked.is }" @click="like">
                <div class="favorite" :class="{ red : checked.is }" />
                <img src="/favorite.webp" :class="{ white : checked.is }">
            </div>
            <div v-show="data._id == $user.id" class="btn" @click="$emit('modal', 'deactivate')">
                <img src="/deactivate.webp">
            </div>
            <div v-show="data._id == $user.id" class="btn" @click="$emit('modal', 'logout')">
                <img src="/logout.webp">
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
            if (this.checked.is) {
                this.checked.is   = null
                this.checked.text = ""
                method = "DELETE"
                this.$toast.success(this.del.like[this.l])
            } else {
                this.checked.is = true
                this.$toast.success(this.add.like[this.l])
            }

            fetch(this.$domain + "like?target=" + this.$route.params.id, {
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

.btn {
    position: relative;
    flex: 0;
    
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    border: 1px solid #000;
    border-radius: 6px;

    display: flex;
    justify-content: right;
    align-items: center;

    padding: 5px;
}

.btn:active {
    border-width: 2px;
    background-color: #F7F7F7;
    transition: all 0.1s ease-out;
}

.btn:active img {
    width: 26px;
    transition: all 0.1s linear;
}

img {
    z-index: 2;
    width: 32px;
    transition: filter .2s linear;
}

@media screen and (max-width: 600px) {
    .wrap {
        margin-top: 30px;
    }
    
    .wrapper {
        flex-direction: row;
    }

    .btn {
        margin-bottom: 0;
    }

    .btn:not(:last-child) {
        margin-right: 30px;
    }
}

@media screen and (min-width: 601px) {
    .btn:not(:last-child) {
        margin-bottom: 30px;
    }
}

.favorite {
    width: 0;
    height: 100%;
    background-color: rgb(255, 60, 60);
    border-radius: 6px;

    position: absolute;
    left: 0;
    top: 0;

    transition: width .2s linear;
}

.red {
    width: 100%;
}

.white {
    filter: invert(100%) sepia(99%) saturate(8%) hue-rotate(17deg) brightness(109%) contrast(100%);
}

.unborder {
    border: 1px solid #fff;
}
</style>
