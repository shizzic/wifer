<template>
    <div class="wrap">
        <div class="username">
            <img v-show="premium > 0" src="/premium.webp" />
            <!-- <img v-show="premium === 2" src="/diamond.webp" /> -->
            <span>{{ username }}</span>
            <div class="ring-container">
                <div v-show="live === true" class="ring green-bor" />
                <div class="circle" :class="{ 'green-back': live === true, 'red-back': live === false }" />
            </div>
        </div>
        <span class="title">{{ title }}</span>
    </div>
</template>

<script scoped>
export default {
	name: "Avatar",
    props: ["username", "title", "online", "premium", "live"]
}
</script>

<style scoped>
.wrap {
    display: flex;
    flex-direction: column;

    margin-bottom: 10px;
}

.username {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

img {
    width: 26px;
    margin-right: 10px;
}

.username span {
    color: #4d4d4d;
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 1px;
}

.title {
    color: #4d4d4d;
    font-size: 17px;
}

.ring-container {
    position: relative;
    margin-left: 25px;
}

.circle {
    width: 12.5px;
    height: 12.5px;
    border-radius: 50%;
}

.ring {
    border-radius: 30px;
    -webkit-border-radius: 30px;
    height: 25px;
    width: 25px;

    position: absolute;
    left: -5.8px;
    top: -6.2px;

    animation: pulsate 1s ease-out;
    -webkit-animation: pulsate 1s ease-out;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite; 

    opacity: 0.0;
}

.green-back {
    background-color: #62bd19;
}

.red-back {
    background-color: #e81f1f;
}

.green-bor {
    border: 3px solid #62bd19;
}

.red-bor {
    border: 3px solid #e81f1f;
}

@keyframes pulsate {
    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 1.0;}
    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
}

@-webkit-keyframes pulsate {
    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 1.0;}
    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
}

@media screen and (max-width: 800px) {
    .wrap {
        margin-bottom: 25px;
        align-items: center;
    }
}
</style>
