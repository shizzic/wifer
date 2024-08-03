<template>
	<div class="block">
		<div class="pocket">
            <span><span class="title">{{ titles.weight }}:</span>{{ user.weight }}</span>
            <span><span class="title">{{ titles.height }}:</span>{{ user.height }}</span>
        </div>

        <div class="pocket">
            <span><span class="title">{{ titles.body }}:</span>{{ values.body[user.body] }}</span>
            <span><span class="title">{{ titles.ethnicity }}:</span>{{ values.ethnicity[user.ethnicity] }}</span>
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

.title {
    font-weight: 600;

    margin-right: 10px;
}

span {
    font-size: 18px;
    color: #000;

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
