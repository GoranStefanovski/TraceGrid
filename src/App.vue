
<template>
  <div id="app">
    <guest-header></guest-header>
    <router-view/>
  </div>
</template>

<script>
  import GuestHeader from "./components/GuestHeader.vue";
  export default {
    components: {
      GuestHeader
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
