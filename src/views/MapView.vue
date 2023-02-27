 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import LiveMap from '../Map/LiveMap.vue';
import HistoryMap from '../Map/HistoryMap.vue';
import SkModal from '../features/Modal.vue';
@Component({
  components: {
    LiveMap,
    SkModal,
    HistoryMap,
  }
})
  export default class GuestDefaultPage extends Vue {
    hereMap: any;
    center: any;
    liveMapOpened: Boolean = false;
    historyMapOpened: Boolean = true;
    constructor() {
      super();
      this.center = { 
        lat: 37, 
        lng: -121
      }
    }
    mounted(){
    }

    openLiveMap() {
      this.liveMapOpened = true;
      this.historyMapOpened = false;
    }
    openHistoryMap() {
      this.liveMapOpened = false;
      this.historyMapOpened = true;
    }
}
</script>
<template>
  <div class="hello">
    <ul>
      <li @click="openLiveMap()">Events</li>
      <li @click="openHistoryMap()">History</li>
    </ul>
    <live-map v-if="liveMapOpened" ref="hereMap" :center="center" :latitude="37" :longitude="-121"></live-map> 
    <history-map v-if="historyMapOpened" :center="center" :lng="37" 
          :lat="-121"
          :zoom="10" ></history-map>  
  </div>
</template>  

<style scoped lang="scss">
</style>