<template>
    <div class="block">
        <div class="box">
			<label for="avatarHas">
				<div class="checkbox" :class="{ checked : avatar }" />
				<input id="avatarHas" type="checkbox" v-model="data.data[data.active].avatar">
				{{ lang }}
                <span v-show="!avatar" class="question">?</span>
			</label>
		</div>

        <h3>{{ title }}</h3>
        <Slider v-model="data.data[data.active].images" v-bind="{ min: 0, max: 20 }" />
    </div>
</template>

<script scoped>
import Slider from "@vueform/slider"
import "@vueform/slider/themes/default.css"
export default {
	name: "Images",
	props: ["title", "data", "avatar", "lang"],
    components: {
        Slider
    }
}
</script>

<style scoped>
.block {
	background-color: #fff;
	word-break: break-all;

    width: 100%;

	padding: 15px 20px;
}

h3 {
	color: #4d4d4d;
	font-size: 20px;

	margin-bottom: 50px;
}

.box {
    display: flex;
    align-items: center;
    user-select: none;

	padding: 0;
	margin: 0;

    margin-bottom: 10px;
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

.question {
    display: inline-block;
    padding-left: 3px;
}
</style>

<style>
/* :root {
  --slider-connect-bg: #5c9cd8;
  --slider-tooltip-bg: #5c9cd8;
} */
</style>