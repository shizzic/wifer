<template>
	<div class="square">
        <h2>{{ lang.month }}</h2>
        <div id="pay">
            <span>{{ lang.not }}</span>
        </div>
    </div>
</template>

<script scoped>
export default {
	name: "Pay",
    props: ["lang"]
}
</script>

<style scoped>
#pay {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

#pay span {
    cursor: pointer;
    font-size: 18px;
    background-color: #ffc107;
    color: #212529;
    border-radius: 6px;

    display: inline-block;
    padding: 8px 15px;

    transition: background-color .1s linear;
}

#pay span:hover {
    background-color: #e0a800;
}

h2 {
    font-size: 28px;
    text-align: center;

    margin-bottom: 20px;
}
</style>
