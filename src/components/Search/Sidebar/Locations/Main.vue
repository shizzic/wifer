<template>
	<div class="block">
		<Locations v-if="Object.keys(data.countries).length > 0 || Object.keys(data.cities).length > 0" 
			:countries="data.countries" :cities="data.cities"
			@country="delete data.cities[$event]; delete data.countries[$event];" @city="delete data.cities[$event.country][$event.city]" 
		/>
		<Country :title="lang.country" :has="data.countries" @value="getCountry($event)" />
		<City v-if="country" :title="lang.city" :country="country" :has="data.cities[country]" @value="getCity($event)" />
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
			this.data.countries[this.country] = this.$country.country[this.country]

			if (!this.data.cities[data.country])
				this.data.cities[data.country] = {}

			this.data.cities[data.country][data.id] = data.title
		},

		getCountry(data) {
			this.data.countries[data.id] = data.title
			this.country            = data.id
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
