<template>
	<div class="square">
        <template v-if="!trial">
            <h2>{{ lang.trial }}</h2>
            <div id="trial">
                <span v-if="id != null" @click="getTrial" class="try">{{ lang.try }}</span>
                <router-link v-else :to="{ name: 'signin' }" class="try">{{ lang.try }}</router-link>
            </div>
        </template>
        
        <h2>{{ lang.month }}</h2>
        <div id="pay">
            <span id="dollar">{{ price }}$</span>
            <PayPal v-if="id != null && priceSelected" :response="response" :price="price" />
            <!-- <span v-show="premium === 0">{{ lang.not }}</span>
            <span v-show="premium > 0">{{ lang.extend }}</span> -->
        </div>

        <template v-if="premium > 0">
            <h2>{{ lang.expires }}</h2>

            <div class="time">
                <span class="digit">{{timer.days}}</span>:<span class="digit">{{timer.hours}}</span>:<span class="digit">{{timer.minutes}}</span>:<span class="digit">{{timer.seconds}}</span>
            </div>
        </template>
    </div>
</template>

<script scoped>
import { useTimer } from 'vue-timer-hook'
import PayPal from "@/components/Premium/PayPal.vue"
export default {
	name: "Pay",
    props: ["lang", "response"],
    components: {
        PayPal
    },
    computed: {
        trial() {
            return this.$user.trial
        },
        premium() {
            return this.$user.premium
        },
        id() {
            return this.$user.id
        },
        price() {
            return this.$country.price
        },
        priceSelected() {
            return this.$country.priceSelected
        }
    },
    data() {
        return {
            timer: null
        }
    },
    watch: {
        premium(n) {
            if (n > 0)
                this.setTimer()
        }
    },
    beforeMount() {
        this.setTimer()
    },
    methods: {
        getTrial() {
            fetch(this.$domain + "trial", {
                method: "PUT",
                credentials: "include"
            })
                .then(data => {
                    if (data.status === 401) {
                        this.$user.logout(this.$domain)
                        this.$router.push({ name: "search" })
                    } else
                        return data.json()
                })
                .then(data => {
                    if (data.err)
                        this.$toast.error(this.response.trial)
                    else {
                        this.$toast.success(this.response.trialSuccess)
                        this.$user.trial   = true
                        this.$user.premium = data.premium
                        this.setTimer()
                    }
                })
        },

        setTimer() {
            if (this.premium > 0) {
                let date = new Date(this.premium * 1000)
                const time = new Date()
                let dif = Math.abs(Math.round((date.getTime() - time.getTime()) / 1000))
                time.setSeconds(time.getSeconds() + dif)
                this.timer = useTimer(time)
            }
        }
    }
}
</script>

<style scoped>
#pay, #trial {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.try {
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    background-color: #ffc107;
    color: #212529;
    border-radius: 6px;

    display: inline-block;
    padding: 6px 20px;

    transition: background-color .1s linear;
}

.try:hover, .try:hover {
    background-color: #e0a800;
}

#trial {
    margin-bottom: 15px;
}

h2 {
    font-size: 28px;
    text-align: center;

    margin-bottom: 10px;
}

#pay {
    display: flex;
    flex-direction: column;
}

#dollar {
    color: rgb(225, 51, 51);
    font-size: 22px;
    font-weight: 700;

    margin-bottom: 15px;
}

.time {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.digit {
    font-size: 20px;
    background-color: #404549;
    border-radius: 5px;
    color: #fff;

    display: flex;
    padding: 8px 12px;
    margin: 0 5px;
}
</style>
