 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import LiveMap from '../Map/LiveMap.vue';
import HistoryMap from '../Map/HistoryMap.vue';
import Tracking from '../features/Tracking.vue'
import MoreDetails from '@/features/MoreDetails.vue';

@Component({
  components: {
    LiveMap,
    HistoryMap,
    Tracking,
    MoreDetails,
  }
})
  export default class GuestDefaultPage extends Vue {

    hereMap: any;
    center: any;
    liveMapOpened: Boolean = true;
    historyMapOpened: Boolean = false;
    driverDetails: any = null;
    showMoreDetails: Boolean = false;

    constructor() {
      super();
      this.center = { 
        lat: 37, 
        lng: -121
      }
    }
    mounted(){
    }

    mapActive(value) {
      if (value == 1) {
        this.liveMapOpened = true;
        this.historyMapOpened = false;
    } else {
        this.liveMapOpened = false;
        this.historyMapOpened = true;
      }
    }

    getItem(item) {
      console.log(item)
      this.driverDetails = item;
      this.showMoreDetails = true;
    }
}
</script>
<template>
  <div class="hello">
    <tracking @see-details-id="getItem" @setActiveMap="mapActive"></tracking>
    <live-map v-if="liveMapOpened" ref="hereMap" :center="center" :latitude="37" :longitude="-121"></live-map> 
    <history-map v-if="historyMapOpened" :center="center" :lng="37" 
          :lat="-121"
          :zoom="10" ></history-map>
          <!-- see-details -->
    <more-details v-if="showMoreDetails !== false" :items="driverDetails ? driverDetails : {}"></more-details>
  </div>
</template>  

<style scoped lang="scss">
</style>