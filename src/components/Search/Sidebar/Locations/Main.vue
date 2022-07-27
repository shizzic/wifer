<template>
	<div class="block">
		<Locations v-if="Object.keys(data.data[data.active].countries).length > 0 || Object.keys(data.data[data.active].cities).length > 0" 
			:countries="data.data[data.active].countries" :cities="data.data[data.active].cities"
			@country="delete data.data[data.active].cities[$event]; delete data.data[data.active].countries[$event];" @city="delete data.data[data.active].cities[$event.country][$event.city]" 
		/>
		<Country :title="lang.country" :has="data.data[data.active].countries" @value="getCountry($event)" />
		<City v-if="country" :title="lang.city" :country="country" :has="data.data[data.active].cities[country]" @value="getCity($event)" />
	</div>
</template>

<script scoped>
import Locations from "@/components/Search/Sidebar/Locations/Locations.vue"
import Country from "@/components/Search/Sidebar/Locations/Country.vue"
import City from "@/components/Search/Sidebar/Locations/City.vue"
export default {
	name: "Main",
	props: ["lang", "data"],
	components: {
		Locations,
		Country,
		City
	},
	data() {
		return {
			country: null
		}
	},
	methods: {
		getCity(data) {
			this.data.data[this.data.active].countries[this.country] = this.$country.country[this.country]

			if (!this.data.data[this.data.active].cities[data.country])
				this.data.data[this.data.active].cities[data.country] = {}

			this.data.data[this.data.active].cities[data.country][data.id] = data.title
		},

		getCountry(data) {
			this.data.data[this.data.active].countries[data.id] = data.title
			this.country            	 						= data.id
		}
	}
}
</script>

<style scoped>
.block {
	background-color: #fff;
	word-break: break-all;

    width: 100%;
	padding: 15px;
}
</style>
