<template>
	<div class="block">
		<div class="pocket">
            <span>{{ titles.weight }}: {{ user.weight }}</span>
            <span>{{ titles.height }}: {{ user.height }}</span>
        </div>

        <div class="pocket">
            <span>{{ titles.body }}: {{ values.body[user.body] }}</span>
            <span>{{ titles.ethnicity }}: {{ values.ethnicity[user.ethnicity] }}</span>
        </div>
	</div>
</template>

<script scoped>
export default {
	name: "Params",
	props: ["user", "titles", "values"]
}
</script>

<style scoped>
.block {
    position: relative;
    width: 100%;
    min-width: 200px;

    display: flex;
    flex-wrap: wrap;
    padding-left: 15px;
}

.pocket {
    width: calc(50% - 50px);

    display: flex;
    flex-direction: column;
}

.pocket:first-of-type {
    margin-right: 50px;
}

span {
    font-size: 18px;
    color: #000;
    word-break: normal;

    display: inline-block;
}

.pocket:not(:last-child) {
    margin-bottom: 10px;
}

.pocket span:not(:last-of-type) {
    margin-bottom: 10px;
}

@media screen and (max-width: 1000px) {
	.pocket {
        width: auto;
    }
}
</style>
