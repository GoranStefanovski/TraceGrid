
<template>
  <div id="app">
    <guest-header></guest-header>
    <router-view/>
    <guest-footer v-if="this.$route.name !== 'map'"></guest-footer>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import GuestHeader from "./components/GuestHeader.vue";
  import GuestFooter from './components/GuestFooter.vue';
  @Component({
    components: {
      GuestHeader,
      GuestFooter
    }
  })
  
  export default class App extends Vue {
    mounted() {
      console.log()
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Rubik');
#app {
  font-family: 'Rubik' sans-serif;
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
