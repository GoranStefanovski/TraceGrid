 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import LiveMap from '../Map/LiveMap.vue';
import HistoryMap from '../Map/HistoryMap.vue';
import SkModal from '@/components/Modal.vue';
@Component({
  components: {
    LiveMap,
    SkModal,
    HistoryMap
  }
})
  export default class GuestDefaultPage extends Vue {
    hereMap: any;
    center: any;

    constructor() {
      super();
      this.center = { 
        lat: 37, 
        lng: -121
      }
    }
    mounted(){
      console.log(this.hereMap)
    }
}
</script>
<template>
  <div class="hello">
    <!-- <live-map ref="hereMap" :center="center" :latitude="37" :longitude="-121"></live-map>   -->
    <history-map :center="center" :lng="37" 
          :lat="-121"
          :zoom="10" ></history-map>
    <!-- <SkModal></SkModal> -->
  </div>
</template>  