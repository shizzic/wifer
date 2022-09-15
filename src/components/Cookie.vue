<template>
	<div id="cookie">
		<span>{{ text[l] }}</span>
        <div id="cookie-btn" @click="$user.set({field: 'cookies', value: true})">ok</div>
	</div>
</template>

<script scoped>
import { CookiesJS } from "@/store/Langs/Cookies"
export default {
	name: "Cookie",
    props: ["l"],
    setup() {
		const text = CookiesJS().text

		return {
			text
		}
	},
}
</script>

<style>
#cookie {
    z-index: 1000;

    color: #2c3249;
    font-size: 19px;
    font-weight: 700;

    width: 100%;
    min-height: 40px;
    background-color: #eadfd8;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 0;
    bottom: 0;

    padding: 5px 20px;
}

#cookie-btn {
    cursor: pointer;
    background-color: #2c3249;
    color: #fff;
    border-radius: 2px;
    font-weight: 400;

    display: flex;
    align-items: center;
    
    padding: 8px 12px;
    margin-left: 20px;
}

@media screen and (max-width: 900px) {
    #cookie {
        font-size: 16px;
    }
}

@media screen and (max-width: 529px) {
    #cookie {
        font-size: 14px;
        bottom: 50px;
    }
}
</style>
