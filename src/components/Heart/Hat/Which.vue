<template>
	<div class="hat">
        <div v-for="(elem, index) in what" :key="index" class="elem" :class="{ active : which == index }"
        @click="set(index)">
            <span>{{ elem }}</span>
            <span v-show="quantity(index) > 0" class="i">{{ quantity(index) + 10 }}</span>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Which",
    props: ["what", "which"],
    computed: {
		views() {
			return this.$nav.views
		},
		likes() {
			return this.$nav.likes
		},
		privates() {
			return this.$nav.privates
		},
		chats() {
			return this.$nav.chats
		}
	},
    methods: {
        set(which) {
            if (which != this.which)
                this.$emit("which", +which)
        },

        quantity(field) {
            return this[this.$nav.fields[field]]
        }
    }
}
</script>

<style scoped>
.hat {
    width: 100%;
    border-bottom: 1.5px solid #bcbcbc;

    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    padding-top: 10px;
}

.elem {
    cursor: pointer;
    font-weight: 700;
    color: #5C5C5C;
    background-color: #E3E3E3;
    border-radius: 40px;
    word-break: normal;

    display: flex;
    align-items: center;

    padding: 5px 20px;
    margin-bottom: 10px;

    transition: background-color .1s linear;
}

.elem:hover, .active {
    background-color: #bcbcbc;
}

.elem:not(:last-of-type) {
    margin-right: 10px;
}

.i {
    height: 100%;
    color: #E3E3E3;
    background-color: #5C5C5C;
    border-radius: 2px;

    display: inline-block;
    padding: 0 3px;
    margin-left: 15px;
}
</style>
