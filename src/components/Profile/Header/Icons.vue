<template>
    <div class="wrap">
        <div v-for="(elem, index) in text" :key="index" class="row">
            <img :src="'/' + index + '.webp'">
            <span v-if="elem === 0">-</span>
            <span v-else>{{ elem }}</span>
        </div>

        <div v-for="(elem, place) in place" :key="place" class="row">
            <img :src="'/' + place + '.webp'">
            <span v-if="elem === 0">-</span>
            <span v-else>{{ getPlace(place, elem) }}</span>
        </div>

        <div v-for="(time, index) in time" :key="index" class="row">
            <img :src="'/' + index + '.webp'">
            <span>{{ getDate(time) }}</span>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Icons",
    props: ["time", "text", "place"],
    methods: {
        getPlace(place, index) {
            if (place === "city")
                if (this.place.country in this.$city.city && index in this.$city.city[this.place.country])
                    return this.$city.city[this.place.country][index]
                else
                    this.returnPlace(place)
            else
                if (index in this.$country.country)
                    return this.$country.country[index]
                else
                    this.returnPlace(place)
        },
        getDate(time) {
            var date = new Date(time * 1000)
            var hours = date.getHours()
            var minutes = "0" + date.getMinutes()
            var seconds = "0" + date.getSeconds()
            var formattedTime = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
            return formattedTime
        },
        returnPlace(place) {
            fetch(this.$domain + place + "?country=" + this.place.country, {
				method: "GET",
				credentials: "include"
			})
				.then(data => { return data.json() })
				.then(data => {
                    let obj = {}

                    for (let index in data)
                        obj[data[index]._id] = data[index].title

                    if (place === "city") {
                        this.$city.set({ "data" : obj, "country_id": this.place.country })
                        return this.$city.city[this.place.country][this.place.city]
                    } else {
                        this.$country.set(obj)
                        return this.$country.country[this.place.country]
                    }
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
