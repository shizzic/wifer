<template>
    <h1 class="title">{{ lang[l]["title"] }}</h1>
    <h2 class="text">{{ lang[l]["text"] }}</h2>
</template>

<script scoped>
export default {
	name: "Title",
    props: ["l", "lang"]
}
</script>

<style scoped>
h1, h2 {
    color: #FFFEFF;
    text-align: center;
}

.title {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 20px;
}

.text {
    font-weight: 400;
    font-size: 22px;
    margin-bottom: 35px;
}

@media screen and (max-width: 600px) {
    .title {
        font-size: 24px;
    }

    .text {
        font-size: 18px;
    }
}
</style>
