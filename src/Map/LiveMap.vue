
<template>
    <div id="map">
      <div id="mapContainer" style="height:86.2vh;width:100%" ref="hereMap"></div>
    </div>
</template>

<script>
export default {
  name: "LiveMap",
 
  props: {
    center: Object,
    latitude: Number,
    longitude: Number,
  },
  data() {
    return {
      platform: null,
      apikey: "oFlhjwDFGaBa9wp1YdVWFjC_ng9AbpT4cwOV_YkEFr0",
      // You can get the API KEY from developer.here.com
      map: {}
    };
  },
  async mounted() {
    const platform = new window.H.service.Platform({
      apikey: this.apikey
    });
    this.platform = platform;
    this.initializeHereMap();
  },
  methods: {
    dopMarker(position) {
      let marker = new H.map.Marker({lat: position.Latitude, lnh: position.Longitude});
      this.map.addObject(marker);
    },
    initializeHereMap() {

      const mapContainer = this.$refs.hereMap;
      const H = window.H;
      var maptypes = this.platform.createDefaultLayers();

      var map = new H.Map(mapContainer, maptypes.vector.normal.map, {
        zoom: 10,
        center: this.center
      });

      addEventListener("resize", () => map.getViewPort().resize());

      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
      H.ui.UI.createDefault(map, maptypes);
    }
  }
};
</script>

<style scoped>
#map {
  width: 100%;
    min-width: 360px;
    height: 86.2vh;
    text-align: center;
    margin: 0.5% 0 auto;
    background-color: #ccc;
}
</style>