<template>
	<div v-if="fetched" class="body">
		<h3>{{ title }}</h3>
		<div class="wrapper" v-click-outside="() => { mode = null }">
            <input type="text" class="result" v-model="value" @input="input($event.target.value)" @click="mode = true" />

			<transition name="slide-fade">
				<div v-if="mode">
					<div class="mini" />

					<ul class="ul scroll">
						<template v-for="(elem, index) in list" :key="index">
							<li v-if="(!reg || reg && elem.match(reg)) && (!has || !(index in has))" 
                                @click="set(+index, elem)"
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
	props: ["title", "country", "has"],
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
			if (this.$city.city[n]) {
				this.reg     = null
				this.list    = Object.assign({}, this.$city.city[n])
				this.value   = null
				this.fetched = true
			} else
				this.returnCity()
        }
    },
    beforeMount() {
        if (this.$city.city[this.country] && Object.keys(this.$city.city[this.country]).length > 0) {
            this.list 	 = Object.assign({}, this.$city.city[this.country])
            this.fetched = true
        } else
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
					if (data) {
						this.reg = null
						let obj = {}

						for (let index in data)
							obj[data[index]._id] = data[index].title

						this.$city.set({ "data" : obj, "country_id": this.country })
						this.list = Object.assign({}, this.$city.city[this.country])
						this.fetched = true
					}
				})
        },

		set(index, elem) {
			this.$emit('value', { id : index, title : elem, country : this.country })
			this.value = ''
			this.reg   = null
		},

        input(value) {
            this.reg  = new RegExp(value, 'giy')
			this.mode = true
        }
	}
}
</script>

<style scoped>
.body {
	z-index: 2;
	position: relative;
	width: 100%;
	max-width: 225px;

	margin-top: 15px;
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
    color: #000;
	font-size: 20px;
	letter-spacing: 1px;
	background: none;

	width: 100%;
	max-width: 400px;
	padding: 10px 15px;
	margin-bottom: 5px;

	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  	-webkit-tap-highlight-color: transparent;

	border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
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
	cursor: pointer;
	font-size: 18px;
	list-style-type: none;
	background-color: #fff;

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
	opacity: 1;
	visibility: visible;
}
</style>
