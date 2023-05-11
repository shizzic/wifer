<template>
    <div class="wrap">
        <div v-for="(elem, index) in text" :key="index" class="row">
            <img :src="'/images/' + index + '.webp'">
            <span v-if="elem === 0">-</span>
            <template v-else>
                <span v-if="elem < 3">{{ lang[elem] }}</span>
                <span v-else>{{ elem }}</span>
            </template>
        </div>

        <div v-for="(_, place_index) in place" :key="place" class="row">
            <img :src="'/images/' + place_index + '.webp'">
            <span v-show="place_index === 'country'">{{ $country.country[place.country] ? $country.country[place.country] : "-" }}</span>
            <span v-show="place_index === 'city'">
                {{ $city.city[place.country] && $city.city[place.country][place.city] ? $city.city[place.country][place.city] : "-" }}
            </span>
        </div>

        <div v-for="(time, index) in time" :key="index" class="row">
            <img :src="'/images/' + index + '.webp'">
            <span>{{ getDate(time) }}</span>
        </div>
    </div>
</template>

<script scoped>
export default {
    name: "Icons",
    props: ["time", "text", "place", "lang"],
    beforeMount() {
        this.getPlace("country", this.place.country)
        this.getPlace("city", this.place.city)
    },
    methods: {
        getPlace(place, place_id) {
            if (place === "city") {
                if (!(this.place.country in this.$city.city) || this.$city.city[this.place.country] && !(place_id in this.$city.city[this.place.country]))
                    this.fetchPlace(place)
            } else {
                if (!(place_id in this.$country.country))
                    this.fetchPlace(place)
            }
        },
        getDate(time) {
            var date = new Date(time * 1000)
            var hours = date.getHours()
            var minutes = "0" + date.getMinutes()
            var seconds = "0" + date.getSeconds()
            var formattedTime = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
            return formattedTime
        },
        fetchPlace(place) {
            fetch(this.$domain + place + "?country_id=" + this.place.country, {
                method: "GET",
                credentials: "include"
            })
                .then(data => { return data.json() })
                .then(data => {
                    let obj = {}

                    for (let index in data)
                        obj[data[index]._id] = data[index].title

                    if (place === "city") {
                        if (this.place.city)
                            return this.$city.set({ "data": obj, "country_id": this.place.country })
                    } else
                        return this.$country.set(obj)
                })
        }
    }
}
</script>

<style scoped>
.wrap {
    display: flex;
    flex-wrap: wrap;
}

.row {
    width: 50%;

    display: flex;
    align-items: center;

    margin-top: 10px;
}

img {
    width: 20px;
    margin-right: 10px;
}

span {
    font-size: 18px;
    color: #4d4d4d;
}

@media screen and (max-width: 800px) {
    .wrap {
        flex-direction: column;
    }

    .row {
        width: 100%;
        align-items: center;
    }
}
</style>
