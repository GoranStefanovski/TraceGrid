
<template>
  <div id="app">
    <guest-header></guest-header>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import GuestHeader from "./components/GuestHeader.vue";
  
  @Component({
    components: {
      GuestHeader
    }
  })
  
  export default class App extends Vue {

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
body {
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}
</style>
