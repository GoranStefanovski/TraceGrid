<template>
  <div class="hello">
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({type: Object, default: {}}) links;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
