import { defineStore } from 'pinia'

export const test = defineStore('test', {
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