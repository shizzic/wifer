<template>
	<div class="block">
		<Input :lang="lang" :templates="templates" :data="data" />
        <Select v-if="Object.keys(templates.data).length > 0" 
        :lang="lang" :templates="templates" :active="templates.active" @data="$emit('data', $event)" />
	</div>
</template>

<script scoped>
import Input from "@/components/Search/Sidebar/Templates/Input.vue"
import Select from "@/components/Search/Sidebar/Templates/Select.vue"
export default {
	name: "Main",
	props: ["lang", "templates", "data"],
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
