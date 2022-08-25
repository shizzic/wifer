<template>
	<div class="hat">
		<div class="search">
            <img src="/search.webp" class="icon" />
            <input :placeholder="search" />
        </div>
        <img src="/back.webp" class="back" @click="$chat.set({ field: 'show', value: true })" />
	</div>
</template>

<script scoped>
export default {
	name: "Hat",
    props: ["search"]
}
</script>

<style scoped>
.hat {
	width: 100%;

    display: flex;
    align-items: center;
    padding: 15px 15px 10px;

	overflow: hidden;
}

.search {
    width: 100%;
    border: 1px solid #b0b5b8;
    border-radius: 20px;

    display: flex;
    align-items: center;

    padding-left: 10px;
}

.icon {
    width: 16px;
    filter: invert(86%) sepia(10%) saturate(117%) hue-rotate(159deg) brightness(85%) contrast(84%);
}

input {
    color: #5C5C5C;
    font-size: 16px;
    letter-spacing: 1px;
    outline: none;
    border: none;
    border-radius: 20px;
    width: 100%;

    padding: 10px;
}

.back {
    cursor: pointer;
    width: 34px;
    transform: rotate(180deg);

    display: none;
    margin-left: 15px;
}

@media screen and (max-width: 700px) {
    .back {
        display: block;
    }
}
</style>
