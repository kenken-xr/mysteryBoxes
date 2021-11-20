<template>
    <button class="button button--nina button--round-l button--text-thick button--inverted" @click="toHome">
        再来一次</button>
</template>

<script>
    export default {
        name: '',
        data() {
            return {

            };
        },
        methods: {
            toHome() {
                this.$router.push('/homePage')
            }
        },
    }
</script>

<style scoped>
    /* Nina */

    button {
        font-family: sans-serif;
        padding: 0.4em 1em;
        border: none;
        font-size: 1.1em;
        display: block;
        border-radius: 5px;
        border-top: 1px solid #20d1e5;
        box-shadow: 0 1px 1px black;
        margin-right: 1rem;
        background: #7986cb;
        color: #fff;
        overflow: hidden;
        -webkit-transition: background-color 0.3s;
        transition: background-color 0.3s;
        position: absolute;
        right: 10px;
        bottom: 10px;
        width: 200px;
        height: 30px;
        z-index: 9999999;
    }
</style>