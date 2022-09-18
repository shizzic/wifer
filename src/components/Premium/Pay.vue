<template>
	<div class="square">
        <template v-if="!trial">
            <h2>{{ lang.trial }}</h2>
            <div id="trial">
                <span @click="getTrial">{{ lang.try }}</span>
            </div>
        </template>
        
        <h2>{{ lang.month }}</h2>
        <div id="pay">
            <span v-show="premium === 0">{{ lang.not }}</span>
            <span v-show="premium > 0">{{ lang.extend }}</span>
        </div>

        <template v-if="premium > 0">
            <h2 style="margin-top: 15px;">{{ lang.expires }}</h2>

            <div class="time">
                <span class="digit">{{timer.days}}</span>:<span class="digit">{{timer.hours}}</span>:<span class="digit">{{timer.minutes}}</span>:<span class="digit">{{timer.seconds}}</span>
            </div>
        </template>
    </div>
</template>

<script scoped>
import { useTimer } from 'vue-timer-hook'
export default {
	name: "Pay",
    props: ["lang", "response"],
    computed: {
        trial() {
            return this.$user.trial
        },
        premium() {
            return this.$user.premium
        }
    },
    data() {
        return {
            timer: null
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

#pay span, #trial span {
    cursor: pointer;
    font-size: 18px;
    background-color: #ffc107;
    color: #212529;
    border-radius: 6px;

    display: inline-block;
    padding: 8px 15px;

    transition: background-color .1s linear;
}

#pay span:hover, #trial span:hover {
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
