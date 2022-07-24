<template>
	<div class="block">
		<Input :lang="lang" :data="data" />
        <Select v-if="Object.keys(data.data).length > 0" 
			:lang="lang" :data="data" :active="data.active"
		/>
	</div>
</template>

<script scoped>
import Input from "@/components/Search/Sidebar/Templates/Input.vue"
import Select from "@/components/Search/Sidebar/Templates/Select.vue"
export default {
	name: "Main",
	props: ["lang", "data"],
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
