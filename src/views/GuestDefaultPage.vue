 
<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';
import LiveMap from '../Map/LiveMap.vue';
import HistoryMap from '../Map/HistoryMap.vue';
import SkModal from '../features/Modal.vue';
import Auth from '@/features/Auth.vue';
@Component({
  components: {
    LiveMap,
    SkModal,
    HistoryMap,
    Auth
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
    logIn() {
      console.log('logiranje')
    }
}
</script>
<template>
  <div class="hello">
    <!-- <ul>
      <li>USERNAME <input type="text" label="username" /></li>
      <li>PASSWORD <input type="text" label="password" /></li>
    </ul>
    <button @submit="logIn()">Submit</button> -->
    <!-- <ul>
      <li @click="openLiveMap()">Events</li>
      <li @click="openHistoryMap()">History</li>
    </ul>
    <live-map v-if="liveMapOpened" ref="hereMap" :center="center" :latitude="37" :longitude="-121"></live-map> 
    <history-map v-if="historyMapOpened" :center="center" :lng="37" 
          :lat="-121"
          :zoom="10" ></history-map>  --> 
          <Auth></Auth>
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