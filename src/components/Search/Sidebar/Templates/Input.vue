<template>
	<div style="margin-bottom: 20px;">
        <h3>{{ lang.input }}</h3>
		<div class="wrapper">
			<input name="template" maxlength="150" :placeholder="lang.hold" v-model="value" @keyup.enter="create" />
			<div class="btn" @click="create">&#10004;</div>
		</div>
		<div class="count">
			<span>{{ value.length }}</span>
			<span> / 150</span>
		</div>
	</div>
</template>

<script scoped>
export default {
	name: "Input",
	props: ["lang", "templates", "data"],
    data() {
		return {
			value: ""
		}
	},
	methods: {
		create() {
			if (this.value !== "") {
				this.templates.active = this.value
				this.templates.data[this.value] = this.data
				this.value = ""

				let form = new FormData()
				form.append("text", JSON.stringify(this.templates))

				if (Object.keys(this.templates.data).length < 10)
					fetch(this.$domain + "templates", {
						method: "POST",
						credentials: 'include',
						body: form
					})
				else
					this.$toast.error(this.lang.count)
			} else
				this.$toast.error(this.lang.blank)
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

input {
	color: #000;
	font-size: 20px;
	letter-spacing: 1px;
	outline: none;
	border: none;
	background: none;

	width: 100%;
	max-width: 400px;
	padding: 10px 15px;
	margin-bottom: 5px;
	margin-right: 10px;

	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  	-webkit-tap-highlight-color: transparent;

	border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
}

input:focus {
	border-color: #000;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active
{
	transition: background-color 5000s ease-in-out 0s;
}

.count {
    font-weight: 700;
    color: #4d4d4d;

    float: right;
}

.wrapper {
	display: flex;
	align-items: center;
}

.btn {
	background: #8d6e63;
	font-size: 20px;
	color: white;
	border-radius: 7px;
	box-shadow: 0 7px 0px #6d4c41;
	display: inline-block;
	transition: all .2s;
	position: relative;
	padding: 8px 20px;
	position: relative;
	top: -6px;
	cursor: pointer;
}

 .btn:active {
	top: 3px;
	box-shadow: 0 2px 0px #6d4c41;
	transition: all .2s;
}
</style>