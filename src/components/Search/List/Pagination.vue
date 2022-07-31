<template>
	<div v-if="init && max" class="pagination">
		<span class="page" :class="{ active : page === 1 }" @click="set(1)">1</span>
		<span v-show="inner.length > 0 && inner[0] > 2" class="dots">...</span>
		<span v-for="(num, index) in inner" :key="index" class="page" :class="{ active : page === num }" @click="set(num)">{{ num }}</span>
		<span v-show="inner.length > 0 && max - inner[inner.length - 1] > 1" class="dots">...</span>
		<span v-show="max !== 1" class="page" :class="{ active : page === max }" @click="set(max)">{{ max }}</span>
	</div>
</template>

<script scoped>
export default {
	name: "Pagination",
	// props: ["count"],
	data() {
		return {
			all: 84,
			max: null,

			limit: 10,
			skip: 20,
			page: 1,

			inner: [],
			init: null
		}
	},
	beforeMount() {		
		this.max  = Math.ceil(this.all / this.limit)
		this.prepare(true)
		this.init = true
	},
	methods: {
		set(num) {
			if (num !== this.page) {
				this.page = num
				this.prepare()
			}
		},

		prepare(page = null) {
			if (page)
				this.page  = (this.skip / this.limit) + 1

			let operations = [-2, -1, 0, 1, 2]
			let arr 	   = []

			for (let op of operations) {
				let i = this.page + op

				if (i > 1 && i < this.max)
					arr.push(i)
			}

			this.inner = arr
		}
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

@media (pointer: fine), (pointer: none) {
	/* desktop */

	.page:hover {
		border-color: #000;
	}
}

.page:not(:last-of-type) {
	margin-right: 10px;
}

.active {
	border-color: #000;
}

.dots {
	display: inline-block;
	margin-right: 10px;
}

@media screen and (max-width: 370px) {
	.page {
		margin-right: 5px;
		padding: 3px 7px;
	}

	.dots {
		margin-right: 5px;
	}
}

@media screen and (max-width: 300px) {
	.page {
		margin-right: 2px;
		padding: 3px 5px;
	}

	.dots {
		margin-right: 2px;
	}
}
</style>
