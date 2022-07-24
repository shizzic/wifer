<template>
    <div class="block">
        <h3>{{ title }}</h3>
        <Slider v-model="data.data[data.active][index]" v-bind="options" />
    </div>
</template>

<script scoped>
import Slider from "@vueform/slider"
import "@vueform/slider/themes/default.css"
export default {
	name: "SliderBoard",
	props: ["title", "data", "options", "index"],
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

	padding: 15px 25px;
    margin-bottom: 10px;
}

h3 {
	color: #4d4d4d;
	font-size: 20px;

	margin-bottom: 50px;
}
</style>

<style>
/* :root {
  --slider-connect-bg: #5c9cd8;
  --slider-tooltip-bg: #5c9cd8;
} */
</style>