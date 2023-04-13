 
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
    <div class="more_details-box">
        <h3>Drivers ID: <span>{{items.id}}</span></h3>
        <h3>Drivers distance_type: <span>{{items.distance_type}}</span></h3>
        <h3>Drivers ignition_configured: <span>{{items.ignition_configured}}</span></h3>
        <h3>Drivers name: <span>{{items.name}}</span></h3>
        <h3>Drivers garmin: <span>{{items.garmin}}</span></h3>
    </div>
    <div class="more_details-box">
        <h3>Drivers ID: <span>{{items.id}}</span></h3>
        <h3>Drivers distance_type: <span>{{items.distance_type}}</span></h3>
        <h3>Drivers ignition_configured: <span>{{items.ignition_configured}}</span></h3>
        <h3>Drivers name: <span>{{items.name}}</span></h3>
        <h3>Drivers garmin: <span>{{items.garmin}}</span></h3>
    </div>
    <div class="more_details-box">
        <h3>Drivers ID: <span>{{items.id}}</span></h3>
        <h3>Drivers distance_type: <span>{{items.distance_type}}</span></h3>
        <h3>Drivers ignition_configured: <span>{{items.ignition_configured}}</span></h3>
        <h3>Drivers name: <span>{{items.name}}</span></h3>
        <h3>Drivers garmin: <span>{{items.garmin}}</span></h3>
    </div>
  </div>
</template>  

<style scoped lang="scss">
.more_details {
  &-wrap {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 10px;
      z-index: 99999;
      height: auto;
      background: white;
      box-shadow: 0px 6px 10px 0 rgb(0 0 0 / 5%);
      position: absolute;
      right: 0;
      bottom: 0;
      flex: 1;
      width: 73vw;
  }
  &-box {
    flex: 0.33%;
    text-align: left;
    padding-left: 10px;
    & > h3 {
          font-size: 20px;
          font-weight: bolder;
        & > span {
          font-size: 18px;
          font-weight: bold;
        }
      }
      &:not(:last-child) {
        border-right: 0.3px solid #495057;
      }
    }
  }
</style>