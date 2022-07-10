<template>
    <div style="width: 100%;">
        <h3>{{ title }}</h3>
        <textarea class="scroll" v-model="value" :placeholder="holder" maxlength="1500" @input="$emit('value', $event.target.value)" />
        <div class="count">
            <span>{{ value.length }}</span>
            <span> / 1500</span>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "About",
	props: ["title", "holder", "value"],
    emits: ["value"]
    // methods: {
    //     @keydown="autosize"
    //     autosize(e) {
    //         var el = e.target
    //         setTimeout(function() {
    //             el.style.cssText = "height:auto"
    //             el.style.cssText = "height:" + el.scrollHeight + "px"
    //         }, 0)
    //     }
    // }
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
    height: 150px;
    min-height: 150px;

    padding: 12px 20px;

    overflow-y: auto;
}

.count {
    font-weight: 700;
    color: #4d4d4d;
    margin-bottom: 30px;

    float: right;
}
</style>
