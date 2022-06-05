<template>
    <div class="wrap">
        <div class="username">
            <span>{{ username }}</span>
            <div class="ring-container">
                <div v-show="online === true" class="ring green-bor" />
                <div class="circle" :class="{ 'green-back': online === true, 'red-back': online === false }" />
            </div>
        </div>
        <span class="title">{{ title }}</span>
    </div>
</template>

<script scoped>
export default {
	name: "Avatar",
    props: ["username", "title", "online"],
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
    margin-bottom: 15px;
}

.username span {
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 1px;
}

.title {
    color: gray;
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
    left: -6.2px;
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
    }
}

@media screen and (max-width: 600px) {
    .wrap {
        align-items: center;
    }
}
</style>
