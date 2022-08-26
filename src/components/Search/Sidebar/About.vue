<template>
    <div class="block">
        <div class="box">
			<label for="is">
				<div class="checkbox" :class="{ checked : is }" />
				<input id="is" type="checkbox" v-model="data.data[data.active].about.is">
				{{ lang.is }}
                <span v-show="!is" class="question">?</span>
			</label>
		</div>

        <div class="box">
			<label for="full">
				<div class="checkbox" :class="{ checked : full }" />
				<input id="full" type="checkbox" v-model="data.data[data.active].about.full">
				{{ lang.full }}
                <span v-show="!full" class="question">?</span>
			</label>
		</div>

        <textarea v-model="data.data[data.active].about.value" :placeholder="lang.hold" maxlength="1500" @input="autosize($event)" />
        <div class="count">
            <span>{{ data.data[data.active].about.value.length }}</span>
            <span> / 1500</span>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "About",
	props: ["lang", "data", "full", "is", "templates"],
    methods: {
        autosize(e) {
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
    background-color: #fff;
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
    max-height: 375px;

    padding: 12px 20px;

    overflow-x: hidden;
    overflow-y: auto;
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

.question {
    display: inline-block;
    padding-left: 3px;
}
</style>
