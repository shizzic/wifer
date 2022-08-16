<template>
	<div class="block">
		<span class="username">
            <div v-if="user.online" class="ring-container"><div class="circle green-back" /></div>
            <span>{{ user.username }}</span>
            <img v-if="user.premium > 0" src="/premium.webp" class="premium" />
        </span>

        <span class="place">{{ user.age }}<span class="dot" />
            {{ (country === 0) ? "" : country }}{{ (city === 0) ? "" : " , " + city }}
        </span>
        <span class="title">{{ user.title }}</span>
        
        <div class="flex">
            <span class="images">{{ (user.avatar) ? user.public + user.private + 1 : user.public + user.private }} {{ photos }}</span>
        </div>
	</div>
</template>

<script scoped>
export default {
	name: "Info",
	props: ["user", "photos"],
    data() {
		return {
			country: null,
            city:    null
		}
	},
    beforeMount() {
        if (this.user.country_id !== 0)
            this.getPlace("country", this.user.country_id)
        else
            this.country = 0

        if (this.user.city_id !== 0)
            this.getPlace("city", this.user.city_id)
        else
            this.city = 0
    },
    methods: {
        getPlace(place, index) {
            if (place === "city")
                if (this.user.country_id in this.$city.city && index in this.$city.city[this.user.country_id])
                    this.city = this.$city.city[this.user.country_id][index]
                else
                    this.returnPlace(place)
            else
                if (index in this.$country.country)
                    this.country = this.$country.country[index]
                else
                    this.returnPlace(place)
        },
        returnPlace(place) {
            fetch(this.$domain + place + "?country_id=" + this.user.country_id, {
				method: "GET",
				credentials: "include"
			})
				.then(data => { return data.json() })
				.then(data => {
                    let obj = {}

                    for (let index in data)
                        obj[data[index]._id] = data[index].title

                    if (place === "city") {
                        this.$city.set({ "data" : obj, "country_id": this.user.country_id })
                        this.city = this.$city.city[this.user.country_id][this.user.city_id]
                    } else {
                        this.$country.set(obj)
                        this.country = this.$country.country[this.user.country_id]
                    }
				})
        }
    }
}
</script>

<style scoped>
.block {
    position: relative;
    width: 100%;
    min-width: 200px;

    display: flex;
    flex-direction: column;
    padding: 0 15px;
}

.username {
    color: #4d4d4d;
    letter-spacing: 1.5px;
    font-weight: 700;
    font-size: 18px;

    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.place {
    color: #757575;

    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.dot {
    border-radius: 50%;
    background-color: #5C5C5C;

    display: inline-block;
    padding: 2px;
    margin: 0 5px;
}

.title {
    max-width: 200px;

    color: #4d4d4d;
    letter-spacing: 0.5px;
    font-size: 18px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    display: block;
    margin-bottom: 10px;
}

.flex {
    display: flex;
    align-items: center;

    margin-bottom: 10px;
}

.images {
    color: #4d4d4d;
    display: inline-block;
    text-decoration: underline;
}

img {
    width: 24px;
}

.ring-container {
    position: relative;
    margin-right: 10px;
}

.circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.green-back {
    background-color: #62bd19;
}

.premium {
    width: 20px;
    object-fit: cover;

    margin-left: 5px;
}
</style>
