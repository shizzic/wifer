<template>
	<div class="block">
		<Locations v-if="Object.keys(countries).length > 0 || Object.keys(cities).length > 0" 
			:countries="countries" :cities="cities"
			@country="delete cities[$event]; delete countries[$event];" @city="delete cities[$event.country][$event.city]" 
		/>
		<Country :title="lang.country" :has="countries" @value="getCountry($event)" />
		<City v-if="country" :title="lang.city" :country="country" :has="cities[country]" @value="getCity($event)" />
	</div>
</template>

<script scoped>
import Locations from "@/components/Search/Sidebar/Locations/Locations.vue"
import Country from "@/components/Search/Sidebar/Locations/Country.vue"
import City from "@/components/Search/Sidebar/Locations/City.vue"
export default {
	name: "Main",
	props: ["lang"],
	components: {
		Locations,
		Country,
		City
	},
	data() {
		return {
			countries: {},
			cities: {},
			country: null
		}
	},
	methods: {
		getCity(data) {
			if (!this.cities[data.country])
				this.cities[data.country] = {}

			this.cities[data.country][data.id] = data.title
		},

		getCountry(data) {
			this.countries[data.id] = data.title
			this.country            = data.id
		}
	}
}
</script>

<style scoped>
.block {
	background-color: #fff;
	word-break: break-all;

    width: 25%;
	min-width: 300px;
	padding: 15px;
}
</style>
