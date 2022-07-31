<template>
	<div v-if="init" class="pagination">
		<span class="page">1</span>
		<span v-for="(num, index) in max" :key="index" class="page">{{ num }}</span>
		<span v-if="max !== 1" class="page">{{ max }}</span>
	</div>
</template>

<script scoped>
export default {
	name: "Pagination",
	props: ["users", "count"],
	data() {
		return {
			max: 1,
			all: 1,
			limit: 2,

			init: null
		}
	},
	beforeMount() {
		if (this.count !== 0)
			this.all = this.count

		this.max  = Math.ceil(this.all / this.limit)
		this.init = true
	}
}
</script>

<style scoped>
.pagination {
    width: 100%;
    height: 20px;
	border-top: 1.5px solid #bcbcbc;

	display: flex;
	justify-content: center;
	align-items: center;

	padding: 30px 0;
}

.page {
	cursor: pointer;
	font-size: 18px;
	border-radius: 3px;
	border: 1px solid transparent;

	display: flex;
	justify-content: center;
	align-items: center;

	padding: 3px 10px;
}

.page:hover {
	border-color: #000;
}

.page:not(:last-of-type) {
	margin-right: 10px;
}
</style>
