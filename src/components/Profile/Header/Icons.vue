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
            <span v-show="place_index === 'country'">{{ $country.list[place.country] ? $country.list[place.country] : "-" }}</span>
            <span v-show="place_index === 'city'">
                {{ $city.list[place.country] && $city.list[place.country][place.city] ? $city.list[place.country][place.city] : "-" }}
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
    inject: ['l'],
    beforeMount() {
        this.$country.get(this.$domain, this.l)
        this.$city.get(this.$domain, this.place.country, this.l)
    },
    methods: {
        getDate(time) {
            let date = new Date(time * 1000)
            let hours = date.getHours()
            let minutes = "0" + date.getMinutes()
            let seconds = "0" + date.getSeconds()
            let formattedTime = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
            return formattedTime
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
