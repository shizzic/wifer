<template>
	<div v-if="country > 0 && fetched" class="body">
		<h3>{{ title }}</h3>
		<div class="wrapper" v-click-outside="() => { mode = null }">
            <input type="text" class="result" v-model="value" @input="input($event.target.value)" @click="show" />
			<div class="arrow" :class="{ closed: !mode, opened: mode }" @click="show" />

			<transition name="slide-fade">
				<div v-if="mode">
					<div class="mini" />

					<ul class="ul scroll">
						<template v-for="(elem, index) in list" :key="index">
							<li v-if="(!reg || reg && elem.match(reg)) && index != id" 
                                @click="$emit('value', +index); value = elem; reg = null; mode = null;"
                            >
                                {{ elem }}
                            </li>
						</template>
					</ul>
				</div>
			</transition>
		</div>
	</div>
</template>

<script scoped>
export default {
	name: "City",
	props: ["title", "id", "country"],
	emits: ["value"],
	data() {
		return {
			mode: null,

            value: null,
            list: null,

            fetched: null,
            reg: null,
		}
	},
    watch: {
        country(n) {
            if (n > 0)
                if (this.$city.city[n]) {
                    this.reg     = null
                    this.list    = Object.assign({}, this.$city.city[n])
                    this.value   = null
                    this.fetched = true
                } else
                    this.returnCity()
            else {
                this.fetched = null
                this.reg     = null
            }
        }
    },
    beforeMount() {
        if (this.country > 0 && this.$city.city[this.country]) {
            this.list = Object.assign({}, this.$city.city[this.country])

            if (this.$city.city[this.country][this.id])
                this.value = this.list[this.id]
            
            this.fetched = true
        } else
            if (this.country > 0)
                this.returnCity()
    },
	methods: {
        returnCity() {
            this.value = null
            
            fetch(this.$domain + "city?country_id=" + this.country, {
				method: "GET",
				credentials: "include"
			})
				.then(data => { return data.json() })
				.then(data => {
                    this.reg = null
                    let obj = {}

                    for (let index in data)
                        obj[data[index]._id] = data[index].title

                    this.$city.set({ "data" : obj, "country_id": this.country })
                    this.list = Object.assign({}, this.$city.city[this.country])

                    if (this.list[this.id])
                        this.value   = this.list[this.id]
                    
                    this.fetched = true
				})
        },

        input(value) {
            this.reg = new RegExp(value, 'giy')
            this.$emit("value", 0)
        },

		show() {
			if (this.mode)
				this.mode = null
			else
				this.mode = true
		}
	}
}
</script>

<style scoped>
.body {
	z-index: 11;
	position: relative;
	width: 45%;
	min-width: 175px;
	max-width: 225px;

	margin-bottom: 30px;
}

h3 {
	color: #4d4d4d;
	font-size: 20px;

	margin-bottom: 10px;
}

.wrapper {
    position: relative;
}

.result {
    width: 100%;
	cursor: pointer;
	font-size: 20px;
	color: #fff;
	background-color: #5c9cd8;
	border-radius: 4px;

	padding: 11px 22px;
	padding-right: 45px;
}

.arrow {
	cursor: pointer;
    display: block;

    width: 10px;
    height: 10px;

	position: absolute;
    top: 50%;
    right: 25px;

    margin-top: -3px;

    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    transition: all .3s ease-in-out;
    transform-origin: 50% 0;
}

.closed {
	transform: rotate(45deg) translateY(-50%);
}

.opened {
	top: calc(50% + 5px);
	transform: rotate(-135deg) translateY(-50%);
}

.ul {
	background-color: #fff;
}

ul {
	width: 100%;
	max-height: 300px;
	background-color: #fff;
	border: 1px solid #b5b5b5;
	border-radius: 4px;

	position: absolute;
	left: 0;

	margin-top: 15px;
	overflow-y: auto;
}

li {
	font-weight: 400;
	cursor: pointer;
	font-size: 18px;
	color: #949494;
	list-style-type: none;
	background-color: #fff;
	word-break: break-all;

	padding: 10px 20px;
}

li:hover {
	background-color: #f9f9f9;
}

li:not(:last-child) {
	border-bottom: 1px solid #b5b5b5;
}

.mini {
	z-index: 2;

	width: 7px;
    height: 7px;
	border-top: 1px solid #b5b5b5;
    border-left: 1px solid #b5b5b5;
    background-color: #fff;

	display: block;
	margin-bottom: -4px;

	position: absolute;
    bottom: -14px;
    right: 25px;
    
    transform: rotate(45deg);
    transition: all .4s ease-in-out;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
}

.slide-fade-leave-to, .slide-fade-enter-from {
    transform: translateX(10px);
}

input {
    border: none;
    outline: none;
}
</style>
