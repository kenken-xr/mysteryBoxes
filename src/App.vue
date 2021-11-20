<template>
  <div>
    <HomeButton></HomeButton>
    <router-view />
  </div>

</template>

<script>
  import HomeButton from "./components/homeButton.vue";
  export default {
    name: 'App',
    components: {
      HomeButton
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
</style>