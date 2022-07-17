<template>
    <div class="block">
        <div class="box">
			<label for="about">
				<div class="checkbox" :class="{ checked : full }" />
				<input id="about" type="checkbox" v-model="data.about.full">
				{{ lang.full }}
			</label>
		</div>

        <textarea v-model="data.about.value" :placeholder="lang.hold" maxlength="1500" @input="autosize($event)" />
        <div class="count">
            <span>{{ data.about.value.length }}</span>
            <span> / 1500</span>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "About",
	props: ["lang", "data", "full"],
    emits: ["value"],
    methods: {
        autosize(e) {
            this.$emit('value', e.target.value)

            let el = e.target
            setTimeout(function() {
                el.style.height = "5px"
                el.style.height = (el.scrollHeight) + "px"
            }, 0)
        }
    }
}
</script>

<style scoped>
.block {
    width: 100%;
    padding: 10px 20px;
}

textarea {
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 20px;
    resize: none;
    
    width: 100%;
    min-height: 150px;

    padding: 12px 20px;

    overflow: hidden;
}

.count {
    font-weight: 700;
    color: #4d4d4d;
    margin-bottom: 10px;

    display: flex;
    justify-content: flex-end;
}

.box {
    display: flex;
    align-items: center;
    user-select: none;

    margin-bottom: 20px;
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
	
	padding: 10px 20px 10px 5px;
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
