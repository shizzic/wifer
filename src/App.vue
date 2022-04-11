<template>
	<div />
</template>

<script>
import { test } from "@/store/test"
export default {
	name: 'App',
	components: {
		
	},
	data() {
		return {
		}
	},
	setup() {
		const store = test();

		return {
			store
		}
	},
	mounted() {
		this.store.test();
	},
	methods: {
	}
}
</script>

<style>
</style>
