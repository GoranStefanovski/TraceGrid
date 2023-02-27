
<template>
    <div id="map">
      <div id="mapContainer" style="height:90vh;width:100%" ref="historyMap"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "historyMap",
    props: {
      center: Object
    },
    data() {
      return {
        platform: null,
        apikey: "oFlhjwDFGaBa9wp1YdVWFjC_ng9AbpT4cwOV_YkEFr0"
      };
    },
    async mounted() {
      // Initialize the platform object:
      const platform = new window.H.service.Platform({
        apikey: this.apikey
      });
      this.platform = platform;
      this.initializeHereMap();
    },
    methods: {
      initializeHereMap() { // rendering map
  
        const mapContainer = this.$refs.historyMap;
        const H = window.H;
        var maptypes = this.platform.createDefaultLayers();
  
        var map = new H.Map(mapContainer, maptypes.vector.normal.map, {
          zoom: 0,
          center: this.center
        });
  
        addEventListener("resize", () => map.getViewPort().resize());
  
        new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  
        H.ui.UI.createDefault(map, maptypes);
  
        this.doRouting(map, H)
      },
      doRouting(map, H) {
          var routingParameters = {
              'transportMode': 'truck',
              'origin': '49.98108,2.4574009',
              'destination': '49.98108,2.4574009',
              'via': new H.service.Url.MultiValueQueryParameter(['49.890263,2.3936799', '49.8510269,2.424703']),
              'departureTime': '2022-11-25T07:04:24+01:00',
              'return': 'polyline,summary,travelSummary'
          };
  
          var onResult = function (result) {
              if (result.routes.length) {
                  result.routes[0].sections.forEach((section) => {
                      let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);
  
                      let routeLine = new H.map.Polyline(linestring, {
                          style: { strokeColor: 'blue', lineWidth: 3 }
                      });
  
                      map.addObject(routeLine);
  
                      map.getViewModel().setLookAtData({ bounds: routeLine.getBoundingBox() });
                  });
              }
          };
  
          var router = this.platform.getRoutingService(null, 8);
  
          router.calculateRoute(routingParameters, onResult,
              function (error) {
                  console.log(error.message);
              });
      }
    }
  };
  </script>
  
  <style scoped>
  #map {
    width: 100%;
    min-width: 360px;
    height: 90vh;
    text-align: center;
    margin: 2% auto;
    background-color: #ccc;
  }
  </style>