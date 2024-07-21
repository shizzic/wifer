<template>
	<h3>{{ title }}</h3>
    <div class="wrapper">
        <Slider :modelValue="value" @update:modelValue="value = $event" v-bind="options" @change="get" />
    </div>
</template>

<script scoped>
import Slider from "@vueform/slider"
import "@vueform/slider/themes/default.css"
export default {
	name: "Height",
	props: ["title", "value"],
    emits: ["value"],
    components: {
        Slider
    },
	data() {
		return {
            options: {
                min: 140,
                max: 220
            }
		}
	},
    mounted() {
        if (this.value === 0)
            this.$emit("value", 140)
    },
    methods: {
        get(value) {
            this.$emit("value", value)
        }
    }
}
</script>

<style scoped>
h3 {
	color: #4d4d4d;
	font-size: 20px;

	margin-bottom: 50px;
}

.wrapper {
    width: 100%;
    
    margin: 0 auto;
    margin-bottom: 30px;
}
</style>

<style>
/* :root {
  --slider-connect-bg: #5c9cd8;
  --slider-tooltip-bg: #5c9cd8;
} */
</style>