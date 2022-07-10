<template>
	<h3>{{ title }}</h3>
    <div class="wrapper">
        <Toggle v-model="mode" @change="get" :classes="{
            container: 'inline-block rounded-full outline-none focus:ring focus:ring-green-500 focus:ring-opacity-30'
        }">
            <template v-slot:label="{}">
                <img v-show="mode" src="/man.webp" style="padding-left: 5px;" />
                <img v-show="!mode" src="/woman.webp" style="padding-right: 5px;" />
            </template>
        </Toggle>
    </div>
</template>

<script scoped>
import Toggle from "@vueform/toggle"
import "@vueform/toggle/themes/default.css"
export default {
	name: "Sex",
	props: ["title", "value"],
    emits: ["value"],
    components: {
        Toggle
    },
    data() {
		return {
			mode: true
		};
	},
    mounted() {
        if (this.value === 0)
            this.$emit("value", 1)
    },
    methods: {
        get(bool) {
            let value

            if (bool === true)
                value = 1
            else
                value = 2
            
            this.$emit("value", value)
        }
    }
}
</script>

<style scoped>
h3 {
	color: #4d4d4d;
	font-size: 20px;

	margin-bottom: 10px;
}

.wrapper {
    width: 100%;
    margin-bottom: 30px;
}

.some {
    color: green;
    display: inline-block;
    padding: 20px;
}

img {
    width: 20px;
    filter: invert(100%) sepia(23%) saturate(0%) hue-rotate(243deg) brightness(102%) contrast(101%);
}
</style>

<style>
:root {
  --toggle-bg-on: #5c9cd8;
  --toggle-bg-off: #5c9cd8;
  --toggle-border-on: #5c9cd8;
  --toggle-border-off: #5c9cd8;
}
</style>