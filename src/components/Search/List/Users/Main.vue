<template>
	<div id="users">
		<Flex v-if="mode" :users="users" :photos="photos" />
        <Line v-if="!mode" :users="users" :photos="photos" :titles="titles" :values="values" />
	</div>
</template>

<script scoped>
import Flex from "@/components/Search/List/Users/Flex/Main.vue"
import Line from "@/components/Search/List/Users/Line/Main.vue"
export default {
	name: "Users",
	props: ["users", "mode", "photos", "titles", "values"],
    components: {
        Flex,
        Line
    }
}
</script>

<style scoped>
#users {
    width: 100%;
    padding: 10px;
    padding-bottom: 0;
}
</style>
