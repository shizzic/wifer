<template>
	<div class="block">
		<Input :lang="lang" :data="data" :create="create" />
        <Select :lang="lang" :data="data" :active="data.active" :create="create" />
	</div>
</template>

<script scoped>
import Input from "@/components/Search/Sidebar/Templates/Input.vue"
import Select from "@/components/Search/Sidebar/Templates/Select.vue"
export default {
	name: "Main",
	props: ["lang", "data", "create"],
	components: {
		Input,
		Select
	}
}
</script>

<style scoped>
.block {
	background-color: #fff;
	word-break: break-all;

	padding: 15px;
}
</style>
