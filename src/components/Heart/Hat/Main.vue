<template>
	<div class="wrapper">
        <Which :what="what" :which="which" @which="$emit('which', $event)" />
        <Mode :limit="limit" :founded="founded" :mode="mode" :all="all"
        @limit="$emit('limit', $event)" @mode="$emit('mode', $event)" />
    </div>
</template>

<script scoped>
import Which from "@/components/Heart/Hat/Which.vue"
import Mode from "@/components/Heart/Hat/Mode.vue"
export default {
	name: "Hat",
    props: ["what", "which", "limit", "founded", "mode", "all"],
    components: {
        Which,
        Mode
    }
}
</script>

<style scoped>
.wrapper {
    width: 100%;

    display: flex;
    flex-direction: column;
}
</style>
