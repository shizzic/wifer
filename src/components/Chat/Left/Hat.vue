<template>
	<div class="hat">
		<div class="search">
            <img src="/search.webp" />
            <input :placeholder="search" />
        </div>
	</div>
</template>

<script scoped>
export default {
	name: "Hat",
    props: ["search"],
	data() {
		return {
		}
	}
}
</script>

<style scoped>
.hat {
	width: 100%;

    padding: 15px;
	overflow: hidden;
}

.search {
    border: 1px solid #b0b5b8;
    border-radius: 20px;

    display: flex;
    align-items: center;

    padding-left: 10px;
}

img {
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
</style>
