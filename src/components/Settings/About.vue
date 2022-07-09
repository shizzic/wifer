<template>
	<h3>About me</h3>
	<textarea @keydown="autosize">

    </textarea>
</template>

<script scoped>
export default {
	name: "About",
	props: ["title"],
	data() {
		return {
			value: null
		}
	},
    methods: {
        autosize(e) {
            var el = e.target
            setTimeout(function() {
                el.style.cssText = "height:auto"
                el.style.cssText = "height:" + el.scrollHeight + "px"
            }, 0)
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

textarea {
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 20px;
    resize: none;

    width: 100%;

    padding: 12px 20px;
    margin-bottom: 30px;

    overflow: hidden;
}
</style>
