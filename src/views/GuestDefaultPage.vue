 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

@Component({
  components: {
  }
})
  export default class GuestDefaultPage extends Vue {
    constructor() {
      super();
    }
    mounted(){
    }
}
</script>
<template>
  <div class="hello">
    <h1>Wlcome to the best tracing app :)</h1>
  </div>
</template>  

<style scoped lang="scss">
.hello > ul {
  display: flex;
  align-items: center;
  justify-content: center;
  li {
    color: black;
    margin: 10px 20px;
    list-style: none;
  }
}
</style>