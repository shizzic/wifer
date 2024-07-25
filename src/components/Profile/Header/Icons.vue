<template>
    <div class="wrap">
        <div v-for="(elem, key) in text" :key="key" class="row">
            <img :src="'/images/' + key + '.webp'">
            <span v-if="elem === 0" :data-title="titles[key]">-</span>
            <template v-else>
                <span v-if="elem < 3" :data-title="titles[key]">{{ lang[elem] }}</span>
                <span v-else :data-title="titles[key]">{{ elem }}</span>
            </template>
        </div>

        <div v-for="(_, key) in place" :key="place" class="row">
            <img :src="'/images/' + key + '.webp'">
            <span v-show="key === 'country'" :data-title="titles[key]">{{ $country.list[place.country] ? $country.list[place.country] : "-" }}</span>
            <span v-show="key === 'city'" :data-title="titles[key]">
                {{ $city.list[place.country] && $city.list[place.country][place.city] ? $city.list[place.country][place.city] : "-" }}
            </span>
        </div>

        <div v-for="(time, key) in time" :key="key" class="row">
            <img :src="'/images/' + key + '.webp'">
            <span :data-title="titles[key]">{{ $date(time) }}</span>
        </div>
    </div>
</template>

<script scoped>
export default {
    name: "Icons",
    props: ["time", "text", "place", "lang", 'titles'],
    inject: ['l'],
    beforeMount() {
        this.$country.get(this.$domain, this.l)
        this.$city.get(this.$domain, this.place.country, this.l)
    },
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
    position: relative;

    font-size: 18px;
    color: #4d4d4d;
}

.row:hover [data-title]::after {
  content: attr(data-title);
  font-size: 15px;
  z-index: 100;
  background-color: rgb(199, 199, 199);
  border-radius: 2px;
  word-break: normal;

  position: absolute;

  padding: 1px 6px;
  margin-left: 20px;
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
