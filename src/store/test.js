import { defineStore } from 'pinia'

export const test = defineStore('id', {
    state: () =>({
        num: 1
    }),
    getters: {

    },
    actions:{
        test() {
            console.log(123);
        }
    }
})