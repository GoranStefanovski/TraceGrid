 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
@Component({
  components: {
  }
})
  export default class ReportsView extends Vue {


    constructor() {
      super();
    }

    mounted(){
    }
}
</script>
<template>
  <div class="hello">
    <h4>Reports List</h4>
    <div class="table-responsive"></div>
    <table></table>
  </div>
</template>  

<style scoped lang="scss">
</style>