import { defineStore } from "pinia"

export const navJS = defineStore("nav", {
    state: () =>({
        
    }),
    getters: {
        list: function(){
            return {
                "some": "some",
                "EN": "ok"
            }
        },
    }
})