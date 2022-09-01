<template>
    <div v-if="preloader">
        loading...
    </div>
</template>

<script>
    export default {
        props: {
            preloader: {
                preloader: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>