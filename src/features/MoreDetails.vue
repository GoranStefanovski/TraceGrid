 
<script lang="ts">
import { Vue, Prop, Component} from 'vue-property-decorator';

@Component({
  components: {
  }
})
  export default class MoreDetails extends Vue {
    @Prop() items
    constructor() {
      super();
    }

    mounted(){
    }
}
</script>
<template>
  <div class="more_details-wrap">
    <h3>Drivers ID: {{items.id}}</h3>
    <h3>Drivers distance_type: {{items.distance_type}}</h3>
    <h3>Drivers ignition_configured: {{items.ignition_configured}}</h3>
    <h3>Drivers name: {{items.name}}</h3>
    <h3>Drivers garmin: {{items.garmin}}</h3>
  </div>
</template>  

<style scoped lang="scss">
.more_details {
    &-wrap {
        border-radius: 10px;
        z-index: 99999;
        height: 178px;
        background: white;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 73vw;
        & > h1 {
            font-size: 20px;
        }
    }
}
</style>