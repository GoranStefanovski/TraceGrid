 
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
  <div class="container">
    <div class="col-lg-12 default_page">
      <div class="default_page-header">
        <h1>GPS vehicle tracking and sensor monitoring</h1>
        <p>The ultimate vehicle tracking tool for your fleet.</p>
      </div>
    </div>
  </div>
</template>  

<style scoped lang="scss">
.default_page {
  &-header {
    text-align: left;
  }
}
</style>