<template>
	<div class="block">
		<div v-for="(text, index) in lang" class="box" :key="index">
			<label :for="title + '_' + index">
				<div class="checkbox" :class="{ checked : data[title].includes(+index) }" />
				<input :id="title + '_' + index" type="checkbox" :value="+index" v-model="data[title]">
				{{ text }}
			</label>
		</div>
	</div>
</template>

<script scoped>
export default {
	name: "Checkbox",
	props: ["lang", "data", "title"]
}
</script>

<style scoped>
.block {
	background-color: #fff;
	word-break: break-all;

    width: 25%;
	min-width: 300px;
	padding: 10px 20px;
}

.box {
    display: flex;
    align-items: center;
    user-select: none;
}

input {
	opacity: 0;
	visibility: hidden;
}

label {
	width: 100%;
	font-size: 17px;
	color: #4d4d4d;
	cursor: pointer;

	display: flex;
	align-items: center;
	
	padding: 10px 0;
}

.checkbox {
	cursor: pointer;
	border-radius: 50%;
	border: 2px solid #10b981;

	padding: 7px;
	transition: background-color .1s linear;
}

.checked {
	background-color: #10b981;
}
</style>
